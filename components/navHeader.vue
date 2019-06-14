<template>
	<view class="content">
		<view class="content-left"
		:class="{'w200': leftModel == 'backStep'}"
		v-if="leftStatus">
			<view class="back-action" v-if="leftModel == 'backStep'">
				<view class="iconfont icon-arrow-left"
				@tap="backStep"></view>
			</view>
			<view class="app-wrapper" v-else-if="leftModel == 'appList'">
				<view class="iconfont icon-list"></view>
				<view>应用</view>
			</view>
			<view class="chatroom-wrapper"
			@tap="backStep"
			v-else-if="leftModel == 'backChatRoom'">
				<view class="iconfont icon-arrow-left"></view>
				<view>返回聊天室</view>
			</view>
			<view class="myself-action"
			@tap="backStep"
			v-if="leftModel == 'textBackStep'">
				<view class="iconfont icon-arrow-left"></view>
				<view>返回</view>
			</view>
		</view>
		<view class="content-center" v-if="centerStatus"></view>
		<view class="content-right"
		:class="{'w200': leftModel == 'backStep'}"
		v-if="rightStatus">
			<view class="search-wrapper">
				<input v-model="serchText" 
				confirm-type="search" 
				placeholder="输入名称或ID">
				<view class="iconfont icon-search"
				@tap="searchEvent"></view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		props: {
			backStepPath: {
				type: String,
				default: ""
			},
			leftModel: {
				type: String,
				default: 'backStep',
			},
			leftStatus: {
				type: Boolean,
				default: true,
			},
			centerStatus: {
				type: Boolean,
				default: true,
			},
			rightStatus: {
				type: Boolean,
				default: true,
			},
			actionName: {
				type:String,
				default: "",
			},
		},
		data() {
			return {
				serchText: "",
			}
		},
		methods: {
			searchEvent() {
				console.log('search action running')
			},
			backStep() {
				let vm = this,
					url = vm.backStepPath
				if(!url) {
					uni.navigateBack({
						animationType: "slide-out-right"
					})
				} else {
					uni.navigateTo({url, animationType: "slide-in-bottom"})
				}
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../static/config.less";
	@import "../static/theme/components/tabNav.less";
	.content {
		display: flex;
		@{ai}: center;
		// developing time `padding-top: 100upx;`, producting time `padding-top: 0;`
		padding: 100upx 12upx 0;
		@{bgc}: #000;
		&-left,
		&-right {
			width: 300upx;
		}
		&-center {
			flex: 1;
		}
		.search-wrapper {
			width: 180upx;
			height: 42upx;
			display: flex;
			@{ai}: center;
			@{bdra}: 12upx;
			@{bgc}: #535353;
			input {
				@{fs}: 14upx;
				color: #666;
				padding-left: 10upx;
			}
			color: #fff;
		}
		.app-wrapper {
			display: flex;
			color: #fff;
			@{ai}: center;
			padding: 28upx 0;
			@{fs}: 36upx;
			.iconfont {
				@{fs}: 42upx;
			}
		}
		.chatroom-wrapper {
			display: flex;
			color: #fff;
			@{ai}: baseline;
			padding: 28upx 0;
			@{fs}: 36upx;
			.iconfont {
				@{fs}: 42upx;
			}
		}
	}
	.back-action {
		display: flex;
		.iconfont {
			color: #fff;
			@{fs}: 32upx;
			display: flex;
			padding: 14upx;
		}
	}
	.myself-action {
		display: flex;
		@{ai}: center;
		padding: 14upx;
		view {
			@{fs}: 24upx;
			color: #fff;
		}
		.iconfont {
			display: flex;
			@{ai}: center;
		}
	}
	.w200 {
		width: 200upx;
	}
</style>