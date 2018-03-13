// => 需要pageName

import { PAGE1_CHANGE, PAGE1_RESET } from '../../action-types'

export const change = (data) => ({
    type: PAGE1_CHANGE,
    data
})

export const reset = () => ({
    type: PAGE1_RESET
})
