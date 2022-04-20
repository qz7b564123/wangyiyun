<template>
	<div class="ruzhu" >
		<div class="title" >
			<span>入驻歌手</span>
			<span>查看全部</span>
		</div>
		<div class="content" >
			<ul>
				<li v-for="m in artist" > <img :src="m.img1v1Url" /> <h3>{{m.name}}</h3> <span></span> </li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'ruzhu',
		props:{
			artist:{
				type:Array
			}
		}
	}
</script>

<style scoped="scoped" >
	.ruzhu{
		margin: 0 auto;
		padding: 0;
		width: 200px;
		/* float: right; */
		font-size: 14px;
		
	}
	.title{
		color: #fff;
		height: 40px;
		line-height: 40px;
		/* padding-bottom: 10px; */
		border-bottom: solid 1px red;
	}
	.title span{
		cursor: pointer;
	}
	.title span:first-child{
		float: left;
	}
	.title span:last-child{
		float: right;
	}
	.content ul li{
		margin: 15px 5px;
		width: 185px;
		line-height: 80px;
		height: 80px;
		background-color: lightgray;
		cursor: pointer;
		font-size: 17px;
	}
	.content ul li:hover{
		background-color: dimgray;
	}
	.content img{
		/* height: 80px; */
		float: left;
		width: 80px;
		vertical-align:top
	}
	.content ul li h3{
		float: left;
		padding-left: 15px;
	}
</style>
