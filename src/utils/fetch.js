const formData = require('./form-data')
// const api = require('@erp/config/api')
// const urlToken = require('./url-token')
// const loginUrl = ''

const domain = '' // 来自配置

module.exports = function({ path, type = 'get', data }) {

    let url = domain + path
    const method = type.toUpperCase()
    const opt = {
        method: method,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        mode: 'cors'
    }

    // Method: GET
    if (method === 'GET') {
        let params = []
        if (data) {
            for (let key in data) {
                if (data[key] !== '' && data[key] !== null && data[key] !== undefined)
                    params.push(`${key}=${data[key]}`)
            }
        }
        url += '?' + params.join('&')
    }

    // Method: POST | PUT | DELETE
    if (method === 'POST' ||
        method === 'PUT' ||
        method === 'DELETE') {
        opt.body = formData(data)
    }

    // // 处理加token
    // url = urlToken(url)

    // Promise
    return fetch(url, opt)
        .then((res) => {
            if (res.ok) {
                return res.json()
            }
            return res.text()
        })
        .then(res => {
            // 403 无权限 401 没有登录、其他
            if (res.code == 403) {
                message.error('缺少权限！请登录ventas设置权限！')
            } else if (res.code == 401) {
                let url = window.location.origin + '/welcome'
                window.location.href = loginUrl + url
            }

            return res
        })
        .catch((err) => {
            message.error('server error')
            console.log(err)
        })
}