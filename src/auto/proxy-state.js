/* 
    代理状态设置
*/


// 单例
let proxyState
const stateKeys = ['goods', 'dict'] /// => auto generate

module.exports = (store, proxyAction) => {

    if (!store) {
        if (!proxyState) new Error('使用前必须先实例一次proxyState')
        return proxyState
    } else {
        if (proxyState) new Error('proxyState已经被实例过了')

        // proxyState = window.proxy_state = {}
        proxyState = {}
    }

    let realState = store.getState()
    for (let key in realState) {
        if (stateKeys.includes(key)) {
            proxyState[key] = new Proxy({}, {
                get: (target, attr) => {
                    return store.getState()[key][attr]
                },
                set: (target, attr, value) => {
                    let data = {}
                    data[attr] = value
                    store.dispatch(proxyAction[key].change(data))
                    return true
                }
            })
        }
    }
    return proxyState
}