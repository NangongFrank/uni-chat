<template>
	<view class="wrapper" :style="{height: pageHeight}">
		<image src="/static/assets/start-page-bg.jpg" mode="widthFix"></image>
		<view class="web-font">LIKING</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				pageHeight: '603px',
			}
		},
		onLoad(opitons) {
			uni.showLoading({
				title: 'loading...',
			})
			// 获取用户信息 存储
			setTimeout(() => {
				uni.redirectTo({
					url:"/pages/index/index",
				})
			}, 1000)
		},
		methods: {

		},
		onReady() {
			uni.getSystemInfo().then(res => {
				let [err, {windowHeight}] = res,
					vm = this
				vm.pageHeight = windowHeight + 'px'
			})
		}
	}
</script>
<style lang="less" scoped>
	.wrapper {
		overflow: hidden;
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
</style>
