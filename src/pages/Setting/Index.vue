<template>
  <div class="setting">
    <div class="filter-line">
      <span>工号：</span>
      <el-input style="width:200px" v-model="params.workNumber" placeholder="输入工号"/>
    </div>
    <div class="filter-line">
      <span>姓名：</span>
      <el-input style="width:200px" v-model="params.name" placeholder="输入姓名"/>
    </div>
    <div class="filter-line">
      <span>性别：</span>
      <el-input style="width:200px" v-model="params.gender" placeholder="输入性别"/>
    </div>
    <div class="filter-line">
      <span>手机：</span>
      <el-input style="width:200px" v-model="params.contact" placeholder="输入手机号"/>
    </div>
  </div>
  <div class="sub">
    <el-button type="primary" @click="modify_info()">立即提交</el-button>
    <el-button type="primary" @click="editPasswordVisible = true">修改密码</el-button>
  </div>
  <el-dialog
      v-model="editPasswordVisible"
      title="修改用户信息"
      width="30%"
  >
    <div class="edit-div">
      <div class="line">
        <span>旧密码：</span>
        <el-input style="width:200px" show-password v-model="params.rowPassword" placeholder="输入旧密码"/>
      </div>
      <div class="line">
        <span>新密码：</span>
        <el-input style="width:200px" show-password v-model="params.newPassword" placeholder="输入新密码"/>
      </div>
      <div class="line">
        <span>确认新密码：</span>
        <el-input style="width:200px" show-password v-model="params.repeatNewPassword" placeholder="确认新密码"/>
      </div>
      <div class="edit-b">
        <el-button type="primary" @click="changePassword()">确认</el-button>
        <el-button @click="editPasswordVisible = false">取消</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import axios, * as others from 'axios';
import global from '../Global.vue'
import qs from 'qs'
export default {
  data() {
    return {
      editPasswordVisible: false,
      params: {
        rowPassword: "",
        newPassword: "",
        repeatNewPassword: "",
        workNumber:"",
        name:"",
        gender:"",
        contact:"",
        loginWorkNumber:""
      },
    }
  },
  methods: {
    modify_info(){
      let params = {
        originWorkNumber: global.loginWorkNumber,
        newWorkNumber: this.params.workNumber,
        newName:this.params.name,
        newGender:this.params.gender,
        newContact:this.params.contact
      }
      axios.post("http://localhost:3000/updateInfo", {params: params}).then(res => {
        switch (res.data) {
          default:
            alert("修改成功")
            return
        }
      }).catch(err => {
        console.log(err)
        alert("后台错误，请联系管理员排查")
      })
    },
    changePassword(){
      if (this.params.repeatNewPassword !== this.params.newPassword) {
        console.log(this.params.rowPassword + " " + this.params.newPassword)
        alert("两次输入密码不一致，请重新输入")
        return
      }
      let params = {
        loginWorkNumber: global.loginWorkNumber,
        originPassword: this.params.rowPassword,
        newPassword: this.params.newPassword
      }
      axios.post("http://localhost:3000/changePassword", {params: params}).then(res => {
        switch (res.data) {
          case -1:
            alert("后台错误")
            break
          case 0:
            alert("旧密码不正确")
            break
          default:
            alert("修改成功")
            this.editPasswordVisible = false
            break
        }
      }).catch(err => {
        console.log(err)
        alert("后台错误，请联系管理员排查")
      })
    }
  },
}
</script>

<style scoped>
.setting {
  display: flex;
  flex-direction: column;
  margin-left: 200px;
}

.filter-line {
  margin-bottom: 30px;
}

.filter-line span {
  width: 60px;
}

.sub {
  position: fixed;
  bottom: 0px;
  width: 70%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.edit-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.edit-div .line {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.edit-b {
  display: flex;
  flex-direction: row;
}
</style>