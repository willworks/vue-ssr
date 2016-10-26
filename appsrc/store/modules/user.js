/**
 * 这里是用 * as types 的方式，能够很好的处理 constants 添加数据的情况
 * 这样就不用修改 import 这部分的代码，直接在后面引用即可
*/

import * as types from '../constants'

const state = {
  currentId: 0,
  searchName: '',
  users: []
}

const mutations = {
  [types.USER_ALL] (state, users) {
    state.users = users
  },
  [types.USER_ADD] (state, user) {
    state.users.push(user)
  },
  [types.USER_EDIT] (state, user) {
    const id = user.id
    // 未测试
    state.users.forEach(currentUser => {
      if(currentUser.id === id) {
        currentUser = user
      }
    })
  },
  [types.USER_DELETE] (state, id) {
    state.users.$remove(state.users[id])
  },
  [types.USER_FILTER] (state, name) {
    state.searchName = name
  },
  [types.USER_START_OPERATE] (state, id) {
    state.currentId = id
  }
}

export default {
    state,
    mutations
}
