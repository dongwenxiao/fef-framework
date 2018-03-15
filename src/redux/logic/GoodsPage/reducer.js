

import { GoodsPage_CHANGE, GoodsPage_RESET } from './action-types'
import { factory } from './initial-state-factory'

const typesCommands = {
  [GoodsPage_CHANGE](state, action) {
    return Object.assign({}, state, action.data)
  },
  [GoodsPage_RESET](state, action) {
    return factory()
  }
}

export default function(state = factory(), action) {
  const actionResponse = typesCommands[action.type]
  return actionResponse ? actionResponse(state, action) : state
}

