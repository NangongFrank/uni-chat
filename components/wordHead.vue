<template>
	<view class="header">
		<view class="token">
			<view v-if="token" class="iconfont icon-left-arrow" v-text="token" @tap="backStep"></view>
		</view>
		<view class="letter" v-text="letterKey"></view>
		<view @tap="addUser" class="token iconfont icon-add" v-if="rightBtn == 'add'"></view>
		<view class="token" v-if="rightBtn == 'space'"></view>
	</view>
</template>

<script>
	export default {
		props: {
			path: {
				type: String,
				default: "/pages/user/AddUser"
			},
			backStepPath: {
				type: String,
				default: "",
			},
			letterKey: {
				type: String,
				default: "世界"
			},
			rightBtn: {
				type: String,
				default: 'add',
			},
			token: {
				type: String,
				default: ""
			}
		},
		methods: {
			addUser() {
				let vm = this
				uni.navigateTo({
					url: vm.path,
				})
			},
			backStep() {
				let vm = this
				if(!vm.backStepPath) {
					uni.navigateBack()
				} else {
					uni.navigateTo({
						url: vm.backStepPath,
					})
				}
			},
		},
	}
</script>

<style lang="less" scoped>
	@import "../static/config.less";
	.header {
		display: flex;
		padding-top: 40upx;
		position: fixed;
		top: 0;
		left: 0;
		width: 750upx;
		height: 160upx;
		z-index: 100;
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
