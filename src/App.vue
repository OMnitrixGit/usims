<template>
  <Title id="title"></Title>
  <Navigation id="navigation"></Navigation>
  <Content id="content"></Content>
  <Bottom id="bottom"></Bottom>
</template>
<script>
import Navigation from './components/Navigation.vue'
import Title from './components/Title.vue'
import Content from './components/Content.vue'
import Bottom from './components/Bottom.vue'
export default {
    components: {
    'Title': Title,
    'Navigation': Navigation,
    'Content': Content,
    'Bottom': Bottom
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
  height : 70%;
}

#bottom {
  width: 100%;
  height: 11%;
}


#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
