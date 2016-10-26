<template>
  <div class="main-user">
    <header-vue title="用户列表"></header-vue>
    <search></search>
    <button class="btn btn-add" @click="add">添加</button>
    <table-vue></table-vue>
  </div>
</template>

<script>
  import HeaderVue from './HeaderVue'
  import TableVue from './TableVue'
  import Search from './Search'
  import { userAdd } from '../../actions/user'

  export default {
    vuex: {
      actions: {
        userAdd
      }
    },
    components: {
      HeaderVue,
      TableVue,
      Search
    },
    methods: {
      add: function () {
        this.userAdd({
          id: 5,
          name: 'xx',
          age: 20,
          tel: 123
        });
      }
    }
  }
</script>

<style scoped>
.btn {
    display: inline-block;
    width: 50px;
    line-height: 36px;
    text-align: center;
    margin-left: 8px;
    background: #009CD5;
    border: none;
    color: #fff;
    font-size: 14px;
    box-sizing: border-box;
  }

  .btn:hover {
    cursor: pointer;
    background-color: #50BAF0;
  }

  .btn:focus {
    outline: 0 none;
  }

  .btn-add {
    margin: 0 0 10px 15px;
  }
</style>
