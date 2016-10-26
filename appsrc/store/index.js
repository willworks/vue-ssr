/**
 * Vuex Store 的入口文件
*/

import Vue from 'vue'
import Vuex from 'vuex'

/**
 * 需要加载模块，使用统一入口的方式来组织代码的导出
 * 模块的话，还是显示的导出一下，毕竟也不是经常修改
*/
import { user } from './modules'

Vue.use(Vuex)

/**
 * 可以在这里处理［中间件］的操作
 * 其实就是将［中间件］的一些数据导入 store 来进行管理
*/

export default new Vuex.Store({
  modules: {
    user
  }
})