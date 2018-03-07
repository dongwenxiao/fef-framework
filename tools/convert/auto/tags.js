const { Action } = require('../enum')

const factoryEventAndAction = (events) => {

    let eventCode = ''
    for (let eventName in events) {
        let actions = events[eventName]

        eventCode += factoryEvent(eventName, actions)
    }

    // console.log('eventCode>>>>>>>>>>>>>>>', eventCode)

    return eventCode
}

const factoryAction = (action) => {

    let aa = action.action
    let vv = action.value

    // 公共action
    if (aa === Action.Custom) {
        return `;globalActions['${vv}']();`
    }
    //
    else if (aa === Action.ChangeState) {
        return `;(${vv})({event, value, state});`
    }
    //
    else if (aa === Action.Redirect) {
        return `;browserHistory.push('${vv}');`
    }
    //
    else if (aa === Action.Script) {
        return `;(${vv})({state});`
    }
    //
    else {
        return ''
    }
}

const factoryEvent = (event, actions) => {

    let actionsCode = actions.map(action => factoryAction(action)).join('')

    // console.log('actionsCode>>>>>>>>>>>>>>>', actionsCode)

    let eventTpl = `
        __events={{
            ${event}: ((handler, proxyState) => {
                return ({event, value}) => {
                    handler({ event, value, state: proxyState })
                }
            })(
                // 判断用户自定义处理 或 全局action处理
                ({ event, value, state }) => { 
                    ${actionsCode}
                },
                proxyState
            )
        }}
    `
    return eventTpl
}

const cleanProps = (props) => {
    let newProps = {}
    for (let key in props) {
        if (['__events'].includes(key)) continue
        newProps[key] = props[key]
    }
    return newProps
}

const convertPropsToCode = (props) => {
    let code = ''
    for (let key in props) {
        let value = JSON.stringify(props[key])
            // console.log(value)

        if (value.includes('bind:')) {
            let c = value.substr(1, value.length - 2).split('bind:')[1].replace('state', 'this.props')
            code += ` ${key}={${c}} `
        } else {
            code += ` ${key}={${value}} `
        }

    }
    return code
}


module.exports = {

    make: (componentName, props) => {

        let event = props && props.__events && factoryEventAndAction(props.__events) || ''

        if (props) {
            props = cleanProps(props)
            props = convertPropsToCode(props)
                // console.log('>>>>>>>>>>>>>>>', props)
        } else {
            props = ''
        }

        return {
            begin: `<${componentName} ${event} ${props}>`,
            end: `</${componentName}>`
        }
    },


    // Page: (props) => '',
    // Card: (props) => {
    //     return {
    //         begin: '<Card>',
    //         end: '</Card>'
    //     }
    // },
    // Row: (props) => {
    //     return {
    //         begin: '<Row gutter={{ md: 8, lg: 24, xl: 48 }}>',
    //         end: '</Row>'
    //     }
    // },
    // Col: (props) => {
    //     return {
    //         begin: '<Col md={8} sm={24}>',
    //         end: '</Col>'
    //     }
    // },
    // Input: (props) => {
    //     return {
    //         begin: `
    //             <Input ${factoryEventAndAction(props.__events)}>
    //         `,
    //         end: '</Input>'
    //     }
    // },
    // Label: (props) => {
    //     return {
    //         begin: '<Label>' + props.text,
    //         end: '</Label>'
    //     }
    // },
    // Button: (props) => {
    //     return {
    //         begin: '<Button>',
    //         end: '</Button>'
    //     }
    // },
    // TagSelect: (props) => {
    //     return {
    //         begin: '<TagSelect>',
    //         end: '</TagSelect>'
    //     }
    // },
    // Table: (props) => {
    //     return {
    //         begin: '<Table>',
    //         end: '</Table>'
    //     }
    // }
}