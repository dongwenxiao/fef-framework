// 单例
let proxyState

module.exports = (store, actions) => {

    if (!store) {
        if (!proxyState) new Error('使用前必须先实例一次proxyState')
        return proxyState
    } else {
        if (proxyState) new Error('proxyState已经被实例过了')
        proxyState = window.proxy_state = {}
    }

    let realState = store.getState()
    for (let key in realState) {
        if (['goods', 'dict'].includes(key)) {
            proxyState[key] = new Proxy({}, {
                get: (target, attr) => {
                    return store.getState()[key][attr]
                },
                set: (target, attr, value) => {
                    let data = {}
                    data[attr] = value
                    store.dispatch(actions[key].change(data))
                    return true
                }
            })
        }
    }
    return proxyState
}