// => 需要pageName

import { PAGE1_CHANGE, PAGE1_RESET } from './action-types'
import { factory } from './initial-state-factory'

const typesCommands = {
    [PAGE1_CHANGE](state, action) {
        return Object.assign({}, state, action.data)
    },
    [PAGE1_RESET](state, action) {
        return factory()
    }
}

export default function(state = factory(), action) {
    const actionResponse = typesCommands[action.type]
    return actionResponse ? actionResponse(state, action) : state
}