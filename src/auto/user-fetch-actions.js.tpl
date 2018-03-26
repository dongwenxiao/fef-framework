/* 
    用户自定义的action：fetch类型
*/

const proxyAction = require('./proxy-action')

proxyAction.create('GetGoodsList',
    // => 用户自己配置的部分
    {
        action: 'Fetch',
        value: {
            type: 'get',
            url: 'http://10.60.206.15:3167/list',
            // path: '/api/goods/lists',
            data: {
                goods_name: 'state.Goods.filterGoodsName'
            },
            callback: `
                ({ res, state }) => {
                    state.Goods.goodsList = res
                }
            `
        }
    }
)