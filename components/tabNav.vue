<template>
	<view class="content">
		<view class="ul">
			<view class="li">
				<view class="cover">
					<text class="iconfont icon-female"></text>
					<view class="user-head">
						<image src="/static/assets/user-head.png"></image>
					</view>
				</view>
				<view>世界</view>
			</view>
			<view class="li"
			v-for="(value, index) in tabList"
			:class="{'mt380': value.font == 'icon-card-wrap'}"
			:key="index"
			@tap="jumpToPage(value.path)">
				<text class="tip-icon iconfont"
				:class="value.font"></text>
				<view class="value-font" 
				v-text="value.value"></view>
			</view>
		</view>
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
					},{
					font: 'icon-message',
					value: '消息',
					path: '/pages/extra/message',
					},{
					font: 'icon-application',
					value: '应用',
					path: '/pages/extra/application',
					},{
					font: 'icon-myself',
					value: '我的',
					path: '/pages/extra/myself',
					},{
					font: 'icon-card-wrap',
					value: '卡券',
					},{
					font: 'icon-lightning',
					value: '结友',
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
	.li {
		position: relative;
		margin-bottom: 22upx;
		padding: 10upx 18upx;
		@{bgc}: @bg-li;
		display: flex;
		@{ai}: center;
		@{jc}: flex-end;
		@{bdra}: 10upx 0 0 10upx;
		view,
		.iconfont {
			@{fs}: @font-fs;
			color: #fff;
		}
		.iconfont {
			@{fs}: 22upx;
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
		margin-top: 320upx;
	}
</style>