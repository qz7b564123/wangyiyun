import Vue from 'vue'
import VueRouter from 'vue-router'
const home =() => import('../views/Home/home.vue')
const home1 =()=> import('../views/Home/home1/home1.vue')
const mymusic =()=> import('../views/Mymusic/mymusic.vue')

Vue.use(VueRouter)

const routes = [
  {
	  path:'/',
	  redirect:'/home'
  },
  {
	  path:'/home',
	  component:home,
	  redirect:'/home1',
	  children:[
		  {
			  path:'/home1',
			  component:home1
		  },
		  {
			  path:'/mymusic',
			  component:mymusic
		  }
	  ]
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
