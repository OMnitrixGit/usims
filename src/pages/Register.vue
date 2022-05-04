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
        <el-input style="width:200px" v-model="name" placeholder="请输入姓名"/>
      </div>
      <div class="login-item">
        <span>密码：</span>
        <el-input style="width:200px" show-password v-model="password" placeholder="请输入密码"/>
      </div>
      <div class="login-item">
        <span>确认：</span>
        <el-input style="width:200px" show-password v-model="confirmPassword" placeholder="请确认密码"/>
      </div>
      <div class="login-item">
        <span>性别：</span>
        <el-input style="width:200px" v-model="gender" placeholder="请输入性别"/>
      </div>
      <div class="login-item">
        <span>电话：</span>
        <el-input style="width:200px" v-model="contact" placeholder="请输入联系方式"/>
      </div>
      <div class="login-item">
        <el-button type="success" @click="login">注册</el-button>
        <el-button type="primary" @click="goLogin">已注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios, * as others from 'axios';
import qs from 'qs';
export default {
  data() {
    return {
      workNumber: '',
      name:'',
      password:'',
      confirmPassword:'',
      gender:'',
      contact:''
    }
  },
  methods: {
    login() {
      if (this.workNumber === '' || this.name === '' || this.password === '' || 
          this.confirmPassword === '' || this.gender === '' || this.contact === '') {
        alert("不允许任何信息为空");
        return
      }
      if (this.password !== this.confirmPassword) {
        alert("两次密码不一致");
        return
      }
      axios.post("http://localhost:3000/register",qs.stringify({
        workNumber:this.workNumber,
        name:this.name,
        password:this.password,
        gender:this.gender,
        contact:this.contact
      })).then((response) => {
        console.log(response.data)
        if (response.data === 2) {
          this.$router.push({
            name:"All"
          })
        } else if (response.data === -1) {
          alert("工号已存在")
        }
      }).catch(error => {
        alert("后台错误，请联系管理员排查")
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