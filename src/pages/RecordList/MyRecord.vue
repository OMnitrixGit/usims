<template>
  <div id="RecordList-index">
    <div class="filter-title">筛选项</div>
    <div class="filter">
      <div class="filter-line">
        <span>编号：</span>
        <el-input style="width:200px" v-model="filter_id" placeholder="通过编号筛选"/>
      </div>
      <div class="filter-line">
        <span>姓名：</span>
        <el-input style="width:200px" v-model="filter_name" placeholder="通过姓名筛选"/>
      </div>
      <div class="filter-line">
        <span>诊断人：</span>
        <el-input style="width:200px" v-model="filter_doctor_name" placeholder="通过诊断人筛选"/>
      </div>
      <div class="filter-button-group">
        <el-button type="primary">查询</el-button>
        <el-button>重置</el-button>
      </div>

    </div>
    <div class="filter-title">病历列表</div>
    <el-table :data="tableData" stripe style="width: 100%" class="table">
      <el-table-column type="selection" width="55"/>
      <el-table-column sortable prop="id" label="编号"/>
      <el-table-column prop="name" label="姓名"/>
      <el-table-column prop="gender" label="性别"/>
      <el-table-column prop="age" label="年龄"/>
      <el-table-column prop="contact" label="联系方式"/>
      <el-table-column prop="doctor_name" label="诊断人"/>
      <el-table-column prop="keywords" label="关键词"/>
      <el-table-column align='center' label="操作" width="400px">
        <template #default="scope">
          <el-button type="primary" @click="edit(scope)">修改</el-button>
          <el-button type="success">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios, * as others from 'axios';
import global from '../Global.vue'
export default {
  data() {
    return {
      filter_id:"",
      filter_name:"",
      filter_doctor_name:"",
      scope: {},
      imageUrl: [],
      tableData: [
      ]
    }
  },
  methods: {
    edit(scope) {
      this.row = scope.row
    }
  },
  created() {
    console.log("当前登录工号 : " + global.loginWorkNumber);
    let params = {
      workNumber : global.loginWorkNumber
    }
    axios.get("http://localhost:3000/getcases",{params}).then((response) => {
      console.log(response.data)
      this.tableData = response.data
    }).catch(error => {
      alert("后台错误，请联系管理员排查" + error)
    })
  }
};
</script>

<style scoped>
#RecordList-index {
}

#RecordList-index .filter {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 12px 24px;
  box-sizing: border-box;
}

.entry {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 80%;
}

.filter-line {
  margin-bottom: 24px;
}

.filter-line span {
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}

.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}

.sub {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
