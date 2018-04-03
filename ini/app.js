const appConfig = {
    config: {
        api: 'http://10.60.206.6:3167',
    },
    actions: { // page内全局 action
        GetGoodsList: {
            action: 'Fetch',
            value: {
                type: 'get',
                url: '/list',
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
        },
        AddGoods: {
            action: 'Fetch',
            value: {
                type: 'post',
                url: '/add',
                data: {
                    goodsName: 'state.GoodsAdd.goodsName'
                },
                callback: `
                    ({res, state}) => {
                        if(res.code === 200){
                            alert('success')
                        }
                    }
                `
            }
        }
    },
    pages: [{
        name: 'Goods', // 唯一
        component: require('./goods/component'),
        state: require('./goods/state')
    }, {
        name: 'GoodsAdd', // 唯一
        component: require('./goods-add/component'),
        state: require('./goods-add/state')
    }/* , {
        name: 'News', // 唯一
        component: require('./news/component'),
        state: require('./news/state')
    } */]
}

module.exports = appConfig