/* 
    代理派发action
*/

// 单例
const globalActions = {}

const fetch = require('../utils/fetch')
const proxyState = require('./proxy-state')()

const convertStr2Var = (str) => {
    let execute = `
        ((state) => {
            return ${str}
        })(proxyState)
    `
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

    if (setting.action == 'FetchData') {
        let config = setting.value
        globalActions[name] = () => {
            fetch({
                    type: config.type,
                    url: config.url,
                    data: convert2Data(config.data)
                })
                .then((res) => {
                    // => 用户自己配置的部分
                    let execute = eval(config.callback)
                    execute({ res, state: proxyState })
                })
        }
    }
}

globalActions.create = create

module.exports = globalActions