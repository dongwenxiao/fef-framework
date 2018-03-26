/* 
    代理状态设置
*/


// 单例
let proxyState

module.exports = (store, proxyAction) => {

    if (!store) {
        if (!proxyState) { new Error('使用前必须先实例一次proxyState') }
        return proxyState
    } else {
        if (proxyState) { new Error('proxyState已经被实例过了') }
        proxyState = {}
    }

    let realState = store.getState()
    for (let key in realState) {
        if (true) {
            proxyState[key] = new Proxy({}, {
                get: (target, attr) => {
                    // 默认获取状态
                    return store.getState()[key][attr]
                },
                set: (target, attr, value) => {
                    let data = {}
                    data[attr] = value
                    // 默认修改状态
                    store.dispatch(proxyAction[key].change(data))
                    return true
                }
            })
        }
    }

    // 默认重置状态
    proxyState.reset = (key) => {
        store.dispatch(proxyAction[key].reset())
    }
    return proxyState
}