<template>
  <div class="search">
    <input v-model="userName" @keyup.enter="onSeachSubmit()" class="search-input" type="text" placeholder="请输入姓名" autofocus="true">
    <button @click.stop.prevent="onSeachSubmit" class="btn">搜索</button>
  </div>
</template>

<script>
  import { userFilter } from '../../actions/user'

  export default {
    vuex: {
      actions: {
        userFilter
      }
    },
    data () {
      return {
        userName: ''
      }
    },
    methods: {
      onSeachSubmit () {
        this.userFilter(this.userName)
      }
    }
  }
</script>

<style scoped>
  .search {
    margin: 10px 0 10px 15px;
  }

  .search-input {
    border: 1px solid #F4F7FA;
    box-sizing: border-box;
    width: 30%;
    max-width: 400px;
    min-width: 309px;
    height: 36px;
    line-height: 1.5;
    font-size: 14px;
    /* (36 - 14) => 22 */
    padding: 4px 6px;
  }

  .search-input:focus {
    outline: 0 none;
    border-color: #50BAF0;
  }

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
</style>
