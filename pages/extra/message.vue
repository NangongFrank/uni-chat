<template>
	<view class="wrapper" :style="{'min-height': pageMinHeight}">
		<view class="header">
			<nav-header 
			:center-status="false" 
			:right-status="false" 
			:left-model="'backChatRoom'" 
			:back-step-path="'/pages/index/index'" />
		</view>		
		<scroll-view scroll-y :style="{'height': viewMinHeight}">
			<view class="ul">
				<view class="li"
				v-for="(value, index) in msgList"
				:key="index">
					<view class="cover">
						<image :src="value.cover"></image>
					</view>
					<view class="tip">
						<view class="tip-info">
							<view class="tip-info-name"
							v-text="value.name"></view>
							<view class="tip-info-time"
							v-text="value.time"></view>
						</view>
						<view class="tip-msg"
						v-text="value.msg"></view>
					</view>
				</view>
			</view>
			
		</scroll-view>
		
	</view>
</template>
<script>
	import navHeader from '@/components/navHeader'
	export default {
		data() {
			return {
				msgList: [{
					cover: '/static/assets/message/user-head.png',
					name: '考研',
					msg: '为了成为更好的自己，一起加油吧~！',
					time: '6-12',
					},{
					cover: '/static/assets/message/user-head.png',
					name: '考研',
					msg: '为了成为更好的自己，一起加油吧~！',
					time: '6-12',
					},{
					cover: '/static/assets/message/user-head.png',
					name: '考研',
					msg: '为了成为更好的自己，一起加油吧~！',
					time: '6-12',
					},{
					cover: '/static/assets/message/user-head.png',
					name: '考研',
					msg: '为了成为更好的自己，一起加油吧~！',
					time: '6-12',
					},{
					cover: '/static/assets/message/user-head.png',
					name: '考研',
					msg: '为了成为更好的自己，一起加油吧~！',
					time: '6-12',
					},{
					cover: '/static/assets/message/user-head.png',
					name: '考研',
					msg: '为了成为更好的自己，一起加油吧~！',
					time: '6-12',
					},{
					cover: '/static/assets/message/user-head.png',
					name: '考研',
					msg: '为了成为更好的自己，一起加油吧~！',
					time: '6-12',
					},{
					cover: '/static/assets/message/user-head.png',
					name: '考研',
					msg: '为了成为更好的自己，一起加油吧~！',
					time: '6-12',
					},{
					cover: '/static/assets/message/user-head.png',
					name: '考研',
					msg: '为了成为更好的自己，一起加油吧~！',
					time: '6-12',
				}],
				viewMinHeight: 0,
				pageMinHeight: 0,
			}
		},
		components: {
			navHeader,
		},
		onReady() {
			let vm = this
			uni.getSystemInfo({
				success({pixelRatio, screenHeight}) {
					// top 即header占据的空间高度(绝对值)
					const top = 120
					let height = pixelRatio * screenHeight,
						hei = (screenHeight - top) * pixelRatio
					// #ifdef MP-WEIXIN
					height += 'rpx'
					hei += 'rpx'
					// #endif
					vm.pageMinHeight = height
					vm.viewMinHeight = hei
				},
			})
		},
	}
</script>
<style lang="less" scoped>
	@import '../../static/config.less';
	@import "../../static/theme/extra/message.less";
	scroll-view {
		width: 750upx;
	}
	.ul {
		width: 750upx;
		display: flex;
		@{fd}: column;
		@{ai}: center;
	}
	.li {
		display: flex;
		width: 730upx;
		margin-bottom: 20upx;
		padding: 8upx 20upx;
		box-shadow: 0 2upx 16upx #ededed;
		@{bgc}: #fff;
		.cover,
		image {
			width: 138upx;
			height: 138upx;
			@{bdra}: 12upx;
		}
		.cover {
			margin-right: 20upx;
		}
		.tip {
			flex: 1;
			display: flex;
			@{fd}: column;
			@{jc}: space-around;
			padding: 10upx 0;
			&-info {
				display: flex;
				@{jc}: space-between;
				@{ai}: baseline;
				&-name {
					@{fs}: 30upx;
				}
				&-time {
					@{fs}: 18upx;
				}
			}
			&-msg {
				@{fs}: 24upx;
			}
		}
	}
</style>