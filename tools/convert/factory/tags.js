const Action = require('../enum').Action

module.exports = {
    make: (components) => {
        collection.reset()
        let code = recursive(components)
        let imports = collection.get().map(tag => ` import ${tag} from '../../antd/${tag}' `).join('\n')
        return {
            imports,
            code
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

    let eventsCode = handlerEvent(props)
    let propsCode = handlerProps(props)

    return {
        begin: `<${tag} ${eventsCode} ${propsCode}>`,
        end: `</${tag}>`
    }
}

function handlerEvent(props) {

    if (!props || !props.__events) { return '' }

    let events = props.__events
    let eventCode = ''
    for (let name in events) {
        let actions = events[name]
        let actionsCode = actions.map(action => makeAction(action)).join('')
        eventCode += eventTpl(name, actionsCode)
    }

    return eventCode
}

function eventTpl(name, actionsCode) {
    return `
            __events={{
                ${name}: ((handler, proxyState) => {
                    return ({event, value}) => {
                        handler({ event, value, state: proxyState })
                    }
                })(
                    /* 判断用户自定义处理 或 全局action处理 */
                    ({ event, value, state }) => { 
                        ${actionsCode}
                    },
                    proxyState
                )
            }}
        `
}

function makeAction(action) {
    let _action = action.action
    let _value = action.value

    // 公共action
    if (_action === Action.Fetch) {
        return `;globalActions['${_value}']();`
    } else if (_action === Action.Script) {
        return `;(${_value})({event, value, state});`
    } else if (_action === Action.Redirect) {
        return `;browserHistory.push('${_value}');`
    } else if (_action === Action.Script) {
        return `;(${_value})({state});`
    } else {
        return ''
    }
}

function handlerProps(props) {
    porps = cleanProps(props)
    return makeProps(props)
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
        let value = JSON.stringify(props[key])

        if (value.includes('bind:')) {
            let c = value.substr(1, value.length - 2).split('bind:')[1].replace('state', 'this.props')
            code += ` ${key}={${c}} `
        } else {
            code += ` ${key}={${value}} `
        }

    }
    return code
}