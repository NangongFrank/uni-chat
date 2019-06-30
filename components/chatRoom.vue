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
	import {friendIsFriend} from '@/extends/host'
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
				userList: [],
				lastMsgSide: 0,
				userData: {
					userInfo: {
						avatarUrl: '/static/assets/user-head.png',
					}
				},
				myClientId: '',
			}
		},
		methods: {
			tapUser() {
				
			},
			jumpToChat({openid, isMe, clientId, name}) {
				// 请求服务器，用户是否是好友
				let vm = this
				uni.request({
					method: 'post',
					url: friendIsFriend,
					data: {
						findOpenId: vm.openid,
						foundOpenId: openid,
					}
				}).then(([err, {data}]) => {
					if(data.state) {
						uni.navigateTo({
							url: '/pages/children/chatFirend?name=' + name + '&tagClientId=' + clientId,
						})
					} else if(!isMe){
						// stranger chat
						uni.navigateTo({
							url: '/pages/children/chatFirend?name=' + name + '&tagClientId=' + clientId,
						})
					} else {
						uni.showToast({
							title: '选中了自己',
							duration: 800,
							icon: 'none',
						})
					}
				})
			},
			seeUser({openid, isMe, clientId, name}) {
				let vm = this
				uni.getStorage({
					key: 'myOpenId',
				}).then(([err, {data}]) => {
					uni.request({
						method: 'post',
						url: friendIsFriend,
						data: {
							findOpenId: data,
							foundOpenId: openid,
						}
					}).then(([err, {data}]) => {
						if(isMe) {
							uni.navigateTo({
								url: '/pages/extra/myself'
							})
						} else {
							uni.navigateTo({
								url: '/pages/children/userHome?isFriend=' + data.state + '&clientId=' + clientId + '&openid=' + openid
							})
						}
					})
				})
			},
		},
		onReady() {
			let vm = this,
				len = vm.userList.length + 1
			uni.getStorage({
				key: 'userData',
			}).then(([err, {data}]) => {
				vm.userData = data
			})
			uni.onSocketMessage(({data}) => {
				data = JSON.parse(data)
				switch(data.type) {
					case 'nowClient':
						vm.myClientId = data.clientId
					case 'saidAll':
						if(data.clientId == vm.myClientId) {
							data.isMe = true
						}
						vm.userList.push(data)
						len = vm.userList.length + 1
						vm.lastMsgSide = len * 100					
				}
			})
		},
		onShow() {
			let vm = this
			uni.sendSocketMessage({
				data: JSON.stringify({type: 'nowClient'}),
			})
		},
		onLoad() {
			let vm = this
			vm.lastMsgSide = vm.userList.length * 100
		},
		watch: {
			reqmsg(value) {
				let vm = this,
					cover = vm.userData.userInfo.avatarUrl,
					sex = vm.userData.userInfo.gender,
					name = vm.userData.userInfo.nickName
				if(sex == 1) {
					sex = 'male'
				} else {
					sex = 'female'
				}
				uni.getStorage({
					key: 'myOpenId',
				}).then(([err, {data}]) => {
					let openid = data
					data = {
						type: 'saidAll',
						name,
						sex,
						msg: value,
						cover,
						myclientid: vm.clientId,
						openid: openid,
					}
					console.log(data)
					uni.sendSocketMessage({
						data: JSON.stringify(data)
					})
				})			
			}
		},
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