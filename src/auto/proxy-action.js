/* 
    代理派发action
*/

// 单例
const proxyAction = {}

const { fetch } = require('../utils/fetch')

const convertStr2Var = (str) => {
    let execute = `
        ((state) => {
            return ${str}
        })(proxyState)
    `
        // 在作用域内可用
    const proxyState = require('./proxy-state')()
    return eval(execute)
}

const convert2Data = (data) => {
    let newData = {}
    for (let key in data) {
        newData[key] = convertStr2Var(data[key])
    }
    return newData
}

const create = (name, setting) => {

    if (setting.action === 'Script') {
        proxyAction[name] = setting.value
    }

    if (setting.action === 'Fetch') {
        let config = setting.value
        proxyAction[name] = () => {
            return fetch({
                    type: config.type,
                    url: config.url,
                    data: convert2Data(config.data)
                })
                .then((res) => {
                    // => 用户自己配置的部分
                    const proxyState = require('./proxy-state')()
                    let execute = eval(config.callback)
                    execute({ res, state: proxyState })
                })
        }
    }
}

function redirectPath(path) {
    proxyAction.__history.push(path)
}

function redirectUrl(url) {
    window.location.href = url
}
const setHistory = (history) => {
    proxyAction.__history = history
    return proxyAction
}


const redirect = ({ type = 'path', url }) => {

    // path: history重定向(页面不刷新)
    // url: url重定向(页面刷新)

    if (~url.substr(0, 5).indexOf('http')) {
        type = 'url'
    }

    switch (type) {
        case 'url':
            return redirectUrl(url)
        case 'path':
            return redirectPath(url)
        default:
            return console.error('Unknow redirect type', type)
    }
}


proxyAction.create = create
proxyAction.setHistory = setHistory
proxyAction.redirect = redirect
module.exports = proxyAction