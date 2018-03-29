
import { GoodsAdd_CHANGE, GoodsAdd_RESET } from './action-types'
export const change = (data) => ({
  type: GoodsAdd_CHANGE,
  data
})
export const reset = () => ({
  type: GoodsAdd_RESET
})
