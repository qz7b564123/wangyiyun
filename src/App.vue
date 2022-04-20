<template>
  <div id="app">
	  <headernav></headernav>
	  <router-view></router-view>
	  <bofangqi></bofangqi>
  </div>
</template>

<script>
import './assets/icon/iconfont.css'
import headernav from './components/header/header.vue'
import bofangqi from './components/bofangqi/bofangqi.vue'
export default {
  name: 'app',
  components:{
	  headernav,
	  bofangqi
  }
}
</script>

<style scoped="scoped" >
	#app{
		background-color: rgba(22,23,28);
		overflow-x: hidden;
		height: 100%;
	}
</style>
