/* 
    每个页面默认动作，如：修改状态、重置状态
*/

import * as GoodsPage from '../redux/logic/GoodsPage/actions'

const proxyAction = require('./proxy-action')

proxyAction.create('GoodsPage', {
    action: 'Script',
    value: GoodsPage
})