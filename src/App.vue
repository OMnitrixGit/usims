<template>
  <!-- <Title id="title"></Title> -->
  <router-view></router-view>
</template>
<script>
// import Title from './components/Title.vue'
export default {
  // components: {
  //   Title,
  // },
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
}

#title {
  width: 100%;
  height: 14%;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
