<template>
  <div id="welcome"> 
      <p class="welcome_item" id="welcome_text">你好: {{}}</p>
      <p class="welcome_item" id="exit">退出</p>
  </div>
</template>

<script>
export default {
}
</script>

<style>

#welcome {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 5%;
    background-color:#E0F1E7;
}

.welcome_item {
    color:green;
    width: fit-content;
    margin: auto 0;
    margin-left : 1%;
    margin-right : 1%;
}

</style>