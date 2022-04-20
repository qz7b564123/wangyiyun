<template>
	<div class="home" >
		<banner :banner='banner'></banner>
		<div class="gedan" >
			<div class="aa" >
				<!-- 热门推荐 -->
				<tuijian :personalized = 'personalized' title1="推荐" :list="['华语','流行','摇滚','民谣']"></tuijian>
				<!-- 新碟上架 -->
				<newsong title1="新碟上架" :newsongs='newsongs'></newsong>
				<!-- 榜单 -->
				<!-- <bangdang></bangdang> -->
				<!-- <div class="liebiao" > -->
			</div>
			<div class="bb" >
				<ruzhu :artist='artist'></ruzhu>
				<!-- <zhubo :zhubo1="zhubo1"></zhubo> -->
			</div>
			</div>
	</div>
</template>

<script>
	import banner from '../../../components/banner/banner.vue'
	import tuijian from '../tuijian/tuijian.vue'
	import newsong from '../new/newsong.vue'
	// import bangdang from './bangdan/bangdan.vue'
	import ruzhu from '../ruzhu/ruzhu.vue'
	export default{
		name:'home1',
		components:{
			banner,
			tuijian,
			newsong,
			// bangdang
			ruzhu,
			// zhubo
		},
		data(){
			return{
				// 轮播图信息
				banner:[],
				// 推荐歌单(未登录)
				personalized:[],
				// 新歌上架(未登录)
				newsongs:[],
				// 入驻歌手
				artist:[],
				// 热门主播
				zhubo1:[]
			}
		},
		created(){
			// 获取轮播图
			this.getbanner()
			this.gettuijian()
			this.getnewsong()
			this.getartist()
			this.getzhubo()
		},
		methods:{
			// 获取轮播图
			async getbanner(){
				const res = await this.$http.get('/banner')
				// console.log(res)
				this.banner = res.banners
			},
			async gettuijian(){
				const res =await this.$http.get('/personalized',{params:{limit:8}})
				this.personalized = res.result
				// console.log(res)
			},
			async getnewsong(){
				const res =await this.$http.get('/album/new',{params:{limit:10}})
				this.newsongs = res.albums
				// console.log(res)
			},
			// 入驻歌手
			async getartist(){
				const res =await this.$http.get('/top/artists',{params:{limit:5}})
				// console.log(res)
				this.artist = res.artists
			},
			async getzhubo(){
				const res =await this.$http.get('/dj/toplist/popular',{params:{limit:5}})
				console.log(res)
				this.zhubo1 = res.data.list
			}
		}
	}
</script>

<style scoped="scoped" >
	.home{
		height: 100%;
		margin: 0 auto;
	}
	.gedan{
		width: 982px;
		margin: 0 auto;
	}
	.aa{
		float: left;
	}
	.bb{
		width: 220px;
		/* height: 600px; */
		/* background-color: #fff; */
		float: right;
		/* border: solid 1px red; */
	}
</style>
