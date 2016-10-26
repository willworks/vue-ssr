import * as types from '../store/constants'

/**
 * 由于 Vue 的异步逻辑，这里不能使用之前封装的 createActions 来做
 * 这里会参杂一些 action 逻辑，所以大多数情况下不是那么纯
 * 比起 redux ，这里 vuex action 是一个动作逻辑的处理方法，与 reflux 的 action 概念雷同
*/

/**
 * User 模块
*/
export const userAll = ({ dispatch }, ...args) => {
    return dispatch(types.USER_ALL, ...args)
}
export const userAdd = ({ dispatch }, ...args) => {
    return dispatch(types.USER_ADD, ...args)
}
export const userEdit = ({ dispatch }, ...args) => {
    return dispatch(types.USER_EDIT, ...args)
}
export const userDelete = ({ dispatch }, ...args) => {
    return dispatch(types.USER_DELETE, ...args)
}
export const userFilter = ({ dispatch }, ...args) => {
    return dispatch(types.USER_FILTER, ...args)
}
export const userStartOperate = ({ dispatch }, ...args) => {
    return dispatch(types.USER_START_OPERATE, ...args)
}