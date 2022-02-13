<template>
<div > 
    <!-- <ul>
    <li v-for="tab of tabNames"  :key="tab" class="navItem">
        <router-link to="{{tab.path}}">{{tab.name}}</router-link>
        {{tab}}
    </li>
    </ul>  -->
    <router-link to="/all" class="navItem">全部病例</router-link>
  <router-link to="/entry" class="navItem">病例录入</router-link>
  <router-link to="/search" class="navItem">检索病例</router-link>
  <router-link to="/my" class="navItem">我的病例</router-link>
  <router-link to="/info" class="navItem">修改信息</router-link>
  <router-link to="/account" class="navItem">管理账户</router-link>
</div>

</template>

<script>
import NavigationItem from './navigation/NavigationItem.vue'
let tabNames = ["全部病例","病例录入"]
let tabInfos = [
    {name:"全部病例",path:"/all"},
    {name:"病例录入",path:"/entry"},
    {name:"检索病例",path:"/search"},
    {name:"我的病例",path:"/my"},
    {name:"修改信息",path:"/info"},
    {name:"管理账户",path:"/account"}
]
export default {
    // components:{
    //     'NavigationItem':NavigationItem
    // }
}
</script>

<style>
#navigation {
   background-color:#006b55; 
   display:flex;
   flex-flow: row nowrap;
   justify-content: flex-start;
   align-items:center;
}

.navItem {
    color:white;
    margin:1%;
    align-self:center;
}


</style>