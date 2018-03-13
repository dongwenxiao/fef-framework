import * as page1ActionTypes from './logic/page1/action-types'

const autoActionTypes = [page1ActionTypes]

// 以上是自动生成部分------------------------------------------------------

const actionTypes = {
    // demo todo clean
    CHANGE_INPUT_INFO: 'CHANGE_INPUT_INFO',
    GET_MEMBER_LIST: 'GET_MEMBER_LIST'
}

// 合并其他
autoActionTypes.forEach(at => {
    for (let key in at) {
        actionTypes[key] = at[key]
    }
})

export default actionTypes