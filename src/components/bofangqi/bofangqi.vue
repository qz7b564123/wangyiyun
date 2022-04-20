<template>
	<div class="bofangqi" >
		<div class="container" >
			<div class="pre" > <span class="iconfont icon-shangyishou"></span> </div>
			<div class="bofang" > <span class="iconfont icon-bofang" ></span> </div>
			<div class="next" > <span class="iconfont icon-kuaijin" ></span> </div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'bofangqi'
	}
</script>

<style scoped="scoped" >
	.bofangqi{
		width: 100%;
		height: 50px;
		position: fixed;
		bottom: 0;
		/* line-height: 50px; */
		background-color: rgba(0,0,0,0.5);
		color: #fff;
		text-align: center;
	}
	.container{
		width: 982px;
		margin: 0 auto;
	}
	.pre,.next,.bofang{
		line-height: 20px;
		width: 20px;
		height: 20px;
		/* height: 20px; */
		border: solid 1px #fff;
		float: left;
		/* margin-top: 15px; */
		border-radius: 50px;
		padding: 0 10px;
		margin: 15px 5px 0 5px;
		cursor: pointer;
		
	}
</style>
