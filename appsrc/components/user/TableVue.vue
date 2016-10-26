<template>
  <div class="table">
    <div class="thead">
      <div class="row clearfix">
        <span class="col">姓名</span>
        <span class="col">年龄</span>
        <span class="col">电话</span>
        <span class="col">操作</span>
      </div>
    </div>
    <div class="tbody">
      <div v-for="user in users" transition="expand" class="row clearfix">
        <span class="col col-center">{{ user.name }}</span>
        <span class="col col-center">{{ user.age }}</span>
        <span class="col">{{ user.tel }}</span>
        <div class="col col-center">
          <button @click="toEdit(user.id)" class="btn btn-edit">编辑</button>
          <button @click="toDelete($index)" class="btn btn-del">删除</button>
        </div>
      </div>
	</div>
  </div>
</template>

<script>
  import router from '../../router'
  import axios from 'axios'
  import * as actions from '../../actions/user'
  import { getUsers } from '../../getters/user'
  import user from '../../mocks/user.json'

  export default {
    vuex: {
      actions,
      getters: {
        users: getUsers
      }
    },
    created () {
      this.fetchUsers()
    },
    methods: {
      toEdit (id) {
        this.userStartOperate(id)

        // 去编辑页面
        router.go({ name: 'userEdit', params: { id } })
      },
      toDelete (id) {
        this.userDelete(id)
      },
      fetchUsers () {
        this.userAll(user);
//        axios('/mocks/user.json').then((ret) => {
//          if(ret.status === 200) {
//            this.userAll(ret.data)
//          }
//        })
      }
    }
  }
</script>

<style scoped>
  .table {
    margin: 0 15px;
    font-size: 14px;
    border: 1px solid #F4F7FA;
  }

  .row {
    padding: 10px 0;
    border-bottom: 1px solid #F4F7FA;
  }

  .thead {
    background: rgba(226, 226, 226, .2);
  }

  .thead .col {
    text-align: center;
    line-height: normal;
  }

  .col {
    float: left;
    width: 25%;
    line-height: 30px;
  }

  .col.col-center {
    text-align: center;
  }

  .btn {
    display: inline-block;
    width: 45%;
    max-width: 80px;
    height: 30px;
    background: #009CD5;
    border: none;
    color: #fff;
    box-sizing: border-box;
  }

  .btn:focus {
    outline: none;
  }

  .btn-del {
    margin-left: 5px;
    background: #C93B2A;
  }

  .btn:hover {
    cursor: pointer;
    background-color: #50BAF0;
  }

  .btn-del:hover {
    background-color: #DA6661;
  }

  .clearfix:after {
    display: table;
    content: '\20';
    clear: both;
  }

  .expand-transition {
    transition: all .3s ease;
    opacity: 1;
  }

  .expand-enter,
  .expand-leave {
    opacity: .01;
  }
</style>
