<template>
	<view class="wrapper" :style="{'min-height': pageMinHeight}">
		<scroll-view scroll-y :style="{'height': viewMinHeight}">
			<view class="box">
				<view class="box-aside">
					<view class="box-aside-cover">
						<view class="cover">
							<image src="/static/assets/myself/user-head.png"></image>
						</view>
					</view>
					<view class="box-aside-info">
						<view class="name">
							<view class="user-name">ALEX</view>
							<view class="sex iconfont"
							:class="['icon-' + 'female', 'bg-' + 'female']"></view>
						</view>
					</view>
				</view>
				<view class="box-tags">
					<view class="box-tags-tt">
						<view class="iconfont icon-my-tag"></view>
						<view>Ta的标签</view>
					</view>
					<view class="box-tags-ct">
						<view class="item"
						v-for="(value, index) in tags"
						:key="index"
						v-text="value.value"></view>
 					</view>
				</view>
			</view>
			<view class="extra">
				<view class="extra-active">
					<view class="m-left"></view>
					<view class="m-right">
						<view class="m-text-box"
						v-for="(value, index) in userActive"
						:key="index">
							<view class="tip-info">
								<view class="time" v-text="value.time"></view>
								<view class="weather" v-text="value.weather"></view>
							</view>
							<view class="tip-ct">
								<view class="li" v-for="(val, ind) in value.text"
								:key="ind"
								v-text="val"></view>
							</view>
							<view class="tip-media" v-if="value.imgs.length">
								<image v-for="(val, ind) in value.imgs"
								:key="ind"
								:src="val"></image>
								<!-- 图片不足3张处理方法 添加空元素 -->
								<view v-if="value.imgs.length % 3 == 2"></view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
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
				viewMinHeight: 0,
				pageMinHeight: 0,
				isFriend: false,
				userActive: [{
					time: '2019-06-18 12:38:42',
					weather: '晴',
					text: ['想吃鱼~', '酸菜鱼~', '水煮鱼~', '剁椒鱼头~'],
					imgs: [],
					}, {
					time: '2019-06-17 12:38:42',
					weather: '晴',
					text: ['希望自己真的可以过得很好...'],
					imgs: ['/static/assets/findta/runner.jpg', '/static/assets/findta/bird.jpg', '/static/assets/findta/screen.jpg'],
					}, {
					time: '2019-06-16 12:38:42',
					weather: '多云',
					text: ['人可以有傲骨，但不可以有傲气'],
					imgs: ['/static/assets/findta/runner.jpg', '/static/assets/findta/screen.jpg'],
					}, {
					time: '2019-06-15 12:38:42',
					weather: '多云',
					text: ['人生自古谁无死, 留取丹心照汗心...'],
					imgs: ['/static/assets/findta/runner.jpg'],
				}],
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
			}
		},
		onLoad({isFriend, delta}) {
			this.isFriend = isFriend
			console.log(arguments)
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
				success({windowHeight}) {
					// top 即header占据的空间高度(绝对值)
					vm.poolHeight = windowHeight + 'px'
					vm.viewMinHeight = windowHeight - 50 + 'px';
				},
			})
		},
	}
</script>
<style lang="less" scoped>
	@import '../../static/config.less';
	@import "../../static/theme/extra/userHome.less";
	switch {
		transform: scale(0.6);
	}
	.wrapper {
		@{bgc}: @wrapper-bg;
	}
	.user-action {
		position: fixed;
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
	.extra {
		padding: 0 20upx;
		color: #eee;
		&-active {
			display: flex;
			margin-top: 20upx;
			.m-left {
				width: 38upx;
				display: flex;
				@{fd}: column;
				@{ai}: center;
				padding-top: 40upx;
				&::before {
					content: "";
					flex: 1;
					width: 2upx;
					@{bgc}: #a4a4a4;
				}
			}
			.m-text-box {
				flex: 1;
				margin-bottom: 20upx;
				@{bgc}: #13005a;
				@{bdra}: 12upx;
				padding: 20upx;
			}
			.tip-info {
				position: relative;
				display: flex;
				@{ai}: baseline;
				&::after,
				&::before {
					position: absolute;
					top: 10upx;
					content: "";
					display: block;
				}
				&::before {
					border: 12upx solid transparent;
					border-right-color: #13005a;
					left: -40upx;
				}
				&::after {
					left: -50upx;
					width: 24upx;
					height: 24upx;
					@{bdra}: 50%;
					@{bgc}: #ffc72d;
				}
			}
			.m-right {
				@{bdra}: 12upx;
				flex: 1;
				.time {
					@{fs}: 20upx;
				}
				.weather {
					margin-left: 10upx;
					@{fs}: 24upx;
				}
				.li {
					@{fs}: 24upx;
					margin-top: 14upx;
				}
				.tip-media {
					margin-top: 14upx;
					display: flex;
					@{jc}: space-between;
					view {
						width: 200upx;
						height: 200upx;
					}
				}
				image {
					width: 200upx;
					height: 200upx;
				}
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
			@{fd}: column;
			&-tt {
				display: flex;
				@{ai}: center;
				@{fs}: 24upx;
				.iconfont {
					@{fs}: 34upx; 
					margin-right: 14upx;
				} 
				padding: 14upx 0;
			}
			&-ct {
				display: flex;
				@{fw}: wrap;
				.item {
					margin: 8upx 6upx;
					padding: 6upx 18upx;
					@{bdra}: 24upx;
					border: 2upx solid #2a1378;
				}
			}
			navigator {
				margin: 16upx 0 0 30upx;
			}
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
	}
	.bg-female {
		@{bgc}: @bg-female;
	}
	.bg-male {
		@{bgc}: @bg-male;
	}
</style>