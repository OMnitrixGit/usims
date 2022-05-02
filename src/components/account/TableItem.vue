<template>
  <div class="account_table_item">
    <div class="account_table_item_elem"><input type="radio" /></div>
    <div class="account_table_item_elem">{{ worknumber }}</div>
    <div class="account_table_item_elem">{{ name }}</div>
    <div class="account_table_item_elem">{{ gender }}</div>
    <div class="account_table_item_elem">{{ contact }}</div>
    <div class="account_table_item_elem">{{ permission }}</div>
    <div class="account_table_item_elem">{{ approved }}</div>
  </div>
</template>

<script>
export default {
  props: {
    worknumber: String,
    name: String,
    gender: String,
    contact: String,
    permission: String,
    approved: String,
  },
};
</script>

<style>
.account_table_item {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
</style>
