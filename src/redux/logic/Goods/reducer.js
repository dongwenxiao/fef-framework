

import { Goods_CHANGE, Goods_RESET } from './action-types'
import { factory } from './initial-state-factory'

const typesCommands = {
  [Goods_CHANGE](state, action) {
    return Object.assign({}, state, action.data)
  },
  [Goods_RESET](state, action) {
    return factory()
  }
}

export default function(state = factory(), action) {
  const actionResponse = typesCommands[action.type]
  return actionResponse ? actionResponse(state, action) : state
}

