<template>
  <div class="account_table_item">
      <div class="account_table_item_elem"><input type="radio"></div>
      <div class="account_table_item_elem">工号</div>
      <div class="account_table_item_elem">姓名</div>
      <div class="account_table_item_elem">性别</div>
      <div class="account_table_item_elem">电话</div>
      <div class="account_table_item_elem">电子邮件</div>
      <div class="account_table_item_elem">权限</div>
      <div class="account_table_item_elem">注册状态</div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
.account_table_item {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
}

</style>