<template>
	<view class="content">
		<scroll-view scroll-y :scroll-top="lastMsgSide" :style="{height: pualHeight}">
			<view class="ul">
				<view class="li"
				v-for="(value, index) in userList"
				:key="index">
					<view class="cover" @tap="seeUser(value)">
						<image :src="value.cover" :class="['bd-' + value.sex]"></image>
					</view>
					<view @tap="jumpToChat(value)">
						<view class="info">
							<view class="iconfont" :class="['icon-' + value.sex, 'bg-' + value.sex]"></view>
							<view class="username" v-text="value.name"></view>
						</view>
						<view class="msg"
						:class="{'is-me': value.isMe}"
						v-text="value.msg"></view>
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
					name: '城市中的星星',
					sex: 'male',
					msg: '有没有小姐姐？？本人想交个朋友。',
					cover: '/static/assets/chatroom/user-head.png',
					isFirend: true,					
					}, {
					name: 'Linda',
					sex: 'female',
					msg: '在的，哈哈哈哈，你多大？',
					cover: '/static/assets/chatroom/user-head.png',
					isFirend: true,
					}, {
					name: '文文',
					sex: 'female',
					msg: '大家都在干嘛？',
					cover: '/static/assets/chatroom/user-head.png',
					}, {
					name: '土耳其的约会',
					sex: 'male',
					msg: '我在打游戏呢！有一起开黑的请扣我。',
					cover: '/static/assets/chatroom/user-head.png',
					}, {
					name: 'Eoll',
					sex: 'male',
					msg: '等下一起玩吧，我现在在门口，等一下。',
					cover: '/static/assets/chatroom/user-head.png',
					}, {
					name: '太撒旦了',
					sex: 'male',
					msg: '爱上幅度萨芬',
					cover: '/static/assets/chatroom/user-head.png',
					},  {
					name: '王若飞',
					sex: 'male',
					msg: '啊师傅挖方u我却认为。',
					cover: '/static/assets/chatroom/user-head.png',
					isMe: true,
					}, {
					name: 'Tell',
					sex: 'male',
					msg: '关于爱情，我们都腹黑。。。。。 ',
					cover: '/static/assets/chatroom/user-head.png',
				}],
				lastMsgSide: 0,
			}
		},
		methods: {
			tapUser() {
				
			},
			jumpToChat({name, isFirend, isMe}) {
				if(isFirend) {
					uni.navigateTo({
						url: '/pages/children/chatFirend?name=' + name,
					})
				} else if(!isMe){
					/* uni.showToast({
						title: '对方不是好友',
						duration: 800,
						icon: 'none',
					}) */
					// stranger chat
					uni.navigateTo({
						url: '/pages/children/chatFirend?name=' + name
					})
				} else {
					uni.showToast({
						title: '选中了自己',
						duration: 800,
						icon: 'none',
					})
				}
			},
			seeUser({isFirend}) {
				if(isFirend) {
					isFirend = 1
				} else {
					isFirend = 0
				}
				uni.navigateTo({
					url: '/pages/children/userHome?isFirend=' + isFirend
				})
			},
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
				// console.log(value)
				vm.userList.push({
					name: '爱无边界',
					sex: 'male',
					msg: value,
					cover: '/static/assets/user-head.png',
					isMe: true,
				})
				vm.lastMsgSide = len * 100
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../static/config.less";
	@import "../static/theme/components/chatRoom.less";
	image {
		width: 87upx;
		height: 87upx;
		border: 4upx solid transparent;
		@{bdra}: 50%;
		display: block;
	}
	.cover {
		margin-right: 10upx;
	}
	.ul {
		padding:40upx 0 10upx 50upx;
		
	}
	.li {
		.username,
		.iconfont,
		.msg {
			color: #fff;
		}
		.username,
		.msg {
			@{fs}: 20upx;
		}
		display: flex;
		margin-bottom: 60upx;
		.msg {
			@{bdra}: 10upx;
			@{bgc}: rgba(126, 206, 244, .3);
			padding: 16upx 12upx;
			margin-top: 10upx;
			text-align: justify;
			max-width: 400upx;
		}
		.is-me {
			@{bgc}: rgba(126, 206, 244, .9);
		}
		.info {
			display: flex;
			@{ai}: center;
			.iconfont {
				width: 30upx;
				height: 20upx;
				display: flex;
				@{jc}: center;
				@{fs}: 16upx;
				@{ai}: center;
			}
		}
	}
	.bg-male {
		@{bgc}: @male-color;
	}
	.bg-female {
		@{bgc}: @female-color;
	}
	.bd-male {
		border-color: @male-color;
	}
	.bd-female {
		border-color: @female-color;
	}
	.bg-male,
	.bg-female {
		@{bdra}: 6upx;
		margin-right: 4upx;
	}
</style>