
import { News_CHANGE, News_RESET } from './action-types'
export const change = (data) => ({
  type: News_CHANGE,
  data
})
export const reset = () => ({
  type: News_RESET
})
