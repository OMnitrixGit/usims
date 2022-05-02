<template>
  <div id="handers">
    <div>你好，admin</div>
    <div :style="isEdit?'width: 200px':'width: 100px'" style="display: flex;flex-direction: row;justify-content: space-between;align-items: center;">
      <el-button type="" v-if="isEdit" @click="editPasswordVisible=true">修改密码</el-button>
      <div class="avatar">A</div>
      <div class="logout" @click="exit()">退出</div>
    </div>
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
  props: {
    isEdit: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      editPasswordVisible: false,
      params: {}
    }
  },
  methods: {
    exit() {
      this.$router.push("/");
    }
  }
}
</script>

<style>
#handers {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  border-bottom-width: 1px;
  border-bottom-color: rgb(220, 223, 230);
  border-bottom-style: solid;
}
.avatar {
  height: 50px;
  width: 50px;
  background-color: #8c939d;
  line-height: 50px;
  text-align: center;
  color: white;
  font-size: 20px;
}
.logout {
  cursor: pointer;
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