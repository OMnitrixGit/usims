<template>
  <div id="RecordList-index">
    <div class="filter-title">筛选项</div>
    <div class="filter">
      <div class="filter-line">
        <span>姓名：</span>
        <el-input style="width:200px" v-model="pamars.fullName" placeholder="通过姓名筛选"/>
      </div>
      <div class="filter-line">
        <span>电话：</span>
        <el-input style="width:200px" v-model="pamars.phoneNumber" placeholder="通过电话筛选"/>
      </div>
      <div class="filter-button-group">
        <el-button type="primary" @click="search">查询</el-button>
        <el-button @click="reset">重置</el-button>
      </div>

    </div>
    <div class="filter-title">病历列表</div>
    <el-table :data="tableData" stripe style="width: 100%" class="table">
      <el-table-column align='center' type="selection" width="55"/>
      <el-table-column align='center' sortable prop="id" label="id"/>
      <el-table-column align='center' sortable prop="workNumber" label="工号"/>
      <el-table-column align='center' prop="name" label="姓名"/>
      <el-table-column align='center' prop="gender" label="性别"/>
      <el-table-column align='center' prop="contact" label="联系方式"/>
      <el-table-column align='center' prop="permission" label="权限">
        <template #default="scope">
          <span>{{ scope.row.permission === "G" ? "管理员" : "普通用户" }}</span>
        </template>
      </el-table-column>
      <el-table-column align='center' prop="approved" label="审批状态">
        <template #default="scope">
          <span>{{ scope.row.approved === "未审批" ? "未通过审批" : "已通过审批" }}</span>
        </template>
      </el-table-column>
      <el-table-column align='center' label="操作" width="400px">
        <template #default="scope">
          <el-button type="primary" @click="edit(scope.row)">修改</el-button>
          <el-button type="danger">重置密码</el-button>
          <el-button :type="scope.row.status === 0?'success':'warning'">{{
              scope.row.status === 0 ? "通过审批" : "取消资格"
            }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        style="margin-top:24px"
        v-model:currentPage="pamars.pageNo"
        v-model:page-size="pamars.pageSize"
        small
        background
        layout="sizes, prev, pager, next"
        :total="total"
        class="mt-4"
        :page-sizes="[5, 10, 15, 20]"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
    />
    <el-dialog
        v-model="editVisible"
        title="修改用户信息"
        width="30%"
        :before-close="handleClose"
    >
      <div class="edit-div">
        <div class="line">
          <span>工号：</span>
          <el-input style="width:200px" :disabled="true" v-model="row.workNumber" placeholder="1"/>
        </div>
        <div class="line">
          <span>姓名：</span>
          <el-input style="width:200px" v-model="row.fullName" placeholder="修改姓名"/>
        </div>
        <div class="line">
          <span>性别：</span>
          <el-select style="width: 200px" v-model="row.sex" placeholder="Select">
            <el-option
                v-for="item in sexOption"
                :key="item.value"
                :label="item.value"
                :value="item.value"
            />
          </el-select>
        </div>
        <div class="line">
          <span>电话：</span>
          <el-input style="width:200px" v-model="row.phoneNumber" placeholder="修改联系方式"/>
        </div>
        <div class="edit-b">
          <el-button type="primary" @click="editVisible = false">确认</el-button>
          <el-button @click="editVisible = false">取消</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios, * as others from 'axios';

export default {
  data() {
    return {
      tableData: [],
      editVisible: false,
      row: {
        fullName:"",
        sex:"",
        phoneNumber:"",
      },
      sexOption: [
        {value: '男'},
        {value: '女'}
      ],
      pamars: {
        pageNo: 1,
        pageSize: 5,
        searchContent: '',
        phoneNumber: '',
        fullName: '',
        total: 0,
      }
    }
  },
  methods: {
    getUserPage() {
      axios.get("http://localhost:3000/allaccounts").then(res => {
        console.log(res.data)
        this.tableData = res.data
      }).catch(err => {
        console.log(err)
        alert("后台错误，请联系管理员排查")
      });
    },
    handleCurrentChange() {
      this.getUserPage();
    },
    handleSizeChange() {
      this.getUserPage();
    },
    search() {
      this.getUserPage();
    },
    reset() {
      this.pamars.fullName = ''
      this.pamars.phoneNumber = ''
      this.pamars.searchContent = ''
      this.getUserPage();
    },
    edit(row) {
      this.row = row
      this.editVisible = true
    }
  },
  mounted() {
    this.getUserPage();
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
