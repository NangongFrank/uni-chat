<template>
	<view @tap="hideExtra">
		<view class="content">
			<view class="micro">
				<view class="iconfont icon-micro"></view>
			</view>
			<view class="input-area">
				<textarea maxlength="36" v-model="inputValue" value="" auto-height show-confirm-bar @confirm="sendMsg"/>
			</view>
			<view class="action-area">
				<view class="view iconfont icon-smell-face"></view>
				<view class="send-btn" @tap="send" v-if="inputValue.length > 0">发送</view>
				<view class="view iconfont icon-add" v-else data-act="showExtra"></view>
			</view>
		</view>
		<view class="extra" v-if="isExtra">
			<view class="li" data-act="findPhoto">
				<view class="iconfont icon-photo"></view>
				<view class="text">照片</view>
			</view>
			<view class="li" data-act="findVideo">
				<view class="iconfont icon-video"></view>
				<view class="text">视频</view>
			</view>
		</view>
	</view>
	
</template>
<script>
	export default {
		data() {
			return {
				inputValue: "",
				isExtra: false,
			}
		},
		methods: {
			sendMsg({value}) {
				let vm = this
				vm.$emit("resmsg", {msg: value})
				vm.inputValue = ""
			},
			send() {
				let vm = this,
					msg = vm.inputValue
				vm.$emit("resmsg", {msg})
				vm.inputValue = ""
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
			sendRequest() {
				let vm = this
				vm.$req('sendChatContent', {
					userId: 0,
					typeCode: 0,
					content: '',
					files: '',  // source
				}, data => {
					
				})
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../static/config.less";
	@import "../static/theme/components/chatSendBox.less";
	.content {
		min-height: 100upx;
		display: flex;
		@{ai}: center;
		@{jc}: space-between;
		@{bgc}: @wrapper-bg;
		padding: 0 10upx;
	}
	.input-area {
		padding: 30upx 14upx;
		textarea {
			width: 480upx;
			@{bgc}: #fff;
			color: #333;
			padding: 14upx 20upx;
			@{bdra}: 20upx;
		}
	}
	.action-area {
		display: flex;
		@{jc}: space-between;
		@{ai}: center;
		width: 136upx;
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
			@{fs}: 20upx;
			width: 65upx;
			height: 40upx;
			@{bdra}: 20upx;
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
	.icon-micro {
		color: @mic-color;
		@{fs}: 40upx;
	}
	.micro {
		@{bgc}: #fff;
		@{bdra}: 50%;
		width: 60upx;
		height: 60upx;
		display: flex;
		@{ai}: center;
		@{jc}: center;
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