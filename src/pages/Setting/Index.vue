<template>
  <div class="setting">
    <div class="filter-line">
      <span>工号：</span>
      <el-input style="width:200px" v-model="value" placeholder="输入工号"/>
    </div>
    <div class="filter-line">
      <span>姓名：</span>
      <el-input style="width:200px" v-model="value" placeholder="输入姓名"/>
    </div>
    <div class="filter-line">
      <span>性别：</span>
      <el-input style="width:200px" v-model="value" placeholder="输入性别"/>
    </div>
    <div class="filter-line">
      <span>手机：</span>
      <el-input style="width:200px" v-model="value" placeholder="输入手机号"/>
    </div>
  </div>
  <div class="sub">
    <el-button type="primary">立即提交</el-button>
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
        <el-button type="primary" @click="editPasswordVisible = false">确认</el-button>
        <el-button @click="editPasswordVisible = false">取消</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      editPasswordVisible: false,
      params: {
        rowPassword: "",
        newPassword: "",
        repeatNewPassword: "",
      },
      value: ""
    }
  }
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