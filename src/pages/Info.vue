<template>
<div>
  <div id="info_page">
    <welcome> </welcome>
    <div id="info_list">
    <div class="info_item">工号 <input type="text"></div>
    <div class="info_item">姓名 <input type="text"></div>
    <div class="info_item">性别 <div>男<input type="radio"> 女<input type="radio"></div> </div>
    <div class="info_item">手机 <input type="text"></div>
    <div class="info_item">E-mail <input type="text"></div>
    <div id="confirm_change_button">确认修改</div>
    </div>
  </div>

  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue'
export default {
    components: {
    Welcome,
  }
}
</script>

<style>
#info_page {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;  
}

#info_list {
  margin: auto auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  top: 30%;
  width: 25%;
  height: 35%;
}

.info_item {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}

#confirm_change_button {
  width: fit-content;
  background-color: green;
  color: white;
  margin:0 auto;
  padding: 1% 3%;
}
</style>