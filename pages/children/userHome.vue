<template>
	<view class="wrapper" :style="{'min-height': pageMinHeight}">
		<!-- <view class="header">
			<nav-header 
			:center-status="false" 
			:right-status="false" 
			:left-model="'textBackStep'"
			:back-step-path="'/pages/index/index'"
			:action-name="'返回'"/>
		</view> -->
		<scroll-view scroll-y :style="{'height': viewMinHeight}">
			<view class="box">
				<view class="box-nav">
					<!-- <view class="box-nav-action">
						<view>匿名模式</view>
						<switch checked @change="navModelChange" />
					</view>
					<view class="box-nav-wast" @tap="wastMoney">
						<view>充值</view>
						<view class="iconfont icon-delta-right"></view>
					</view> -->
				</view>
				<view class="box-aside">
					<view class="box-aside-cover">
						<view class="cover">
							<image src="/static/assets/myself/user-head.png"></image>
						</view>
						<!-- <view class="cash">余额88</view> -->
					</view>
					<view class="box-aside-info">
						<view class="name">
							<view class="user-name">ALEX</view>
							<!-- <navigator url="#" class="iconfont icon-edit-pen"></navigator> -->
							<view class="sex iconfont"
							:class="['icon-' + 'female', 'bg-' + 'female']"></view>
						</view>
						<!-- <view class="tip">信书1级</view> -->
					</view>
				</view>
				<!-- <view class="box-footer">这家伙很懒，什么都没有留下</view> -->
				<view class="box-tags">
					<view class="box-tags-tt">我的标签:</view>
					<view class="box-tags-ct">
						<view class="item"
						v-for="(value, index) in tags"
						:key="index"
						v-text="value.value"></view>
					</view>
				</view>
			</view>
			<view class="extra">
				<view class="extra-vip">
					<view class="extra-vip-info">
						<view class="iconfont icon-vip"></view>
						<view class="vip-tip">开通VIP</view>
					</view>
					<view class="iconfont icon-column-line" style="color: #fff;"></view>
					<navigator url="#" class="extra-vip-tip">
						查看VIP的尊贵的特权
					</navigator>
				</view>
				<!-- <view class="extra-barrage">
					<view class="extra-barrage-title">
						<view class="iconfont icon-mail"></view>
						<view class="barrage">弹幕信息</view>
					</view>
					<view class="extra-barrage-wrapper">
						<view class="li"
						v-for="(value, index) in barrageList"
						:key="index">
							<view v-text="value.msg"></view>
						</view>
					</view>
				</view> -->
				<!-- <view class="extra-screen">
					<view class="extra-screen-title">
						<view class="iconfont icon-small-bell"></view>
						<view class="screen">霸屏信息</view>
					</view>
					<view class="extra-screen-content">
						<view class="li"
						v-for="(value, index) in screenList"
						:key="index">
							<view class="msg" v-text="value.msg"></view>
							<view class="cover">
								<image :src="value.cover"></image>
							</view>
						</view>
					</view>
				</view> -->
				<view class="extra-adjust">
					<navigator url="#" class="extra-adjust-title">
						<view class="iconfont icon-pen"></view>
						<view class="adjust">意见反馈</view>
					</navigator> 
				</view>
			</view>
			<view class="user-action">
				<view class="myfirend" v-if="isFirend">
					<view @tap="chatUser">发送消息</view>
				</view>
				<view class="stranger" v-else>
					<view class="iconfont icon-adduser" @tap="addUser">添加</view>
					<view class="iconfont icon-message" @tap="chatUserLittle">私聊</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>
<script>
	// import navHeader from '@/components/navHeader'
	export default {
		data() {
			return {
				viewMinHeight: 0,
				pageMinHeight: 0,
				isFirend: false,
				tags: [{
					value: '90后'
					}, {
					value: '美术'
					}, {
					value: '运动'
					}, {
					value: '电影'
					}, {
					value: '电影'
					}, {
					value: '电影'
					}, {
					value: '电影'
				}],
				barrageList: [{
					msg: '床前明月光',
					}, {
					msg: '地下鞋两双....',
					}, {
					msg: '黑云压城城欲摧',
					}, {
					msg: '甲光向日金鳞开。。。',
				}],
				screenList: [{
					msg: '霸屏30秒',
					cover: '/static/assets/myself/screen.png',
					},{
					msg: '霸屏30秒',
					cover: '/static/assets/myself/screen.png',
					},{
					msg: '霸屏30秒',
					cover: '/static/assets/myself/screen.png',
					},{
					msg: '霸屏30秒',
					cover: '/static/assets/myself/screen.png',
				}],
			}
		},
		components: {
			//navHeader,
		},
		onLoad({isFirend, delta}) {
			this.isFirend = isFirend
			console.log(delta)
		},
		methods: {
			navModelChange({detail}) {
				console.log(detail)
			},
			wastMoney() {
				uni.showToast({
					title: '功能暂未开放',
					duration: 800,
					icon: 'none',
				})
			},
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
				success({pixelRatio, screenHeight}) {
					// top 即header占据的空间高度(绝对值)
					const top = 64
					let height = 0,
						hei = 0
					// #ifdef MP-WEIXIN
					height = screenHeight
					hei = screenHeight - top
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
	@import "../../static/theme/extra/myself.less";
	switch {
		transform: scale(0.6);
	}
	.wrapper {
		@{bgc}: @wrapper-bg;
	}
	.user-action {
		position: absolute;
		bottom: 98upx;
		left: 0;
		width: 750upx;
		padding: 20upx 0;
		.myfirend,
		.stranger {
			display: flex;
			height: 80upx;
			padding: 0 70upx;
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
				margin-right: 8upx;
			}
		}
		.stranger {
			@{jc}: space-between;
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
	.extra {
		display: flex;
		@{ai}:center;
		@{fd}: column;
		&-adjust {
			width: 710upx;
			min-height: 110upx;
			@{bgc}: @extra-adjust-bg;
			@{bdra}: 30upx;
			&-title {
				display: flex;
				@{ai}: center;
				padding: 50upx 50upx 30upx 50upx;
				.iconfont {
					@{bgc}: @extra-adjust-title-color;
					width: 42upx;
					height: 42upx;
					@{fs}: 30upx;
					line-height: 42upx;
					text-align: center;
					@{bdra}: 50%;
					margin-right: 10upx;
				}
				.adjust {
					color: @extra-adjust-title-color;
					@{fs}: 28upx;
				}
			}
		}
		&-screen {
			width: 710upx;
			min-height: 380upx;
			@{bgc}: @extra-screen-bg;
			@{bdra}: 30upx;
			margin: 48upx 0;
			&-content {
				image {
					width: 140upx;
					height: 140upx;
					@{bdra}: 0 0 12upx 12upx;
				}
				display: flex;
				@{jc}: space-around;
				.li,
				.msg {
					@{bdra}: 12upx 12upx 0 0;
				}
				.msg {
					@{fs}: 16upx;
					@{bgc}: @extra-screen-msg-bg;
					padding-left: 8upx;
					display: flex;
					@{ai}: center;
				}
			}
			&-title {
				display: flex;
				@{ai}: center;
				padding: 50upx 50upx 30upx 50upx;
				.iconfont {
					color: @extra-screen-title-color;
					@{fs}: 46upx;
					margin-right: 10upx;
				}
				.screen {
					color: @extra-screen-title-color;
					@{fs}: 28upx;
				}
			}
		}
		&-barrage {
			width: 710upx;
			min-height: 310upx;
			@{bgc}: @extra-barrage-bg;
			@{bdra}: 30upx;
			&-wrapper {
				padding: 0 50upx 30upx;
				display: flex;
				@{fw}: wrap;
				.li {
					margin: 10upx 16upx;
					padding: 20upx 30upx;
					@{fs}: 24upx;
					@{bdra}: 38upx;
					max-width: 280upx;
					.word-online();
					color: @extra-barrage-content-color;
					@{bgc}: @extra-barrage-content-bg;
				}
			}
			&-title {
				display: flex;
				@{ai}: center;
				padding: 50upx 50upx 30upx 50upx;
				.iconfont {
					@{bgc}: @extra-barrage-title-color;
					width: 42upx;
					height: 42upx;
					@{fs}: 30upx;
					line-height: 42upx;
					text-align: center;
					@{bdra}: 50%;
					margin-right: 10upx;
				}
				.barrage {
					color: @extra-barrage-title-color;
					@{fs}: 28upx;
				}
			}
		}
		&-vip {
			margin: 38upx 0;
			width: 690upx;
			height: 68upx;
			@{bdra}: 30upx;
			@{bgc}: @extra-vip-bg;
			display: flex;
			@{ai}: center;
			@{jc}: space-around;
			@{fs}: 32upx;
			.vip-tip {
				color: @extra-vip-tip-color;
				margin-left: 10upx;
			}
			&-info,
			&-tip {
				display: flex;
				@{ai}: center;
			}
			.iconfont,
			&-tip {
				color: @extra-vip-simple-color;
			}
		}
	}
	.box {
		// min-height: 508upx;
		min-height: 420upx;
		@{bgi}: linear-gradient(to bottom, @box-nav-start-bg, @box-nav-end-bg);
		padding: 30upx 0 0 10upx;
		color: @simple-font-color;
		&-tags {
			padding: 10upx 50upx;
			@{fs}: 28upx;
			color: #fff;
			display: flex;
			@{ai}: baseline;
			&-tt {
				width: 180upx;
			}
			&-ct {
				display: flex;
				@{fw}: wrap;
				.item {
					margin: 0 0 20upx 20upx;
				}
			}
			navigator {
				margin-left: 30upx;
			}
		}
		&-footer {
			display: flex;
			@{ai}: center;
			@{jc}: center;
			padding: 40upx 0;
			@{fs}: 24upx;
		}
		&-aside {
			display: flex;
			@{ai}: center;
			@{jc}: center;
			padding: 40upx 0;
			&-cover {
				margin-right: 12upx;
				position: relative;
				.cash {
					position: absolute;
					left: -70upx;
					bottom: -30upx;
					@{bgi}: linear-gradient(to right, @cash-start-bg, @cash-end-bg);
					padding: 14upx 20upx;
					@{bdra}: 30upx;
					color: #fff;
					@{fs}: 28upx;
				}
			}
			
			&-info {
				display: flex;
				@{fd}: column;
				.name {
					display: flex;
				}
				.user-name,
				navigator {
					@{fs}: 36upx;
				}
				.user-name,
				.iconfont {
					color: #fff;
				}
				navigator {
					padding: 0 12upx;
				}
				.tip {
					@{fs}: 28upx;
					margin-top: 12upx;
				}
				.sex {
					@{bdra}: 50%;
					width: 40upx;
					height: 40upx;
					@{fs}: 30upx;
					line-height: 40upx;
					text-align: center;
					margin-left: 10upx;
				}
			}
			.cover {
				width: 180upx;
				height: 180upx;
				display: flex;
				@{ai}: center;
				@{jc}: center;
				border: 2upx solid transparent;
				border-top-color: @bdc-01;
				border-right-color: @bdc-02;
				border-bottom-color: @bdc-01;
				border-left-color: @bdc-04;
			}
			image {
				width: 168upx;
				height: 168upx;
			}
			image,
			.cover {
				@{bdra}: 50%;
			}
		}
		&-nav {
			padding-left: 52upx;
			display: flex;
			@{jc}: space-between;
			@{ai}: center;
			&-action {
				display: flex;
				@{ai}: center;
				view {
					margin-right: 12upx;
					@{fs}: 24upx;
				}
			}
			&-wast {
				display: flex;
				@{ai}: center;
				@{jc}: flex-end;
				width: 92upx;
				height: 36upx;
				@{bgc}: @wast-bg;
				@{bdra}: 18upx 0 0 18upx;
				@{fs}: 22upx;
				padding-right: 10upx;
				.iconfont {
					@{fs}: 20upx;
				}
				&,
				.iconfont {
					color: @wast-color;
				}
			}
		}
	}
	.bg-female {
		@{bgc}: @bg-female;
	}
	.bg-male {
		@{bgc}: @bg-male;
	}
</style>