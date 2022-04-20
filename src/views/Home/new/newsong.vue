<template>
	<div class="newsong" >
		<div class="container" >
			<div class="title" >
				<span>{{title1}}</span>
				<h3>更多</h3>
			</div>
			
			<div class="lunbo" ref='lunbo' >
				<ul class="lunboul" >
					<li v-for="(m,index) in newsongs" > 
					<img :src="m.picUrl" /> 
					<p>{{m.name}}</p>
					<p class="geshou" >{{m.artist.name}}</p>
					</li>
				</ul>
				<div class="left" @click="leftclick" ><</div>
				<div class="right" @click="rightclick" >></div>
			</div>
			
		</div>
	</div>
</template>

<script>
	import {animate} from '../../../assets/js/animate/animate.js'
	export default{
		name:'newsong',
		props:{
			title1:{
				type:String,
				default:''
			},
			newsongs:{
				type:Array,
				default:[]
			}
		},
		data(){
			return{
				num:0
			}
		},
		methods:{
			leftclick(){
				const lunbo = document.querySelector('.lunbo')
				const lunboul = document.querySelector('.lunbo ul')
				if(this.num === 1){
					this.num = 0
					animate(lunboul,-lunbo.clientWidth * this.num)
				}
				else if(this.num === 0){
					this.num = 1
					animate(lunboul,-lunbo.clientWidth * this.num)
				}
				// console.log(lunbo.clientWidth)
			},
			rightclick(){
				const lunbo = document.querySelector('.lunbo')
				let lunboul = document.querySelector('.lunboul')
				if(this.num === 0){
					this.num = 1
					animate(lunboul,-lunbo.clientWidth * this.num)
					// lunboul.style.left = -lunbo.clientWidth * this.num + 'px'
				}
				else if(this.num === 1){
					this.num = 0
					animate(lunboul,-lunbo.clientWidth * this.num)
					// lunboul.style.left = -lunbo.clientWidth * this.num + 'px'
					console.log('aaa')
				}
			}
		}
	}
</script>

<style scoped="scoped" >
	.newsong{
		width: 760px;
		height: 250px;
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
	.lunbo{
		overflow-x: hidden;
		position: relative;
		color: #fff;
		width: 760px;
		height: 200px;
	}
	.lunbo ul{
		margin-top: 20px;
		width: 6000px;
		position: absolute;
		left: 0;
		top: 0;
	}
	.lunbo ul li{
		width: 120px;
		height: 170px;
		padding: 0 15px;
		float: left;
		cursor: pointer;
	}
	.lunbo ul li p:hover{
		border-bottom: solid 1px #fff;
	}
	.lunbo ul li img{
		width: 120px;
	}
	.left,.right{
		position: absolute;
		font-size: 25px;
		font-weight: bold;
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
	}
	.left{
		left: 0;
	}
	.right{
		right: 0;
	}
	.geshou{
		position: absolute;
		bottom: 0;
		color: gray;
	}
</style>
