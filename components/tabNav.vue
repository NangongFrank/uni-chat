<template>
	<view class="content">
		<view class="ul">
			<view class="li">
				<view class="cover">
					<!-- <text class="iconfont icon-female"></text> -->
					<view class="user-head">
						<image src="/static/assets/user-head.png"></image>
					</view>
				</view>
				<view>世界</view>
			</view>
			<view class="li"
			v-for="(value, index) in tabList"
			:key="index"
			@tap="jumpToPage(value.path)">
				<text class="tip-icon iconfont"
				:style="{color: value.color}"
				:class="value.font"></text>
				<view class="value-font" 
				v-text="value.value"></view>
			</view>
		</view>
		<navigator url="/pages/extra/findTa" class="find-ta">`
			<view class="box2">
				<view>寻ta</view>
			</view>
		</navigator>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				tabList: [{
					font: 'icon-firends',
					value: '好友',
					path: '/pages/extra/firends',
					color: "#db1e06",
					},{
					font: 'icon-message-ding',
					value: '消息',
					path: '/pages/extra/message',
					color: '#908bcd',
					},{
					font: 'icon-application',
					value: '应用',
					path: '/pages/extra/application',
					color: '#12803e',
					},{
					font: 'icon-myself',
					value: '我的',
					path: '/pages/extra/myself',
					color: '#197ead',
					}],
			}
		},
		methods: {
			jumpToPage(path) {
				if(!path) {
					uni.showToast({
						title: '功能开发中',
						icon: "none",
						duration: 800,
					})
				} else {
					uni.navigateTo({
						url: path,
						animationType: "slide-in-left",
					})
				}
			},
		}
	}
</script>
<style lang="less" scoped>
	@import "../static/config.less";
	@import "../static/theme/components/tabNav.less";
	@keyframes moving {
		0% {
			border-top-color: #472cc9;
			border-right-color: #02aafd;
			border-bottom-color: #4147ff;
			border-left-color: #7000f9;
		}
		25% {
			border-right-color: #472cc9;
			border-bottom-color: #02aafd;
			border-left-color: #4147ff;
			border-top-color: #7000f9;
		}
		75% {
			border-bottom-color: #472cc9;
			border-left-color: #02aafd;
			border-top-color: #4147ff;
			border-right-color: #7000f9;
		}
		100% {
			border-left-color: #472cc9;
			border-top-color: #02aafd;
			border-right-color: #4147ff;
			border-bottom-color: #7000f9;
		}
	}
	@keyframes moved {
		100% {
			border-top-color: #472cc9;
			border-right-color: #02aafd;
			border-bottom-color: #4147ff;
			border-left-color: #7000f9;
		}
		75% {
			border-right-color: #472cc9;
			border-bottom-color: #02aafd;
			border-left-color: #4147ff;
			border-top-color: #7000f9;
		}
		25% {
			border-bottom-color: #472cc9;
			border-left-color: #02aafd;
			border-top-color: #4147ff;
			border-right-color: #7000f9;
		}
		0% {
			border-left-color: #472cc9;
			border-top-color: #02aafd;
			border-right-color: #4147ff;
			border-bottom-color: #7000f9;
		}
	}
	.find-ta {
		margin-top: 280upx;
		width: 140upx;
		height: 140upx;
		@{bdra}: 50%;
		position: relative;
		margin-right: 18upx;
		border: 4upx solid transparent;
		animation: moving .5s infinite linear; 
		view {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			@{bdra}: 50%;
		}
		.box2 {
			border: 6upx solid transparent;
			animation: moved .5s infinite linear;
			width: 100upx;
			height: 100upx;
			box-shadow: 1upx 2upx 10upx 2upx #2c36de;
			view {
				box-shadow: 1upx 2upx 30upx 6upx #2c36de;
				border: 6upx solid #7a28fa;
				width: 94upx;
				height: 94upx;
				@{fs}: 24upx;
				@{bgi}: radial-gradient(center, #804cdc, #482aa5);
				display: flex;
				@{ai}: center;
				@{jc}: center;
				color: #eee;
				letter-spacing: 2upx;
			}
		}
	}
	.li {
		position: relative;
		margin-bottom: 30upx;
		width: 100upx;
		height: 48upx;
		padding-right: 20upx;
		@{bgc}: @bg-li;
		display: flex;
		@{ai}: center;
		@{jc}: flex-end;
		@{bdra}: 24upx 0 0 24upx;
		view,
		.iconfont {
			@{fs}: @font-fs;
			color: #fff;
		}
		.iconfont {
			@{fs}: 32upx;
			margin-right: 6upx;
		}
		.cover,
		.tip-icon {
			width: 30upx;
		}
	}
	.cover {
		position: absolute;
		top: 0;
		left: 0;
		.user-head,
		image {
			@{bdra}: 50%;
		}
		.user-head {
			position: absolute;
			top: -32upx;
			left: -46upx;
			width: 86upx;
			height: 86upx;
			display: flex;
			@{ai}: center;
			@{jc}: center;
			@{bgc}: #fff;
		}
		image {
			width: 70upx;
			height: 70upx;
			display: block;
		}
		.iconfont {
			position: absolute;
			top: -46upx;
			left: -50upx;
			transform: rotate(-90deg);
		}
	}
	.mt380 {
		margin-top: 280upx;
	}
	.ul {
		display: flex;
		@{fd}: column;
		@{ai}: flex-end;
	}
</style>