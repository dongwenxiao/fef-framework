

import { GoodsPage_CHANGE, GoodsPage_RESET } from './action-types'

export const change = (data) => ({
  type: GoodsPage_CHANGE,
  data
})

export const reset = () => ({
  type: GoodsPage_RESET
})

