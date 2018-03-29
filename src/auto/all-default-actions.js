
/* 
    每个页面默认动作，如：修改状态、重置状态
*/

import * as Goods from '../redux/logic/Goods/actions'
import * as GoodsAdd from '../redux/logic/GoodsAdd/actions'
import * as News from '../redux/logic/News/actions'

const proxyAction = require('./proxy-action')


proxyAction.create('Goods', {
  action: 'Script',
  value: Goods
})


proxyAction.create('GoodsAdd', {
  action: 'Script',
  value: GoodsAdd
})


proxyAction.create('News', {
  action: 'Script',
  value: News
})

