

import { NewsPage_CHANGE, NewsPage_RESET } from './action-types'
import { factory } from './initial-state-factory'

const typesCommands = {
  [NewsPage_CHANGE](state, action) {
    return Object.assign({}, state, action.data)
  },
  [NewsPage_RESET](state, action) {
    return factory()
  }
}

export default function(state = factory(), action) {
  const actionResponse = typesCommands[action.type]
  return actionResponse ? actionResponse(state, action) : state
}

