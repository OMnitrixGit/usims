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
        <template #default>
          <el-button type="success">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios, * as others from 'axios';
export default {
  data() {
    return {
      filter_id:"",
      filter_name:"",
      filter_doctor_name:"",
      tableData: []
    }
  },
  created() {
      axios.get("http://localhost:3000/allcases").then((response) => {
        console.log(response.data)
        this.tableData = response.data
      }).catch(error => {
        alert("后台错误，请联系管理员排查" + error)
      })
  }
  
};
</script>

<style>
#RecordList-index {
}

#RecordList-index .filter {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 12px 24px;
  box-sizing: border-box;
}
</style>
