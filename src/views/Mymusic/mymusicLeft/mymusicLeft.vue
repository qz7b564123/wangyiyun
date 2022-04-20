<template>
	<div class="mymusicleft">
		<div class="m_first">
			<ul>
				<li>我的歌手({{artist}})</li>
				<li>我的视频({{MV}})</li>
				<li>我的电台({{diantai}})</li>
				<li>创建的歌单({{createdPlaylistCount}})
					<ul>
						<li> <img src="../../../assets/img/800x800.png" /> <span>我喜欢的音乐</span></li>
					</ul>
				</li>
				<li>收藏的专辑({{zhuanji}})
					<ul>
						<li v-for="m in zhuanjimessage">
							<img :src="m.picUrl"> <span>{{m.name}}</span>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<div class="m_second"></div>
		<div class="m_last"></div>
	</div>
</template>

<script>
	export default {
		name: 'mymusicleft',
		data() {
			return {
				// 歌手数量
				artist: 0,
				artistMessage: [],
				// MV
				MV: 0,
				Mvmessage: [],
				// 电台
				diantai: 0,
				diantaiMessage: [],
				// 创建的歌单
				createdPlaylistCount: 0,
				// 收藏的专辑
				zhuanji: 0,
				zhuanjimessage: [],
				userId: ''
			}
		},
		created() {
			this.userId = this.$store.state.userId
			this.getsong()
			this.getvideo()
			this.getdiantai()
			this.gedan()
			this.getzhuanji()
			// this.shoucanggedan()
		},
		methods: {

			async getsong() {
				const res = await this.$http.get('/user/subcount')
				// console.log(res)
				this.artist = res.count
				this.artistMessage = res.data
			},
			async getvideo() {
				const res = await this.$http.get('/mv/sublist')
				// console.log(res)
				this.MV = res.count
				this.Mvmessage = res.data

			},
			async getdiantai() {
				const res = await this.$http.get('/dj/sublist')
				// console.log(res)
				this.diantai = res.count
				this.diantaiMessage = res.data
			},
			async gedan() {
				const res = await this.$http.get('/user/subcount')
				// console.log(res)
				this.createdPlaylistCount = res.createdPlaylistCount
			},
			async getzhuanji() {
				const res = await this.$http.get('/album/sublist')
				console.log(res)
				this.zhuanji = res.count
				this.zhuanjimessage = res.data
			},
		}
	}
</script>

<style scoped="scoped">
	.mymusicleft {
		width: 240px;
		height: 783px;
		/* background-color: red; */
		border: solid 1px #fff;
		border-top: none;
		float: left;
		overflow-y: auto;
	}

	.m_first {
		margin-top: 40px;
		font-size: 16px;
		font-weight: bold;
		overflow-y: auto;
	}

	.m_first ul li {
		padding: 10px 10px;
		cursor: pointer;
	}

	.m_first ul li ul li:hover {
		background-color: lightgray;
		color: #000;
	}

	.m_first ul li>ul li {
		margin-top: 10px;
		height: 50px;
	}

	.m_first ul li>ul li img {
		height: 50px;
		vertical-align: middle;
	}

	::-webkit-scrollbar {

		width: 7px;

	}

	::-webkit-scrollbar-track {

		background-color: #f5f5f5;

		-webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);

		border-radius: 5px;

	}

	::-webkit-scrollbar-thumb {

		background-color: rgba(0, 0, 0, 0.2);

		border-radius: 5px;

	}
</style>
