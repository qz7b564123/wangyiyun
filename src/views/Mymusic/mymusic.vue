<template>
	<div class="mymusic" >
		<div class="container" >
			<mymusicleft></mymusicleft>
		</div>
	</div>
</template>

<script>
	import mymusicleft from './mymusicLeft/mymusicLeft.vue'
	export default{
		name:'mymusic',
		components:{
			mymusicleft
		}
	}
</script>

<style scoped="scoped" >
	.mymusic{
		color: #fff;
		margin: 0 auto;
		/* font-size: 60px; */
		width: 982px;
	}
</style>
