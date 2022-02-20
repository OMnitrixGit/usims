<template>
  <Title id="title"></Title>
  <Navigation id="navigation"></Navigation>
  <Content id="content"></Content>
</template>
<script>
import Navigation from './components/Navigation.vue'
import Title from './components/Title.vue'
import Content from './components/Content.vue'
export default {
    components: {
    'Title': Title,
    'Navigation': Navigation,
    'Content': Content,
  }
}
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
*{
  margin: 0;
  padding: 0;
}

html,body{
  width: 100%;
  height: 100%;
}

#title {
  width: 100%;
  height:14%;
}

#navigation {
  width: 100%;
  height:5%;
}

#content {
  width: 100%;
  height : 81%;
}




#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
