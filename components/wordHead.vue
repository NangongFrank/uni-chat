<template>
	<view class="header">
		<view class="token">
			
		</view>
		<view class="letter">
			世界
		</view>
		<view @tap="addUser" class="token iconfont icon-add"></view>
	</view>
</template>

<script>
	export default {
		props: {
			path: {
				type: String,
				default: "/pages/user/AddUser"
			}
		},
		methods: {
			addUser() {
				let vm = this
				uni.navigateTo({
					url: vm.path,
				})
			},
		},
	}
</script>

<style lang="less" scoped>
	@import "../static/config.less";
	.header {
		display: flex;
		height: 160upx;
		@{bgc}: #333;
		color: #fff;
		.token {
			width: 200upx;
		}
		.letter {
			flex: 1;
		}
		.letter,
		.token {
			display: flex;
			@{ai}: center;
			@{jc}: center;
			@{fs}: 42upx;
		}
	}
</style>
