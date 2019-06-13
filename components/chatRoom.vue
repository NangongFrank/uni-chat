<template>
	<view  @tap="showFileFace">
		<scroll-view class="ul" scroll-y :scroll-top="topSide">
			<view class="li">
				<block v-for="(value, index) in otherUser" :key="index">
					<view class="li-other" v-if="value.type == 'none'">
						<view class="cover" data-act="userAction">
							<image src="/static/assets/user-head.png" data-act="userAction"></image>
						</view>
						<view class="ct" data-act="chatUser">
							<view class="ct-name" v-text="value.username" data-act="chatUser"></view>
							<view class="ct-ct" v-text="value.ct" data-act="chatUser"></view>
						</view>
					</view>
					<view class="li-other" v-else>
						<view class="cover" data-act="myUserAction">
							<image src="/static/assets/user-head.png" data-act="myUserAction"></image>
						</view>
						<view class="ct" data-act="myChatUser">
							<view class="ct-name" v-text="value.username" data-act="myChatUser"></view>
							<view class="ct-ct" v-text="value.ct" data-act="myChatUser"></view>
						</view>
					</view>
				</block>
				<view class="user-self" v-for="(value, index) in selfUser" :key="index">
					<view class="li-self" v-text="value.ct" v-if="value.type == 'text'"></view>
					<view class="li-self iconfont icon-user-voice" 
					v-if="value.type == 'voice'"
					@tap="playVoice(value, index)">
						<text v-if="value.status"></text>
					</view>
					<view class="li-self" v-if="value.type == 'img'">
						<image :src="value.path" model="widthFix" @tap="previewImg(value.path)"></image>
					</view>
					<view class="li-self" v-if="value.type == 'video'">
						<video :src="value.path" controls></video>
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="padding-70"></view>
		<view class="user-input">
			<view class="user-input-top">
				<view class="user-input-check">
					<view class="iconfont icon-voice" 
					v-if="isInput"
					@tap="isInput = false"></view>
					<view class="iconfont icon-keyboard" 
					v-else
					@tap="isInput = true"></view>
				</view>
				<view class="user-input-action">
					<input v-model="userCacheText" v-if="isInput" placeholder="输入内容..." confirm-type="send" @confirm="sendEvent"/>
					<text v-else @touchstart="startVoice" @longpress="continueVoice" @touchend="stopVoice">按住说话</text>
				</view>
				<view class="user-input-extra">
					<text class="iconfont icon-smile-face" data-act="face"></text>
					<text class="iconfont icon-add-item" data-act="file"></text>
				</view>	
			</view>
			<view class="user-input-bottom">
				<view v-if="isFace">
					这是表情
				</view>
				<view v-if="isFile">
					<view class="now-file">
						<view class="iconfont icon-image" @tap="chooseImg">
							<text>相册</text>
						</view>
						<view class="iconfont icon-video" @tap="chooseVideo">
							<text>视频</text>
						</view>
						<!-- #ifdef MP-WEIXIN -->
						<view class="iconfont icon-camera" @tap="cameraAction('photo')">
							<text>拍照</text>
						</view>
						<view class="iconfont icon-camera" @tap="cameraAction('video')">
							<text>录像</text>
						</view>
						<!-- #endif -->
					</view>
				</view>
			</view>
		</view>		
	</view>
</template>
<script>
	export default {
		data() {
			return {
				selfUser: [{
					type: 'text',
					ct: "用户自己的话示例"
				}, {
					type: 'voice',
					path: '',
					long: '10'
				}],
				otherUser: [{
					type: 'none',
					username: 'zhang',
					ct: "我是一段有着特殊意义的标志性文本"
				}, {
					type: 'our',
					username: 'lisi',
					ct: "i am friend"
				}],
				isInput: true,
				userCacheText: "",
				isFile: false,
				isFace: false,
				topSideCache: 0,
				topSide: 0,
				voiceObj: {},
				voicePlayer: {},
				voiceStatus: false,
				voicePath: '',
				cameraObj: {},
			}
		},
		onReady() {
			let vm = this
			vm.voiceObj = uni.getRecorderManager()
			vm.voicePlayer = uni.createInnerAudioContext()
			// #ifdef MP-WEIXIN
			vm.cameraObj = uni.createCameraContext()
			// #endif
		},
		methods: {
			sendEvent({detail}) {
				let vm = this
				vm.selfUser.push({ct: detail.value})
				vm.userCacheText = ""				
			},
			showFileFace(e) {
				let vm = this,
					dataset = e.target.dataset,
					tag = dataset ? dataset.act : ''
				switch(tag) {
					case "face":
						vm.isFace = true
						vm.isFile = false
					break
					case 'file':
						vm.isFile = true
						vm.isFace = false
					break
					case 'userAction':
					case 'chatUser':
						uni.navigateTo({
							url: "/pages/user/userAction"
						})
					break
					case 'myChatUser':
					case 'myUserAction':
						uni.navigateTo({
							url: "/pages/user/" + tag
						})
					break
					default:
						vm.isFace = false
						vm.isFile = false
				}
			},
			startVoice() {
				let vm = this
					vm.voiceStatus = false
			},
			stopVoice() {
				let vm = this
				if(!vm.voiceStatus) {
					uni.showToast({
						duration: 800,
						title: "录音时间太短",
						icon: "none"
					})
				}
				vm.voiceObj.stop()
				vm.voiceObj.onStop(({tempFilePath}) => {
					vm.voicePath = tempFilePath
					vm.selfUser.push({
						type: 'voice',
						path: tempFilePath,
						status: true,
					})
				})
				vm.voiceStatus = false
			},
			continueVoice() {
				let vm = this
					vm.voiceStatus = true
				vm.voiceObj.start()
			},
			playVoice(value, index) {
				let vm = this,
					path = value.path,
					status = value.status
				vm.voicePlayer.src = path
				vm.voicePlayer.play()
			},
			chooseImg() {
				let vm = this
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], 
					sourceType: ['album'],
					success({tempFiles}) {
						let len = tempFiles.length
						if(len > 1) {
							let old = vm.selfUser,
								arr = tempFiles.map((value) => {
									value.type = 'img'
									return value
								})
							vm.selfUser = vm.selfUser.concat(arr)
							console.log(vm.selfUser);
						} else {
							vm.selfUser.push({
								type: 'img',
								path: tempFiles[0].path
							})
						}
					}
				})
			},
			previewImg(src) {
				uni.previewImage({
					urls: [src],
				})
			}, 
			chooseVideo() {
				let vm = this
				uni.chooseVideo({
					count: 1,
					sourceType: ['album'],
					success({tempFilePath}) {
						vm.selfUser.push({
							type: 'video',
							path: tempFilePath,
						})
					}
				})
			},
			cameraAction(type) {
				let vm = this
				// #ifdef MP-WEIXIN
				if(type == 'video') {
					vm.cameraObj.startRecord({
						
					})
					vm.cameraObj.stopRecord({
						success({tempThumbPath, tempVideoPath}) {
							
						}
					})
				} else {
					vm.cameraObj.takePhoto({
						quality: "normal",
						success({tempImagePath}) {
							console.log(tempImagePath);
						}
					})
				}
				// #endif
			},
		}	
	}
</script>
<style lang="less" scoped>
	@import "../static/config";
		.cover {
		image {
			width: 80upx;
			height: 80upx;
		}
	}
	.user-input {
		min-height: 60upx;
		border-top: 2upx solid #ccc;
		@{bgc}: #fff;
		padding: 10upx 20upx;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 750upx;
		&-top {
			display: flex;
		}
		&-bottom {
			.now-file {
				display: flex;
				padding: 10upx 20upx;
				view {
					width: 100upx;
					height: 100upx;
					border: 2upx solid #ccc;
					@{bdra}: 6upx;
					margin: 10upx 8upx;
					@{fs}: 60upx;
					display: flex;
					@{fd}: column;
					@{ai}: center;
					@{jc}: center;
					text {
						@{fs}: 24upx;
					}
				}
			}
		}
		&-check,
		&-action,
		&-extra {
			display: flex;
			.iconfont {
				@{fs}: 50upx;
			}
		}
		&-check {
			width: 100upx;
			@{ai}: center;
			@{jc}: center;
		}
		&-extra {
			width: 140upx;
			@{jc}: space-around;
			@{ai}: center;
			padding-right: 40upx;
			text:active {
				@{bgc}: #ddd;
			}
		}
		&-action {
			flex: 1;
			padding: 10upx 20upx;
			display: flex;
			text:active {
				@{bgc}: #ddd;
			}
			textarea {
				width: 400upx;
				min-height: 60upx;
			}
			text {
				display: flex;
				@{ai}: center;
				@{jc}: center;
			}
			text {
				flex: 1;
			}
		}
	}
	.li {
		padding: 10upx 20upx;
		.user-self {
			display: flex;
			@{jc}: flex-end;
		}
		&-other {
			display: flex;
		}
		&-self {
			display: inline-block;
			@{fs}: 30upx;
			@{bdra}: 12upx;
			padding: 10upx 20upx;
			margin: 5upx 0;
			@{bgc}: #409eff;
			color: #fff;
			image {
				width: 400upx;
			}
		}
		.ct {
			flex: 1;
			width: 690upx;
			padding: 0 10upx;
			&-name {
				@{fs}: 32upx;
				font-weight: 900;
			}
			&-ct {
				@{fs}: 28upx;
				text-align: justify;
			}
		}
	}

</style>
