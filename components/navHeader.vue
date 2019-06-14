<template>
	<view class="content">
		<view class="content-left">
			<view class="back-action">
				<view class="iconfont icon-arrow-left"
				@tap="backStep"></view>
			</view>
		</view>
		<view class="content-center">
			
		</view>
		<view class="content-right">
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
			}
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
		padding: 100upx 12upx 0; 
		&-left,
		&-right {
			width: 200upx;
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
			}
		}
		.iconfont {
			color: #fff;
			@{fs}: 32upx;
			display: flex;
			padding: 14upx;
		}
	}
	.back-action {
		display: flex;
	}
</style>