<template>
	<view class="wrapper" :style="{height: pageHeight}">
		<image src="/static/assets/start-page-bg.jpg" mode="widthFix"></image>
		<view class="web-font">LIKING</view>
		<view class="m-progress" v-if="progress != 100">
			<view :style="{width: progress + '%'}"></view>
		</view>
		<button v-if="progress == 100" open-type="getUserInfo" 
		@getuserinfo="getUserInfo">使用当前用户登录</button>
	</view>
</template>
<script>
	import {userRegister, userIsRegister, appid, secret} from '@/extends/host'
	export default {
		data() {
			return {
				pageHeight: '603px',
				progress: 0,
				isLogin: false,
				openid: '',
				session_key: '',
				avatarUrl: '',
				nickName: '',
				gender: '',
			}
		},
		methods: {
			getUserInfo({detail}) {
				let {userInfo} = detail,
					{avatarUrl, nickName, gender} = userInfo
				this.avatarUrl = avatarUrl
				this.nickName = nickName
				this.gender = gender
				uni.showLoading({
					title: '处理中...'
				})
				uni.setStorage({
					key: 'userData',
					data: {userInfo},
					success() {
						uni.hideLoading()
					}
				})
				this.userCheck()
			},
			userCheck() {
				let vm = this,
					openid = vm.openid
				uni.showLoading({
					title: '处理用户信息'
				})
				uni.request({
					method: 'post',
					url: userIsRegister,
					data: {openid}
				}).then(([err, {data}]) => {
					if(data.state) {
						uni.reLaunch({
							url: '/pages/index/index'
						})
					} else {
						vm.userRegister()
					}
				})
			},
			userRegister() {
				let vm = this,
					sex = vm.gender,
					cover = vm.avatarUrl,
					name = vm.nickName,
					openid = vm.openid
				uni.request({
					method: 'post',
					url: userRegister,
					data: {openid, sex, cover, name}
				}).then(([err, {data}]) => {
					if(data.state) {
						uni.reLaunch({
							url: '/pages/index/index'
						})
					}
				})
			},
			getOpenId() {
				let vm = this
				uni.login({
					provider: 'weixin',
				}).then(([err, {code}]) => {
					uni.request({
						url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',
						data: {
							appid,
							js_code: code,
							secret,
							grant_type: 'authorization_code',
						}
					}).then(([err, {data}]) => {
						vm.openid = data.openid
						vm.session_key = data.session_key
						uni.setStorage({
							key: 'myOpenId',
							data: data.openid,
						})
					})
				})
			}
		},
		onReady() {
			uni.getSystemInfo().then(res => {
				let [err, {windowHeight}] = res,
					vm = this
				vm.pageHeight = windowHeight + 'px'
			})
		},
		onLoad() {
			this.getOpenId()
		},
		mounted() {
			let vm = this
			setTimeout(() => {
				vm.progress = 50
			}, 400)
			setTimeout(() => {
				vm.progress = 80
			}, 800)
			setTimeout(() => {
				vm.progress = 99
			}, 1000)
			setTimeout(() => {
				vm.progress = 100
				uni.getStorage({
					key: 'userData',
					success() {
						uni.reLaunch({
							url: '/pages/index/index'
						})
					}
				})
			}, 1200)
		}
	}
</script>
<style lang="less" scoped>
	.wrapper {
		overflow: hidden;
		position: relative;
		padding-top: 200upx;
		display: flex;
		justify-content: center;
		.web-font {
			color: #b6b9c0;
			font-size: 60upx;
			letter-spacing: 6upx;
		}
	}
	image {
		position: fixed;
		width: 750upx;
		left: 0;
		top: 0;
		z-index: -1;
	}
	button {
		position: absolute;
		bottom: 16%;
		left: 50%;
		transform: translateX(-50%);
		font-size: 28upx;
		color: #666;
	}
	.m-progress {
		position: absolute;
		bottom: 20%;
		left: 50%;
		transform: translateX(-50%);
		width: 300upx;
		height: 10upx;
		border-radius: 5upx;
		view {
			position: absolute;
			left: 0;
			top: 0;
			height: 10upx;
			border-radius: 5upx;
			background: linear-gradient(to right, #a24461, #fbdbf6);
			transition: width .1s linear;
		}
	}
</style>
