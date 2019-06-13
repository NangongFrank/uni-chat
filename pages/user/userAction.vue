<template>
	<view>
		<word-header :token="'返回'" :letter-key="'用户信息'" :right-btn="'space'"/>
		<view class="padding-100"></view>
		<view class="user-info">
			<view class="user-info-cover">
				<image src="/static/assets/user-head.png"></image>
			</view>
			<view class="user-info-task" @tap="chatUser">
				<view>张三</view>
				<view>ID号: <text>1234567890</text></view>
			</view>
		</view>
		<view class="user-action" @tap="addUser">
			<text>添加到通讯录</text>
		</view>
	</view>
</template>
<script>
	import WordHeader from '@/components/wordHead'
	export default {
		components: {
			WordHeader,
		},
		methods: {
			addUser() {
				console.log('添加用户')
			},
			chatUser() {
				uni.navigateTo({
					url: "chatUser"
				})
			},
		}
	}
</script>
<style lang="less" scoped>
	@import "../../static/config";
	.user-info {
		display: flex;
		padding: 20upx;
		&-cover {
			padding: 10upx 20upx;
		}
		&-task {
			padding: 10upx 12upx;
			display: flex;
			@{fd}: column;
			@{jc}: space-around;
		}
		image {
			width: 120upx;
			height: 120upx;
		}
	}
	.user-action {
		display: flex;
		@{jc}: center;
		padding: 30upx 0;
		@{bgc}: #eee;
		&:active {
			@{bgc}: #ddd;
		}
		text {
			@{fs}: 32upx;
			color: #999;
		}
	}
</style>
