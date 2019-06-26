<template>
	<view class="wrapper" :style="{'min-height': pageMinHeight}">
		<view class="content">
			<view class="bar-action">
				<view class="title">酒吧服务</view>
			</view>
			<view style="padding: 16upx 0;"></view>
			<view class="little-game">
				<view class="title">小游戏</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				pageMinHeight: '603px',
			}
		},
		onReady() {
			let vm = this
			uni.getSystemInfo({
				success({screenHeight, windowHeight}) {
					// top 即header占据的空间高度(绝对值)
					vm.pageMinHeight = windowHeight + 'px'
					vm.viewMinHeight = windowHeight - 64 + 'px'
				},
			})
		},
	}
</script>
<style lang="less" scoped>
	@import '../../static/config.less';
	@import "../../static/theme/extra/application.less";
	.wrapper {
		@{bgc}: #000;
	}
	.content {
		padding: 30upx 20upx 0;
		display: flex;
		@{fd}: column;
		.bar-action,
		.little-game {
			width: 710upx;
			height: 326upx;
			@{bgc}: @content-bg;
		}
		.title {
			padding: 32upx 0 0 50upx;
			@{fs}: 36upx;
			color: @content-title-color;
		}
	}
</style>