

<template>
  <!--参考文章：https://blog.csdn.net/csdnear/article/details/79426915-->
    <el-table :data="users"  align="left">
      <el-table-column prop="userid"  label="用户编号"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="a">
          <el-button size="mini" type="danger" @click="del(a.$index)">删除</el-button>
        </template>
      </el-table-column>

    </el-table>
   <!-- <table>
      <tr>
        <td>编号</td>
        <td>姓名</td>
      </tr>
      <tr v-for="(item, index) in users"
          :key="index">
        <td>{{item.userid}}</td>
        <td>{{item.username}}</td>
      </tr>
    </table>-->
</template>
<script>
  import axios from 'axios'

  export default {
    name: "app",
    data () {
      return {
        msg: "hello world",
        users: {},
      }
    },
    created () {
      const that = this;
      axios.get('http://127.0.0.1:8771/redis/test/getUserInfoList?userId=test86')
        .then(function (response) {
          console.log(response);
          console.log("response.data="+response.data);
          that.users = response.data;
        })
    },
    headers: {
      'Content-Type':'application/json'
    },
    methods: {//添加在data(){...},的后面
      create(){
        this.users.push(this.info)//给tabledata添加一个对象（之前我们创建的info）
        this.info =  {name: '', age: null, sex: ''}//点击创建后，让option还原，而不是停留在所选的项
      },
      del(index){
        alert(1);
        this.users.splice(index,1)//删除点击的对象，index是lot-scope="a" a.$index传过来的
      }
    }
  }
</script>
<style scoped>
</style>
