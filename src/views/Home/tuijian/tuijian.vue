<template>
	<div class="tuijian" >
		<div class="container" >
			<div class="title" >
				<span>{{title1}}</span>
				<ul>
					<li v-for="(m,index) in list" >{{m}}</li>
				</ul>
				<h3>更多</h3>
			</div>
			
			
			<div class="pic" >
				<ul>
					<li v-for="(m,index) in personalized" >
						<img :src="m.picUrl" />
						<span> {{m.name}} </span>
						<div class="bgc" > <h3 class="iconfont icon-24gf-headset" ></h3> <h3>{{Math.round(m.playCount/10000)}}万 </h3> </div>
					</li>
				</ul>
			</div>
				
		</div>	
		
		
	</div>
</template>

<script>
	export default{
		name:'tuijian',
		props:{
			personalized:{
				type:Array,
				default:[]
			},
			title1:{
				type:String,
				default:''
			},
			list:{
				type:Array
			}
		}
	}
</script>

<style scoped="scoped" >
	.tuijian{
		height: 500px;
	}
	.container{
		width: 760px;
		height: 35px;
		margin-top: 50px;
	}
	.title{
		height: 33px;
		font-size: 14px;
		border-bottom: solid 3px red;
	}
	.title ul{
		padding-top: 10px;
	}
	.title ul li{
		float: left;
		color: #fff;
		padding: 0 20px;
		border-right: solid 1px #fff;
		cursor: pointer;
	}
	.title ul li:last-child{
		border-right: none;
	}
	.title span{
		font-size: 30px;
		color: #fff;
		float: left;
	}
	.title h3{
		float: right;
		color: #fff;
		cursor: pointer;
	}
	.pic{
		margin-top: 20px;
		font-size: 14px;
		color: #fff;
	}
	.pic ul li{
		float: left;
		width: 182px;
		height: 234px;
		/* background-color: #0077AA; */
		margin: 0 3px;
		position: relative;
		cursor: pointer;	
	}
	.pic img{
		width: 182px;
	}
	.pic .bgc{
		width: 182px;
		height: 20px;
		background-color: rgba(125,125,125,.7);
		position: absolute;
		left: 0;
		bottom: 50px;
		line-height: 20px;
	}
	.pic span:hover{
		border-bottom: solid 1px #fff;
	}
	.bgc h3{
		padding: 0 5px;
	}	
	.bgc h3:first-child{
		float: left;
	}
	.bgc h3:last-child{
		float: right;
	}
</style>
