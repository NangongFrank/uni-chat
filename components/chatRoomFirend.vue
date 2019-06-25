<template>
	<view class="content">
		<scroll-view scroll-y :scroll-top="lastMsgSide" :style="{height: pualHeight}">
			<view class="introduce">
				<view class="wrapper">
					<view class="introduce-nav">
						<image src="/static/assets/myself/chatFirend/firend.jpg"></image>
						<view class="progress-box">
							<view>匹配度92.0%</view>
						</view>
						<image src="/static/assets/myself/chatFirend/me.jpg"></image>
					</view>
					<view class="introduce-ct">
						<view class="item">
							<view class="iconfont icon-dot"></view>
							<view>你们都是好看的90后</view>
						</view>
						<view class="item">
							<view class="iconfont icon-dot"></view>
							<view>最近即将上映的电影，有那几部是你非看不可的？</view>
						</view>
						<view class="item">
							<view class="iconfont icon-dot"></view>
							<view>跟ta聊聊你这辈子做过最疯狂的事情吧</view>
						</view>
					</view>
				</view>
			</view>
			<view class="ul">
				<view
				v-for="(value, index) in userList"
				:key="index">
					<view class="time">星期一 09:00</view>
					<view class="li"
					:class="{me: value.isMe, firend: !value.isMe}">
						<view class="cover" @tap="seeFirend(value)">
							<image :src="value.cover"></image>
						</view>
						<view>
							<view class="msg" v-text="value.msg"></view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>
<script>
	export default {
		props: {
			reqmsg: {
				type: String,
				default: "",
			},
			pualHeight: {
				type: [String, Number],
				default: 0,
			},
		},
		data() {
			return {
				userList: [{
					msg: '我通过了你的好友请求，现在我们可以开始私聊了。我通过了你的好友请求，现在我们可以开始私聊了。我通过了你的好友请求，现在我们可以开始私聊了。我通过了你的好友请求，现在我们可以开始私聊了。',
					cover: '/static/assets/myself/chatFirend/firend.jpg',
					isMe: false,
					}, {
					msg: '你好，我是来自地球的潘达',
					cover: '/static/assets/myself/chatFirend/me.jpg',
					isMe: true,
					}, {
					msg: '我来自木星',
					cover: '/static/assets/myself/chatFirend/firend.jpg',
					isMe: false,
					}, {
					msg: '男人来自火星女人来自金星这本书你也有读过么？',
					cover: '/static/assets/myself/chatFirend/me.jpg',
					isMe: true,
				}],
				lastMsgSide: 0,
			}
		},
		methods: {
			tapUser() {
				
			},
			seeFirend() {
				uni.navigateTo({
					url: "/pages/children/userHome?isFirend=" + 1
				})
			}
		},
		onReady() {
			let vm = this
			//console.log(vm.$req);
			/* vm.$req('getChatContent', {
				typeCode: 1,
				pageNo: 1,
				weChatSize: 20,
			}, data => {
				console.log(data)
			}) */
			
		},
		onLoad() {
			let vm = this
			vm.lastMsgSide = vm.userList.length * 100
		},
		watch: {
			reqmsg(value) {
				let vm = this,
					len = vm.userList.length + 1
				console.log(value)
				vm.userList.push({
					msg: value,
					cover: '/static/assets/myself/chatFirend/me.jpg',
					isMe: true,
				})
				vm.lastMsgSide = len * 100
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../static/config.less";
	.introduce {
		padding: 0 20upx;
		margin-top: 10upx;
		.wrapper {
			@{bdra}: 24upx;
			box-shadow: 1upx 2upx 10upx 2upx #bbb;
			padding: 28upx 60upx;
		}
		&-ct {
			@{fs}: 24upx;
			.item {
				display: flex;
				@{ai}: baseline;
				margin: 14upx 0;
				view {
					text-align: justify;
				}
			}
			.iconfont {
				color: #8e52b1;
				@{fs}: 18upx;
				margin-right: 10upx;
			}
		}
		&-nav {
			display: flex;
			@{ai}: center;
			@{jc}: space-around;
			@{fs}: 20upx;
			color: #eee;
			margin-bottom: 20upx;
			.progress-box {
				width: 160upx;
				height: 36upx;
				@{bdra}: 18upx;
				@{bgc}: #e6e6e6;
				position: relative;
				view {
					width: 92%;
					height: 36upx;
					@{bdra}: 18upx;
					@{bgi}: linear-gradient(to right, #8e52b2, #c86fa0);
					display: flex;
					@{ai}: center;
					@{jc}: center;
				}
			}
		}
	}
	image {
		width: 87upx;
		height: 87upx;
		border: 4upx solid transparent;
		@{bdra}: 50%;
	}
	.time {
		@{fs}: 20upx;
		color: #999;
		display: flex;
		@{jc}: center;
		padding: 16upx 0;
	}
	.ul {
		padding:0 20upx;
	}
	.li {
		display: flex;
		@{ai}: center;
		margin-bottom: 40upx;
		@{bdra}: 12upx;
		.cover {
			margin: 0 10upx;
			@{as}: flex-start;
		}
		.msg {
			@{fs}: 28upx;
			@{bdra}: 10upx;
			padding: 12upx 14upx;
			margin-top: 10upx;
			text-align: justify;
			max-width: 380upx;
		}
	}
	.firend {
		.msg {
			@{bgc}: #fff;
			box-shadow: 0 1upx 10upx 2upx #efefef;
		}
	}
	.me {
		@{fd}: row-reverse;
		@{as}: flex-end;
		.msg {
			@{bgc}: #f2f2f2;
			box-shadow: 0 1upx 10upx 2upx #eee;
		}
	}
</style>