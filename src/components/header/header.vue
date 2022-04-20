<template>
	<div class="header">
		<div class="container">
			<div class="logo"> <img src="../../assets/img/logo.png" /> <span>网易云音乐</span> </div>
			<div class="nav">
				<ul>
					<li @click="foundclick" > 发现音乐 </li>
					<li @click="mymusicclick"> 我的音乐 </li>
					<li> 关注 </li>
					<li> 商城 </li>
					<li> 音乐人 </li>
					<li> 下载客户端 </li>
				</ul>
			</div>
			<div class="login">
				<span class="denglu_span" @click="dengluclick">登录</span>
				<span class="touxiang" > <img :src="loginusermessage.avatarUrl" /> <span>{{loginusermessage.nickname}}</span> 
				</span>
			</div>
			<div class="search">
				<input type="text" placeholder="音乐/视频/电台/用户" />
			</div>
		</div>

		<div class="denglukuang">
			<div class="denglu_h" ref="denglu">
				<span >登录</span>
				<span @click="closeclick">×</span>
			</div>
			<div class="debglu_content">
				<el-form :model="message" :rules="rules" ref="ruleForm" label-width="80px">
					<el-form-item label="手机号" prop="phone">
						<el-input v-model="message.phone" placeholder="请输入手机号"></el-input>
					</el-form-item>
					<el-form-item label="密码" prop="password">
						<el-input v-model="message.password" type="password" placeholder="请输入密码"></el-input>
					</el-form-item>
				</el-form>
				<div class="dengluclick" @click="denglu1click">登录</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'headernav',
		data() {
			const telphone = (rule, value, callback) => {
			      if (!value) {
			        callback(new Error('请输入手机号码'))
			      } else {
			        const reg = /^1[3|4|5|6|7|8][0-9]\d{8}$/
			      // const phoneReg = /^1[34578]\d{9}$/
			        if (reg.test(value)) {
			          callback()
			        } else {
			          return callback(new Error('请输入正确的电话'))
			        }
			      }
			    }
			return {
				message: {
					phone: '16602041573',
					password: 'cyh19960620'
				},
				loginusermessage:{},
				rules: {
					phone: [{
						validator: telphone,
						required:true,
						trigger: 'blur'
					}],
					password: [{
						required:true,
						trigger: 'blur'
					}]
				}
			}
	},
	created(){
		// console.log(window.localStorage.getItem('token'))
		if(window.sessionStorage.getItem('token') !== undefined){
			this.getzhanghao()
		}
	},
	methods: {
		dengluclick() {
			document.querySelector('.denglukuang').style.display = 'block'
		},
		closeclick() {
			document.querySelector('.denglukuang').style.display = 'none'
		},
		denglu1click(){
			this.$refs.ruleForm.validate(async valid=>{
				if(!valid){
					return this.$message.error('请检查输入的账号是否有错误')
				}
				const res = await this.$http.get('/login/cellphone',{params:{phone:this.message.phone,password:this.message.password}})
				// console.log(res)
				if(res.code === 200){
					window.sessionStorage.setItem('token',res.token)
					this.getzhanghao()
				}
			})
		},
		async getzhanghao(){
			const res1 =await this.$http.get('/user/account')
			// console.log(res1)
			this.$store.commit('getuserid',res1.profile.userId)
			this.loginusermessage = res1.profile
			document.querySelector('.denglukuang').style.display = 'none'
			document.querySelector('.denglu_span').style.display = 'none'
			document.querySelector('.touxiang').style.display = 'inline-block'
			document.querySelector('.login').style.marginRight = '0'+'px'
		},
		foundclick(){
			this.$router.push('/home1')
		},
		mymusicclick(){
			this.$router.push('/mymusic')
		}
	}
	}
</script>

<style scoped="scoped">
	.container {
		width: 1100px;
		margin: 0 auto;
	}

	.header {
		overflow: hidden;
		height: 70px;
		line-height: 70px;
		border-bottom: solid 1px #fff;
	}

	.logo {
		float: left;
	}

	.logo img {
		width: 50px;
		height: 50px;
		vertical-align: middle;
	}

	.logo span {
		padding-left: 10px;
		font-size: 18px;
		color: #fff;
	}

	.nav {
		float: left;
	}

	.nav ul li {
		cursor: pointer;
		float: left;
		color: #CCCCCC;
		font-size: 14px;
		padding: 0 20px;
	}

	.nav ul li:hover {
		background-color: #000000;
		color: #fff;
	}

	.search {
		float: right;
	}

	.login {
		float: right;
		color: #fff;
		margin-left: 20px;
		margin-right: 80px;
		cursor: pointer;
	}

	.search input {
		width: 178px;
		height: 32px;
		outline: none;
		border: none;
		text-indent: 0.5em;
		border-radius: 20px;
	}

	.denglukuang {
		display: none;
		z-index: 6;
		width: 500px;
		height: 300px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		background-color: #fff;
	}

	.denglu_h {
		line-height: 50px;
		height: 50px;
		background-color: #000;
		color: #fff;
		font-size: 14px;
	}

	.denglu_h span {
		margin: 0 15px;
		cursor: pointer;
	}

	.denglu_h span:first-child {
		float: left;
	}

	.denglu_h span:last-child {
		float: right;
	}

	.debglu_content {
		margin-top: 40px;
	}

	.el-form-item {
		padding: 0 20px;
	}

	.el-input {
		width: 350px;
	}

	.dengluclick {
		width: 100px;
		height: 50px;
		background-color: royalblue;
		line-height: 50px;
		text-align: center;
		color: #fff;
		font-size: 16px;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 10px;
		cursor: pointer;
	}
	.touxiang{
		display: none;
		width: 200px;
		height: 40px;
		line-height: 40px;
	}
	.touxiang img{
		width: 30px;
		height: 30px;
		border-radius: 30px;
		vertical-align: middle;
	}
	.touxiang span{
		width: 150px;
	}
</style>
