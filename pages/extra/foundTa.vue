<template>
	<view class="pool" :style="{height: poolHeight}">
		<image class="bg-cover" src="/static/assets/findta/bg.jpg" mode="widthFix"></image>
		<image class="cover" src="/static/assets/findta/cover.png" mode="widthFix"></image>
		<view class="tip-text">寻Ta成功!</view>
		<view class="card">
			<view class="card-box">
				<view class="card-tt">Ta来自 湖南-长沙</view>
				<view class="card-nav">
					<image src="/static/assets/myfirends/firend-02.png"></image>
					<view class="card-nav-box">
						<view class="box-pool">
							<view>匹配度95%</view>
							<view class="progress">
								<view :style="{width: '80%'}"></view>
							</view>
						</view>
						<view class="box-pool">
							<view>共同标签</view>
							<view class="tags">
								<view>美食</view>
								<view>旅游</view>
								<view>摄影</view>
							</view>
						</view>
					</view>
					<image src="/static/assets/myfirends/firend-03.png"></image>
				</view>
				<view class="card-ct">
					<view class="card-ct-li">
						<view class="iconfont icon-dot"></view>
						<view>你们都是好看的90后.</view>
					</view>
					<view class="card-ct-li">
						<view class="iconfont icon-dot"></view>
						<view>跟ta聊聊，如果世界上任何地方任你挑选，你最想去的是那些地方？</view>
					</view>
					<view class="card-ct-li">
						<view class="iconfont icon-dot"></view>
						<view>与ta分享一下你最近身边有趣的人和事吧！</view>
					</view>
				</view>
			</view>
		</view>
		<view class="user-action">
			<view class="myfirend" v-if="isFriend">
				<view @tap="chatUser">发送消息</view>
			</view>
			<view class="stranger" v-else>
				<view class="iconfont icon-adduser" @tap="addUser">关注</view>
				<view class="iconfont icon-message" @tap="chatUserLittle">私聊</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				poolHeight: '603px',
				isFriend: false,
			}
		},
		onLoad(opitons) {
			
		},
		methods: {
			chatUser() {
				// 好友直接聊天
				uni.navigateTo({
					url: '/pages/children/chatFirend'
				})
			},
			addUser() {
				// 添加用户
				uni.showModal({
					content: '确定添加xxx为好友么',
					success() {
						uni.showToast({
							title: '添加成功',
							duration: 900,
						})
					},
					fail() {
						uni.showToast({
							title: '已取消添加',
							duration: 900,
							icon: 'none',
						})
					}
				})
			},
			chatUserLittle() {
				// stranger chat
				uni.navigateTo({
					url: '/pages/children/chatFirend?name=' + 'stranger'
				})
			},
		},
		onReady() {
			let vm = this
			uni.getSystemInfo({
				success({pixelRatio, screenHeight, windowHeight}) {
					// top 即header占据的空间高度(绝对值)
					vm.poolHeight = windowHeight + 'px'
				},
			})
		},
	}
</script>
<style lang="less" scoped>
	@import "../../static/config.less";
	.pool {
		position: relative;
		overflow: hidden;
	}
	.card {
		position: absolute;
		bottom: 160upx;
		left: 0;
		width: 750upx;
		display: flex;
		@{jc}: center;
		&-ct {
			padding: 10upx 26upx 0;
			&-li {
				display: flex;
				@{ai}: baseline;
				@{fs}: 20upx;
				margin-top: 20upx;
				.iconfont {
					@{fs}: 10upx;
					display: flex;
					margin-right: 14upx;
					transform: translateY(-50%);
				}
			}
		}
		&-nav {
			display: flex;
			@{jc}: center;
			@{fs}: 24upx;
			.box-pool {
				display: flex;
				@{fd}: column;
				@{ai}: center;
				.tags {
					display: flex;
					@{fw}: wrap;
					view {
						padding: 6upx 14upx;
						@{bgc}: #0f0340;
						@{bdra}: 24upx;
						margin: 8upx 10upx;
						@{fs}: 20upx;
					}
				}
				.progress {
					width: 150upx;
					height: 10upx;
					position: relative;
					@{bgc}: #fff;
					margin: 8upx 0 16upx;
					&,
					view {
						@{bdra}: 5upx;
					}
					view {
						@{bgc}: #02abc9;
						position: absolute;
						left: 0;
						top: 0;
						height: 10upx;
					}
				}
			}
			&-box {
				width: 320upx;				
			}
		}
		&-tt {
			@{fs}: 28upx;
			display: flex;
			@{jc}: center;
			margin-bottom: 30upx;
		}
		&-box {
			width: 690upx;
			@{bdra}: 20upx;
			padding: 24upx 0;
			@{bgc}: #13005a;
			color: #eee;
			image {
				width: 120upx;
				height: 120upx;
				@{bdra}: 50%;
			}
		}
	}
	.tip-text {
		position: absolute;
		top: 96upx;
		left: 0;
		width: 750upx;
		text-align: center;
		@{fs}: 34upx;
		color: #fff;
		word-spacing: 4upx;
	}
	.bg-cover,
	.cover {
		width: 750upx;
		position: absolute;
		left: 0;
		top: 0;
		z-index: -1;
	}
	.cover {
		top: 270upx;
		z-index: 0;
	}
	.user-action {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 750upx;
		height: 100upx;
		@{bgc}: #000;
		display: flex;
		@{ai}: center;
		.myfirend,
		.stranger {
			flex: 1;
			display: flex;
			height: 80upx;
			view {
				display: flex;
				@{ai}: center;
				@{jc}: center;
				@{bgc}: #4529a2;
				@{bdra}: 40upx;
			}
			&,
			.iconfont {
				@{fs}: 28upx;
				color: #fff;
			}
			.iconfont {
				margin-right: 10upx;
			}
		}
		.stranger {
			@{jc}: space-around;
			view {
				width: 280upx;
			}
		}
		.myfirend {
			@{jc}: center;
			view {
				width: 598upx;
			}
		}
	}
</style>
