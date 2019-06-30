<template>
	<view>
		<view class="content">
			<view class="micro"
			@tap="startMicro">
				<view class="iconfont icon-micro"></view>
			</view>
			<view class="input-area">
				<textarea maxlength="36" auto-height
				v-model="inputValue" 
				:show-confirm-bar="false"/>
				<view @tap="send">发送</view>
			</view>
			<view class="action-area">
				<view class="view iconfont icon-smell-face" @tap="checkFace"></view>
				<view class="view iconfont icon-add" @tap="sendImg"></view>
			</view>
		</view>
	</view>
	
</template>
<script>
	import {wsHost} from '@/extends/host'
	export default {
		data() {
			return {
				inputValue: "",
				isExtra: false,
				isMicro: false,
			}
		},
		methods: {
			/* sendMsg({value}) {
				let vm = this
				vm.$emit("resmsg", {msg: value})
				vm.inputValue = ""
			}, */
			send() {
				let vm = this,
					msg = vm.inputValue
				if(msg) {
					vm.$emit("resmsg", {msg})
					setTimeout(() => {
						vm.inputValue = ""
						// console.log(vm.inputValue)
					}, 100)
				}
				
			},
			startMicro() {
				uni.showToast({
					title: '语音功能开发中...',
					icon: 'none',
					duration: 1000,
				})
			},
			checkFace() {
				uni.showToast({
					title: '表情功能开发中...',
					icon: 'none',
					duration: 1000,
				})
			},
			sendImg() {
				uni.chooseImage({
					success(chooseImageRes) {
						const tempFilePaths = chooseImageRes.tempFilePaths
						let len = tempFilePaths.length,
							i = 0
						let uploadTask = uni.uploadFile({
							url: 'https://www.example.com/upload', 
							filePath: tempFilePaths[i],
							name: 'file',
							formData: {
								'user': 'test'
							},
							success(uploadFileRes) {
								console.log(uploadFileRes.data)
							}
						})
						uploadTask.onProgressUpdate(({progress}) => {
							// 监听上传进度
						})
					}
				})
			},
			hideExtra({target}) {
				let obj = target.dataset,
					vm = this
				if(!obj.act) {
					vm.isExtra = false
				} else {
					switch(obj.act) {
						case 'showExtra':
							vm.isExtra = true
						break
						case 'findVideo':
							 uni.chooseVideo({
								count: 1,
								sourceType: ['camera', 'album'],
								success: function (res) {
									console.log(res)
								}
							})
						break
						case 'findPhoto':
							uni.chooseImage({
								count: 6,
								sizeType: ['original', 'compressed'],
								sourceType: ['album'],
								success: function (res) {
									console.log(res)
								}
							})
						break
					}
				}
			},
		}
	}
</script>
<style lang="less" scoped>
	@import "../static/config.less";
	@import "../static/theme/components/chatSendBox.less";
	.input-area {
		position: relative;
		margin: 18upx 0;
		width: 460upx;
		view {
			width: 100upx;
			height: 60upx;
			@{bdra}: 30upx;
			display: flex;
			@{ai}: center;
			@{jc}: center;
			color: #fff;
			@{fs}: 24upx;
			position: absolute;
			right: -4upx;
			top: 50%;
			transform: translateY(-50%);
			@{bgc}: #4529a2;
		}
	}
	.content {
		min-height: 100upx;
		display: flex;
		@{ai}: center;
		@{jc}: space-between;
		@{bgc}: @wrapper-bg;
	}
	textarea {
		width: 360upx;
		padding: 8upx 14upx;
		@{bgc}: #fff;
		color: #333;
		@{fs}: 28upx;
		@{bdra}: 20upx;
	}
	.action-area {
		display: flex;
		@{jc}: space-around;
		@{ai}: center;
		width: 166upx;
		.iconfont {
			@{fs}: 40upx;
			color: @simple-token;
		}
		.view {
			width: 52upx;
			height: 52upx;
			@{bdra}: 50%;
			display: flex;
			@{ai}: center;
			@{jc}: center;
			@{bgc}: #fff;
		}
		.send-btn {
			@{fs}: 24upx;
			width: 80upx;
			height: 52upx;
			@{bdra}: 26upx;
			@{bgc}: @send-bg;
			color: #fff;
			display: flex;
			@{ai}: center;
			@{jc}: center;
			&:active {
				opacity: 0.8;
			}
		}
	}
	.micro {
		width: 90upx;
		height: 60upx;
		display: flex;
		@{ai}: center;
		@{jc}: center;
		.icon-micro {
			color: @mic-color;
			@{fs}: 40upx;
			@{bdra}: 50%;
			@{bgc}: #fff;
			width: 60upx;
			height: 60upx;
			display: flex;
			@{ai}: center;
			@{jc}: center;
		}
	}
	.extra {
		display: flex;
		padding: 14upx 20upx;
		@{bgc}: #fff;
		.li {
			display: flex;
			@{fd}: column;
			@{ai}: center;
			@{jc}: space-around;
			width: 70upx;
			height: 80upx;
			margin: 0 6upx;
		}
		.iconfont {
			@{fs}: 42upx;
		}
		.text {
			@{fs}: 20upx;
		}
	}
</style>