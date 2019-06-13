<template>
	<view class="content">
		<image src="/static/assets/chatroom/bg-img.jpg" mode="widthFix"></image>
	</view>
</template>
<script>
	import tabNav from '@/components/tabNav'
	import chatSendBox from '@/components/chatSendBox'
	import chatRoom from '@/components/chatRoom'
	export default {
		data() {
			return {
				
			}
		},
		components: {
			tabNav,
			chatSendBox,
			chatRoom,
		},
		methods: {
			
		},
		onLoad() {
			
		},
	}
</script>
<style lang="less" scoped>
	@import '../../static/config.less';
	image {
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
		width: 750upx;
	}
</style>