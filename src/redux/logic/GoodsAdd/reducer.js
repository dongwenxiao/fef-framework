

import { GoodsAdd_CHANGE, GoodsAdd_RESET } from './action-types'
import { factory } from './initial-state-factory'

const typesCommands = {
  [GoodsAdd_CHANGE](state, action) {
    return Object.assign({}, state, action.data)
  },
  [GoodsAdd_RESET](state, action) {
    return factory()
  }
}

export default function(state = factory(), action) {
  const actionResponse = typesCommands[action.type]
  return actionResponse ? actionResponse(state, action) : state
}

