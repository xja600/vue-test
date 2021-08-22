

<template>
  <!--只允许有一个根节点-->
  <div class="test">
    <table>
      <tr>
        <td>编号</td>
        <td>姓名</td>
      </tr>
      <tr v-for="(item, index) in users"
          :key="index">
        <td>{{item.userid}}</td>
        <td>{{item.username}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    name: "Book",
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
    }
  }
</script>
<style scoped>
</style>
