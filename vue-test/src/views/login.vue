<template>
  <div>
    <input type="text" name="uname" />
    <input type="text" name="upwd" />
    <input type="button" value="登陆" />
    <input type="button" value="Test" @click="trunToTest" />
    <input type="button" value="Index" @click="trunToIndex" />
    <input type="button" value="查看用户列表" @click="trunToUserInfo" />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    trunToIndex() {
      this.$router.push("/index");
    },
    trunToTest() {
      this.$router.push("/test");
    },
    trunToUserInfo() {
      this.$router.push("/UserInfo");
    },
  },
};
</script>
<style scoped  >
</style>