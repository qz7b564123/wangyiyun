<template>
	<div class="bangdang" >
	    <div class="container1" >
		<div class="title1" >
			<span>榜单</span>
			<h3>更多</h3>
		</div>
	</div>
	</div>
</template>

<script>
	export default{
		name:'bangdang'
	}
</script>

<style scoped="scoped" >
	.bangdang{
		width: 760px;
		height: 200px;
	}
	.container1{
		width: 760px;
		height: 35px;
		margin-top: 50px;
	}
	.title1{
		height: 33px;
		font-size: 14px;
		border-bottom: solid 3px red;
	}
	.title1 ul{
		padding-top: 10px;
	}
	.title1 ul li{
		float: left;
		color: #fff;
		padding: 0 20px;
		border-right: solid 1px #fff;
		cursor: pointer;
	}
	.title1 ul li:last-child{
		border-right: none;
	}
	.title1 span{
		font-size: 30px;
		color: #fff;
		float: left;
	}
	.title1 h3{
		float: right;
		color: #fff;
		cursor: pointer;
	}
</style>
