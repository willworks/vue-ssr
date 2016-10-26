<template>
  <div class="user-edit">
    <header-vue title="用户编辑"></header-vue>
    <div class="main">
      <label for="userName">
        <span class="label-text">姓名</span>
        <input v-model="user.name" id="userName" type="text">
      </label>
      <label for="tel">
        <span class="label-text">手机</span>
        <input v-model="user.tel" id="tel" type="text" number>
      </label>
    </div>
    <div class="footer">
      <button @click="save()" class="btn btn-save">保存</button>
      <button @click="close()" class="btn btn-close">关闭</button>
    </div>
  </div>
</template>

<script>
  import HeaderVue from './HeaderVue'
  import { userEdit } from '../../actions/user'
  import { getUser } from '../../getters/user'
  import router from '../../router'

  export default {
    components: {
      HeaderVue
    },
    vuex: {
      actions: {
        userEdit
      },
      getters: {
        user: getUser
      }
    },
    methods: {
      save () {
        this.userEdit(this.user)

        // 回到用户列表
        this.close()
      },
      close () {
        router.go({ name: 'user' })
      }
    }
  }
</script>

<style scoped>
  label {
    display: block;
    font-size: 14px;
    color: #333;
  }

  input {
    width: 100%;
    border: 1px solid #F4F7FA;
    box-sizing: border-box;
    width: 100%;
    min-width: 120px;
    height: 36px;
    line-height: 1.5;
    font-size: 14px;
    /* (36 - 14) => 22 */
    padding: 4px 6px;
  }

  input:focus {
    outline: none;
    border-color: #009CD5;
  }

  .main,
  .footer {
    padding: 20px;
  }

  .footer {
    text-align: center;
  }

  .label-text {
    display: block;
    margin: 10px 0;
  }

  .btn {
    border: 1px solid transparent;
    width: 100px;
    line-height: 30px;
  }

  .btn-save {
    color: #fff;
    background: #009CD5;
  }

  .btn-close {
    margin-left: 12px;
    color: #333;
    background: #fff;
    border-color: #F4F7FA;
  }

  .btn:focus {
    outline: none;
  }

  .btn:hover {
    cursor: pointer;
  }

  .btn-save:hover {
    background-color: #50BAF0;
  }

  .btn-close:hover {
    background-color: #eee;
  }
</style>
