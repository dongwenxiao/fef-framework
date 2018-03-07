
// TODO:
const factory = (componentName) => {

    let partial = `
        <${componentName} events={{
            onChange: ((handler, proxy_state) => {
                return (value) => {
                    handler({ value, state: proxy_state })
                }
            })(
                ({ value, state }) => { state.goods.filter_goodsName = value },  // => 用户自己配置的部分
                proxy_state
            )
        }} />
    `
}