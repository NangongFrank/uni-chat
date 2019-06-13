<template>
	<view class="content">
		<image src="/static/assets/chatroom/bg-img.jpg" mode="widthFix"></image>
		<view class="tab-nav">
			<tab-nav />
		</view>
		<view class="serivce">
			<customer-service />
		</view>
		<view class="padding-100"></view>
		<view>
			<chat-room :reqmsg="msg" />
		</view>
		<view class="padding-70"></view>
		<view class="send-box">
			<chat-send-box @resmsg="resMsg" />
		</view>
	</view>
</template>
<script>
	import tabNav from '@/components/tabNav'
	import chatSendBox from '@/components/chatSendBox'
	import chatRoom from '@/components/chatRoom'
	import customerService from '@/components/customerService'
	export default {
		data() {
			return {
				msg: ""
			}
		},
		components: {
			tabNav,
			chatSendBox,
			chatRoom,
			customerService,
		},
		methods: {
			resMsg({msg}) {
				let vm = this
				vm.msg = msg
			},
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
	.tab-nav {
		position: fixed;
		right: 0;
		top: 300upx;
	}
	.serivce {
		position: fixed;
		left: 0;
		top: 650upx;
	}
	.send-box {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 750upx;
	}
</style>