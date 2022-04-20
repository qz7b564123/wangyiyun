<template>
	<div class="container" >
		<div class="banner" >
			<el-carousel height="285px">
			    <el-carousel-item v-for="(item,index) in banner" :key="index">
			      <img :src="item.imageUrl" /> <div class="message" > </div> 
			    </el-carousel-item>
			  </el-carousel>
		</div>
	</div>
</template>

<script>
	export default{
		name:'banner',
		props:{
			banner:{
				type:Array
			}
		}
	}
</script>

<style scoped="scoped" >
	.banner{
		width: 982px;
		height: 285px;
		margin: 0 auto;
		position: relative;
	}
	
	.banner img{
		width:730px;
	}
	.message{
		width: 254px;
		position: absolute;
		right: -1px;
		top: 0;
		height: 270px;
		background: url(../../assets/img/download.png);
	}
</style>
