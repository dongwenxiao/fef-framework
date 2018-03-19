

import { NewsPage_CHANGE, NewsPage_RESET } from './action-types'
export const change = (data) => ({
  type: NewsPage_CHANGE,
  data
})
export const reset = () => ({
  type: NewsPage_RESET
})
