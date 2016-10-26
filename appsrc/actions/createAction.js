/**
 * 和 flux createAction 的概念差不多
*/
export default function createAction(type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}