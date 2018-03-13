/* 
    用户自定义的action：fetch类型
*/

const proxyAction = require('./proxy-action')

proxyAction.create('GetGoodsList',
    // => 用户自己配置的部分
    {
        action: 'FetchData',
        value: {
            type: 'get',
            url: '/api/goods/lists',
            data: {
                goods_name: 'state.goods.filter_goodsName',
                goods_id: 'state.goods.filter_goodsID',
                brand_name: 'state.goods.filter_goodsBrand',
                brand_name: 'state.goods.filter_goodsCategory',
                page: 'state.goods.goodsPageIndex',
                page_size: 'state.goods.goodsPageSize',
            },
            callback: `
                    ({ res, state }) => {
                        state.goods.goodsList = res.data.lists
                        state.goods.goodsTotal = res.data.lists_count
                    }
                `
        }
    }
)