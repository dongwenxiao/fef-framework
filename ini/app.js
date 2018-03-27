const appConfig = {
    config: {
        api: 'http://erp-test-api.cmcm.com',
    },
    actions: { // page内全局 action
        GetGoodsList: {
            action: 'Fetch',
            value: {
                type: 'get',
                url: 'http://10.60.205.169:3167/list',
                data: {
                    goods_name: 'state.Goods.filterGoodsName',
                    goods_id: 'state.Goods.filterGoodsID',
                    brand_name: 'state.Goods.filter_goodsBrand',
                    brand_name: 'state.Goods.filter_goodsCategory',
                    page: 'state.Goods.goodsPageIndex',
                    page_size: 'state.Goods.goodsPageSize',
                },
                callback: `
                    ({res, state}) => {
                        state.Goods.goodsList = res
                    }
                `
            }
        }
    },
    pages: [{
        name: 'Goods', // 唯一
        component: require('./goods/component'),
        state: require('./goods/state')
    }/* , {
        name: 'News', // 唯一
        component: require('./news/component'),
        state: require('./news/state')
    } */]
}

module.exports = appConfig