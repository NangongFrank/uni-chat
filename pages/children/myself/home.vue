<template>
	<view>
		<scroll-view scroll-y :style="{ height: viewMinHeight }">
			<view class="banner">
				<image src="/static/assets/myself/home/banner.jpg"></image>
				<view class="banner-hover"></view>
			</view>
			<view class="user">
				<view class="user-info">
					<image src="/static/assets/myself/home/user-head.jpg"></image>
					<view class="user-task">
						<view class="user-task-name">享元清和</view>
						<view class="user-task-role">茶艺师 高级</view>
					</view>
				</view>
				<view class="user-tip">
					<view class="user-tip-side">湖南省 长沙市</view>
					<view class="user-tip-base">白羊座 女 160cm</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				viewMinHeight: 0,
				pageMinHeight: 0,
			}
		},
		onLoad(opitons) {

		},
		methods: {

		},
		onReady() {
			let vm = this
			uni.getSystemInfo({
				success({pixelRatio, screenHeight}) {
					// top 即header占据的空间高度(绝对值)
					let height = 0,
						hei = 0
					// #ifdef MP-WEIXIN
					height = screenHeight
					hei = screenHeight - 64
					height += 'px'
					hei += 'px'
					// #endif
					vm.pageMinHeight = height
					vm.viewMinHeight = hei
				},
			})
		}
	}
</script>
<style lang="less" scoped>
	@import '../../../static/config.less';
	@import '../../../static/theme/children/myself/home.less';
	.user {
		display: flex;
		@{ai}: center;
		@{jc}: space-between;
		padding: 12upx 20upx;
		&-tip {
			@{fs}: @side-base-fs;
			color: @side-base-color;
			display: flex;
			@{fd}: column;
			@{ai}: center;
		}
		&-info {
			display: flex;
			@{ai}: center;
			image {
				width: 142upx;
				height: 142upx;
				@{bdra}: 50%;
				margin-right: 20upx;
			}
			.user-task {
				display: flex;
				@{fd}: column;
				@{jc}: space-around;
				&-name {
					@{fs}: @name-fs;
					color: @name-color;
					font-weight: 900;
				}
				&-role {
					@{fs}: @role-fs;
					color: @role-color;
				}
			}
		}
	}
	.banner {
		position: relative;
		&-hover,
		image{
			width: 750upx;
			height: 448upx;
		}
		&-hover{
			position: absolute;
			left: 0;
			top: 0;
			@{bgc}: rgba(0, 0, 0, .5);
		}
	}
</style>
