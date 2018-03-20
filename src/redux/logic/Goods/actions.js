
import { Goods_CHANGE, Goods_RESET } from './action-types'
export const change = (data) => ({
  type: Goods_CHANGE,
  data
})
export const reset = () => ({
  type: Goods_RESET
})
