<template>
  <div id="RecordList-index">
    <div class="filter-title">筛选项</div>
    <div class="filter">
      <div class="filter-line">
        <span>编号：</span>
        <el-input style="width:200px" v-model="input" placeholder="通过编号筛选"/>
      </div>
      <div class="filter-line">
        <span>姓名：</span>
        <el-input style="width:200px" v-model="input" placeholder="通过姓名筛选"/>
      </div>
      <div class="filter-line">
        <span>诊断人：</span>
        <el-input style="width:200px" v-model="input" placeholder="通过诊断人筛选"/>
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
      <el-table-column prop="sex" label="性别"/>
      <el-table-column prop="age" label="年龄"/>
      <el-table-column prop="phone" label="联系方式"/>
      <el-table-column prop="doctor" label="诊断人"/>
      <el-table-column prop="key" label="关键词"/>
      <el-table-column align='center' label="操作" width="400px">
        <template #default>
          <el-button type="success">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: '1',
          name: '2',
          sex: "3",
          age: '4',
          phone: '5',
          doctor: '6',
          key: '7',
          click: '8'
        },
        {
          id: '1',
          name: '2',
          sex: "3",
          age: '4',
          phone: '5',
          doctor: '6',
          key: '7',
          click: '8'
        },
        {
          id: '1',
          name: '2',
          sex: "3",
          age: '4',
          phone: '5',
          doctor: '6',
          key: '7',
          click: '8'
        },
        {
          id: '1',
          name: '2',
          sex: "3",
          age: '4',
          phone: '5',
          doctor: '6',
          key: '7',
          click: '8'
        },
      ]
    }
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
