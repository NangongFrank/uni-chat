<template>
	<view>
		添加用户
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

<style>
</style>
