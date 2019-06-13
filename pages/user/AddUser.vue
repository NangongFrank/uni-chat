<template>
	<view>
		<word-header :token="'世界'" :letter-key="'搜索用户'" :right-btn="'space'" :back-step-path="'/pages/index/index'"/>
		<view class="padding-100"></view>
		<view class="search-box">
			<input value="" placeholder="输入用户名或者id" confirm-type="search"/>
		</view>
	</view>
</template>

<script>
	import WordHeader from '@/components/wordHead'
	export default {
		props: {
			path: {
				type: String,
				default: "/pages/user/AddUser"
			}
		},
		components: {
			WordHeader,
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
	@import "../../static/config";
	.search-box {
		padding: 20upx 16upx;
		border-bottom: 2upx solid #333;
	}
</style>
