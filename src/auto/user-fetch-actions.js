

const proxyAction = require('./proxy-action')


proxyAction.create('GetGoodsList',
  {
    action: 'Fetch',
    value: {
      type: 'get',
      url: 'http://10.60.205.169:3167/list',
      data: {
        "goods_name": "state.Goods.filterGoodsName",
        "goods_id": "state.Goods.filterGoodsID",
        "brand_name": "state.Goods.filter_goodsCategory",
        "page": "state.Goods.goodsPageIndex",
        "page_size": "state.Goods.goodsPageSize"
      },
      callback: `
                    ({res, state}) => {
                        state.Goods.goodsList = res
                    }
                `
    }
  }
)


