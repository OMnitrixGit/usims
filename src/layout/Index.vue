<template>
  <div id="layout">
    <div id="menu">
      <div class="menu-hander">
        <span>诊疗信息管理系统</span>
      </div>
      <el-menu
          :default-active="defaultActive"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          style="height: 100%"
          router
      >
        <el-menu-item index="/layout/all">
          <span>全部病例</span>
        </el-menu-item>
        <el-menu-item index="/layout/entry">
          <span>病例录入</span>
        </el-menu-item>
        <el-menu-item index="/layout/my">
          <span>我的病例</span>
        </el-menu-item>
        <el-menu-item index="/layout/info">
          <span>修改信息</span>
        </el-menu-item>
        <el-menu-item index="/layout/account">
          <span>管理账户</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div id="main">
      <Hander/>
      <div style="padding:24px;box-sizing: border-box;">
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<script>
import Hander from "./components/Handers.vue";

export default {
  components: {
    Hander
  },
  data() {
    return {
    }
  },
  computed: {
    defaultActive() {
      return this.$route.href
    }
  },
  mounted() {
    console.log(this.$route)
  }
};
</script>

<style>
#layout {
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
}

#layout #menu {
  width: 15%;
  height: 92%;
}

#layout #main {
  width: 85%;
  height: 100%;
}

.menu-hander {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 8%;
  font-weight: 600;
  font-size: 20px;
  border-right-width: 1px;
  border-right-color: rgb(220, 223, 230);
  border-right-style: solid;
}
</style>
