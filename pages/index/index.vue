<template>
	<view class="content">
		<image src="/static/assets/chatroom/bg-img.jpg" mode="widthFix"></image>
		<view class="tab-nav">
			<tab-nav />
		</view>
		<view class="serivce">
			<customer-service />
		</view>
		<view>
			<chat-room :reqmsg="msg" :pual-height="viewMinHeight"/>
		</view>
		<view class="send-box">
			<chat-send-box @resmsg="resMsg" />
		</view>
	</view>
</template>
<script>
	import tabNav from '@/components/tabNav'
	import navHeader from '@/components/navHeader'
	import chatSendBox from '@/components/sendBox'
	import chatRoom from '@/components/chatRoom'
	import customerService from '@/components/customerService'
	export default {
		data() {
			return {
				msg: "",
				viewMinHeight: 0,
				pageMinHeight: 0,
			}
		},
		components: {
			tabNav,
			chatSendBox,
			chatRoom,
			customerService,
			navHeader,
		},
		methods: {
			resMsg({msg}) {
				let vm = this
				vm.msg = msg
			},
		},
		onLoad() {
			
		},
		onReady() {
			let vm = this
			uni.getSystemInfo({
				success({pixelRatio, screenHeight}) {
					// top 即header占据的空间高度(绝对值)
					const top = 68
					let height = 0,
						hei = 0
					// #ifdef MP-WEIXIN
					height = screenHeight
					hei = screenHeight - top - 64
					height += 'px'
					hei += 'px'
					// #endif
					vm.pageMinHeight = height
					vm.viewMinHeight = hei
				},
			})
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
		top: 200upx;
		z-index: 100;
	}
	.serivce {
		position: fixed;
		left: 0;
		top: 450upx;
		z-index: 100;
	}
	.send-box {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 750upx;
		z-index: 100;
	}
</style>