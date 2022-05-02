<template>
  <div class="login">
    <div class="login-div">
      <div class="login-item">
        <div class="title" style="margin-bottom: 40px">诊疗信息管理系统</div>
      </div>
      <div class="login-item">
        <span>{{isAdmin?"工号":"手机"}}：</span>
        <el-input style="width:200px" v-model="workNumber" placeholder="请输入工号"/>
      </div>
      <div class="login-item">
        <span>密码：</span>
        <el-input style="width:200px" show-password v-model="workNumber" placeholder="请输入密码"/>
      </div>
      <div class="login-item">
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="success" @click="goRegister">注册</el-button>
        <el-button type="danger" @click="isAdmin = !isAdmin">{{isAdmin?"用户":"管理员"}}登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      workNumber: '',
      isAdmin: true
    }
  },
  methods: {
    login() {
      console.log(1);
      this.$router.push({
        name:this.isAdmin?"All":"userRecord"
      })
    },
    goRegister() {
      this.$router.push({
        name:"register"
      })
    }
  }
}
</script>

<style scope>
.login {
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.login-div {
  height: 400px;
  width: 800px;
  border-radius: 10px;
  background-color: rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-item {
  margin-bottom: 20px;
}

.title {
  font-size: 30px;
  font-weight: 400;
}
</style>