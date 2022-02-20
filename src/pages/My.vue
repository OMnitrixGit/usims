<template>

  <div id="my_page">
    <welcome></welcome>
    <div class="button_list">
      <div class="button">全部病例</div>
      <div class="button">需要随访</div>
      <div class="button">缺少病理信息</div>
      <div class="button">今天需要随访</div>
      <div class="button">随访已过期</div>
    </div>
    <div class="divider_line"></div>
    <div id="data_list">
      <div id="control_bar" style="height:12%;align-items:center;">
        <p style="color:red">注：随访时间状态为红色，则为今天随访时间；若为棕色，随访时间已过期并没有随访</p>
        <div id="filter_area" style="width:25%;display:flex;flex-flow:row nowrap;justify-content: space-between;">
          <p >选择排序:</p>
          <select>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <div style="background-color:#0C6956;color:white;">导出到Excel表</div>
        </div> 
      
      </div>
      <div id="table" style="width:100%;height:80%;display:flex;flex-flow:column nowrap;justify-content:space-between;">
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
      <div id="delete_button" style="height:8%;">删除</div>
    </div>
  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue'
import TableItem from '@/components/my/TableItem.vue'
export default {
  components: { 
    Welcome,
    TableItem
  },

}
</script>

<style>
#my_page {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  height: 100%;
}

.button_list {
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  width: 50%;
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

#data_list {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  height: 84.8%;
}

#control_bar {
  display: flex;
  flex-flow: row;
  width: 80%;
  justify-content: space-between;
}
</style>