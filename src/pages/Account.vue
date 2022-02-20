<template>
  <div id="account_page">
    <welcome></welcome>
    <div class="button_list">
      <div class="button"> 账户查看</div>
      <div class="button">已注册账户</div>
      <div class="button">备份数据库</div>
    </div>
    <div class="divider_line"></div>
    <div id="data_list" style="width:60%;height:60%;display:flex;flex-flow:column nowrap;align-items:center;margin: 0 auto;">
      <div id="table" style="width:60%;height:70%;display:flex;flex-flow:column nowrap;justify-content:space-between;">
        <div class="table_header" style="width:100%;background-color:#0C6956;color:white;display:flex;flex-flow:row nowrap;">
          <p></p>

        </div>
        <div class="table_raw"><table-item></table-item></div>
        <div class="table_raw"><table-item></table-item></div>
        <div class="table_raw"><table-item></table-item></div>
        <div class="table_raw"><table-item></table-item></div>
        <div class="table_raw"><table-item></table-item></div>
        <div class="table_raw"><table-item></table-item></div>
        <div class="table_raw"><table-item></table-item></div>
        <div class="table_raw"><table-item></table-item></div>
        <div class="table_raw"><table-item></table-item></div>
        <div class="table_raw"><table-item></table-item></div>
        <div class="table_footer" style="width:100%;height:7%;background-color:#666666;color:white;">

        </div>
      </div>
      <div id="control_area" style="padding-left:40%">
        <div id="add_button" class="control_area_button">添加</div>
        <div id="delete_button" class="control_area_button">删除</div>
      </div>
      
    </div>
    <Bottom id="bottom"></Bottom>

  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue'
import Bottom from '@/components/Bottom.vue'
import TableItem from '@/components/account/TableItem.vue'
export default {
  components: {
    Welcome,
    Bottom,
    TableItem
  }
}
</script>

<style>
#account_page {
    display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;  
}
.button_list {
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  width: 30%;
  height: 10%;
  justify-content: space-around;
  align-items: center;
}

.button {
  background-color: #0C6956;
  color: white;
  height: 50%;
  padding: 0.5% 0.5%;
  text-align: center;
}

.divider_line {
  margin: 0 auto;
  background-color: gray;
  width: 90%;
  height: 0.2%;
  opacity: 0.3;
}

#control_area {
  display: flex;
  flex-flow: row nowrap;
  height: 10%;
}

.control_area_button {
  background-color: #0C6956;
  color: white;
}

#bottom {
  height: 20%;
}
</style>