<template>
  <div class="login">
    <div class="login-div">
      <div class="login-item">
        <div class="title" style="margin-bottom: 40px">诊疗信息管理系统</div>
      </div>
      <div class="login-item">
        <span>工号：</span>
        <el-input style="width:200px" v-model="workNumber" placeholder="请输入工号"/>
      </div>
      <div class="login-item">
        <span>姓名：</span>
        <el-input style="width:200px" v-model="workNumber" placeholder="请输入姓名"/>
      </div>
      <div class="login-item">
        <span>密码：</span>
        <el-input style="width:200px" show-password v-model="workNumber" placeholder="请输入密码"/>
      </div>
      <div class="login-item">
        <span>确认：</span>
        <el-input style="width:200px" show-password v-model="workNumber" placeholder="请确认密码"/>
      </div>
      <div class="login-item">
        <span>性别：</span>
        <el-input style="width:200px" v-model="workNumber" placeholder="请输入密码"/>
      </div>
      <div class="login-item">
        <span>电话：</span>
        <el-input style="width:200px" v-model="workNumber" placeholder="请输入联系方式"/>
      </div>
      <div class="login-item">
        <el-button type="success" @click="login">注册</el-button>
        <el-button type="primary" @click="goLogin">已注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      workNumber: '',
    }
  },
  methods: {
    login() {
      console.log(1);
      this.$router.push({
        name:"All"
      })
    },
    goLogin() {
      this.$router.push({
        name:"login"
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
  height: 500px;
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