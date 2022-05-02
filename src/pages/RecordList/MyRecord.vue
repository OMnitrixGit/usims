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
        <template #default="scope">
          <el-button type="primary" @click="edit(scope)">修改</el-button>
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
      scope: {},
      imageUrl: [],
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
      ]
    }
  },
  methods: {
    edit(scope) {
      this.row = scope.row
    }
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
