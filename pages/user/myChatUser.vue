<template>
	<view>
		<word-header :token="'世界'" :letter-key="'张三'" :right-btn="'space'" :back-step-path="'/pages/index/index'"/>
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
	
</style>
