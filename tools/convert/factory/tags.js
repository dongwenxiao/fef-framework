const Action = require('../enum').Action

module.exports = {
    make: (components) => {
        collection.reset()
        let code = recursive(components)
        let imports = collection.get().map(tag => ` import ${tag} from '../../antd/${tag}' `)
        return {
            imports, // 数组，用于后续计算
            code // 字符串，可直接输出
        }
    }
}

function recursive(components) {
    return components.map((one, i) => {

        collection.add(one.component)

        let tpl = []
        let tag = makeTag(one.component, one.props)
        tpl.push(tag.begin)
        if (one.children && one.children.length > 0) {
            tpl.push(recursive(one.children))
        }
        tpl.push(tag.end)
        return tpl.join('')
    }).join('')
}


let collection = {
    imports: [],
    reset: () => {
        this.imports = []
    },
    add: (tag) => {
        if (!this.imports.includes(tag)) {
            this.imports.push(tag)
        }
    },
    get: () => {
        return this.imports
    }
}

function makeTag(tag, props) {

    let eventsCode = handleEvent(props)
    let propsCode = handleProps(props)

    return {
        begin: `<${tag} ${eventsCode} ${propsCode}>`,
        end: `</${tag}>`
    }
}

function handleEvent(props) {

    if (!props || !props.__events) { return '' }

    let events = props.__events
    let eventCodes = []
    eventCodes.push('__events={{')
    for (let name in events) {
        let actions = events[name]
        let promiseActions = makeActions(actions)
        let eventCode = makeEventCode(name, promiseActions)
        eventCodes.push(eventCode)
    }
    eventCodes.push('}}')

    return eventCodes.join('')
}

function connectPromise(promiseCodes) {

    if (!promiseCodes || promiseCodes.length === 0) { return '' }

    let codes = []
    for (let i = 0; i < promiseCodes.length; i++) {
        let promiseCode = promiseCodes[i]
        if (i === 0) {
            codes.push(promiseCode)
        } else {
            codes.push('.then(')
            codes.push(promiseCode)
            codes.push(')')
        }
    }
    codes.push('.then(() => {})')
    codes = codes.join('')
    
    return codes
}

function makeEventCode(name, promiseActions) {
    
    let code = `
            ${name}: ((handler, proxyState) => {
                return ({event, value}) => {
                    handler({ event, value, state: proxyState })
                }
            })(
                /* 判断用户自定义处理 或 全局action处理 */
                ({ event, value, state }) => { 
                    ${connectPromise(promiseActions)}
                },
                proxyState
            ),
        `
    return code
}

function makeActions(actions) {
    let _actions = actions.map(action => makeAction(action))

    if (_actions.length > 0) {
        _actions[0] += '()'
    }

    return _actions
}

function makeAction(action) {
    let _action = action.action
    let _value = action.value

    // Promise 执行说明
    // ()() 双括号结构表示立即执行，此处只声明，不执行
    // 在makeActions()方法中，第一个action会带着 ()
    // 后面其他的action不带 ()

    // 公共action
    if (_action === Action.Fetch) {
        return `proxyAction['${_value}']` // => promise
    } else if (_action === Action.Script) {
        return `
            (() => {
                return new Promise((reslove) => {
                    (${_value})({event, value, state})
                })
            })
        `
    } else if (_action === Action.Redirect) {
        return `
            (() => {
                return new Promise((reslove) => {
                    proxyAction.redirect({url: '${_value}'})
                })
            })
        `
    } else {
        return ''
    }
}

function handleProps(props) {
    let clearPorps = cleanProps(props)
    return makeProps(clearPorps)
}

function cleanProps(props) {
    let newProps = {}
    for (let key in props) {
        if (['__events'].includes(key)) { continue }
        newProps[key] = props[key]
    }
    return newProps
}

function makeProps(props) {
    let code = ''
    for (let key in props) {
        let prop = props[key]

        if (typeof prop === 'string') {
            // string
            code += ` ${key}={${JSON.stringify(prop)}} `
        } else if (typeof prop === 'object') {

            if (prop.type === 'object') {
                code += ` ${key}={${JSON.stringify(prop.value)}} `
            }

            if (prop.type === 'bind') {
                let _val = prop.value.replace('state', 'this.props')
                code += ` ${key}={${_val}} `
            }

        } else {
            console.log('Error:  unknow prop type :::' + prop)
        }

        /* if (typeof prop === 'string') {
            // string
            code += ` ${key}={${JSON.stringify(prop)}} `
        } else if (typeof prop === 'object' && !prop.length) {
            // object
            if (prop.type === 'bind') {
                let _val = prop.value.replace('state', 'this.props')
                code += ` ${key}={${_val}} `
            } else if (prop.type === 'component') {
                let _val = prop.value
                _val = _val.length ? _val : [_val]
                let _code = _val.map(item => {
                    item.render.map(_i => {
                        return recursive(_val)
                    })
                })
                // let _code = recursive(_val)

                
                console.log(_code)

                code += _code
            } else {
                new Error('未知 prop 类型：' + prop.type)
            }
        } else if (typeof prop === 'object' && prop.length) {
            // array

        } */

        // let value = JSON.stringify(prop)

        // if (value.includes('bind:')) {
        //     let c = value.substr(1, value.length - 2).split('bind:')[1].replace('state', 'this.props')
        //     code += ` ${key}={${c}} `
        // } else {
        //     code += ` ${key}={${value}} `
        // }

    }
    return code
}