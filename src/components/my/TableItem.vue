<template>
  <div class="my_table_item">
    <div class="my_table_item_elem" id="my_table_item_elem_first">
      <p>选择</p>
      <input type="radio" />
    </div>
    <div class="my_table_item_elem">编号</div>
    <div class="my_table_item_elem">姓名</div>
    <div class="my_table_item_elem">性别</div>
    <div class="my_table_item_elem">年龄</div>
    <div class="my_table_item_elem">联系方式</div>
    <div class="my_table_item_elem">诊断人</div>
    <div class="my_table_item_elem">关键词</div>
    <div class="my_table_item_elem">查看详情</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.my_table_item {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}
#my_table_item_elem_first {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
}
</style>
