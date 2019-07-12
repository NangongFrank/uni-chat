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
			<chat-room :pual-height="viewMinHeight"/>
		</view>
		<view class="send-box">
			<chat-send-box/>
		</view>
	</view>
</template>
<script>
	import tabNav from '@/components/tabNav'
	import navHeader from '@/components/navHeader'
	import chatSendBox from '@/components/sendBox'
	import chatRoom from '@/components/chatRoom'
	import customerService from '@/components/customerService'
	import {wsHost} from '@/extends/host'
	/* this.$on('resmsg', obj => {
		console.log(obj)
	})
	this.$on('resource', obj => {
		console.log(obj)
	}) */
	export default {
		data() {
			return {
				msg: "",
				viewMinHeight: 0,
				userData: {},
				clientId: '',
				resource: ''
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
			
		},
		onReady() {
			
		},
		onLoad() {
			uni.getSystemInfo().then(([err, {screenHeight, windowHeight}]) => {
				const top = 50
				this.viewMinHeight = windowHeight - top + 'px'
			})
		},
		onShow() {
			/* let vm = this
			// 获取用户信息 打开websocket
			uni.getStorage({
				key: 'userData',
			}).then(([err, {data}]) => {
				this.userData = data
				uni.connectSocket({url: wsHost})
			}) */
		}
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