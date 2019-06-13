<template>
	<view class="content">
		<word-header />
		<view class="padding-100"></view>
		<chat-room />
	</view>
</template>

<script>
	import WordHeader from '@/components/wordHead'
	import ChatRoom from '@/components/chatRoom'
	export default {
		components: {
			WordHeader,
			ChatRoom,
		},
	}
</script>

<style lang="less" scoped>
	@import "../../static/config";
</style>
