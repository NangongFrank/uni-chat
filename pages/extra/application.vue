<template>
	<view class="wrapper" :style="{'min-height': pageMinHeight}">
		<!-- <image src="/static/assets/application/bg.png" mode="widthFix" class="bg-img"></image> -->
		<!-- <view class="header">
			<nav-header :center-status="false" :right-status="false" :left-model="'appList'" />
		</view> -->
		<view class="padding-70"></view>
		<view class="content">
			<view class="bar-action">
				<view class="title">酒吧服务</view>
			</view>
			<view style="padding: 16upx 0;"></view>
			<view class="little-game">
				<view class="title">小游戏</view>
			</view>
		</view>
		<view class="footer">
			<navigator url="/pages/index/index">返回世界</navigator>
		</view>
	</view>
</template>
<script>
	//import navHeader from '@/components/navHeader'
	export default {
		data() {
			return {
				pageMinHeight: 0,
			}
		},
		onReady() {
			let vm = this
			uni.getSystemInfo({
				success({pixelRatio, screenHeight}) {
					// top 即header占据的空间高度(绝对值)
					const top = 64
					let hei = 0
					// #ifdef MP-WEIXIN
					hei = screenHeight - top + 'px'
					// #endif
					vm.pageMinHeight = hei
				},
			})
		},
		components: {
			//navHeader,
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
		padding: 0 10upx;
		display: flex;
		@{fd}: column;
		.bar-action,
		.little-game {
			width: 730upx;
			height: 326upx;
			@{bgc}: @content-bg;
		}
		.title {
			padding: 32upx 0 0 50upx;
			@{fs}: 36upx;
			color: @content-title-color;
		}
	}
	.footer {
		display: flex;
		@{jc}: center;
		padding: 30upx 0;
		navigator {
			display: flex;
			@{ai}: center;
			@{jc}: center;
			@{fs}: 24upx;
			width: 180upx;
			height: 80upx;
			@{bdra}: 40upx;
			color: #fff;
			@{bgc}: @back-btn-bg;
		} 
	}
	.header {
		width: 750upx;
		position: fixed;
		left: 0;
		top: 0;
		height: 140upx;
		z-index: 100;
	}
	.bg-img {
		position: fixed;
		left: 0;
		top: 0;
		z-index: -1;
		width: 750upx;
	}
</style>