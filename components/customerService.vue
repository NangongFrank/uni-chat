<template>
	<view class="content" @tap="telCustomerService">
		<view class="iconfont icon-shake-hands"></view>
		<view class="text">服</view>
		<view class="text">务</view>
	</view>
</template>
<script>
	export default {
		methods: {
			telCustomerService() {
				uni.showToast({
					title: '暂时不可联系',
					icon: 'none',
					duration: 1000,
				})
			},
		}
	}
</script>
<style lang="less" scoped>
	@import "../static/config.less";
	@import "../static/theme/wordPage/customerService.less";
	.content {
		@{bgc}: @wrapper-bg;
		width: 50upx;
		height: 100upx;
		padding: 10upx 0;
		display: flex;
		@{fd}: column;
		@{ai}: center;
		@{jc}: space-between;
		@{bdra}: 0 10upx 10upx 0;
	}
	.iconfont,
	.text {
		@{fs}: 20upx;
	}
	.iconfont {
		color: @icon-color;
	}
	.text {
		color: #fff;
	}
</style>