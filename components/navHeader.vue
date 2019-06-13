<template>
	<view class="content">
		<view class="content-left">
			
		</view>
		<view class="content-center">
			
		</view>
		<view class="content-right">
			<view class="search-wrapper">
				<input confirm-type="search" placeholder="输入名称或ID">
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				
			}
		},
	}
</script>
<style lang="less" scoped>
	@import "../static/config.less";
	@import "../static/theme/components/tabNav.less";
	.content {
		display: flex;
		padding-top: 20upx;
		&-left,
		&-right {
			flex: 1;
		}
		&-center {
			flex: 2;
		}
	}
</style>