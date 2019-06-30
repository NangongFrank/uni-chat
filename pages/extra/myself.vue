<template>
	<view class="wrapper" :style="{'min-height': pageMinHeight}">
		<scroll-view scroll-y :style="{'height': viewMinHeight}">
			<view class="box">
				<view class="box-aside">
					<view class="box-aside-cover">
						<view class="cover">
							<image :src="userInfo.avatarUrl"></image>
						</view>
					</view>
					<view class="box-aside-info">
						<view class="name">
							<view class="user-name" v-text="userInfo.nickName"></view>
							<view class="sex iconfont"
							:class="{'icon-female': userInfo.gender != 1, 
							'bg-female': userInfo.gender != 1,
							'icon-male': userInfo.gender == 1, 
							'bg-male': userInfo.gender == 1}"></view>
						</view>
					</view>
				</view>
				<view class="box-tags">
					<view class="box-tags-tt">
						<view class="iconfont icon-my-tag"></view>
						<view>我的标签</view>
					</view>
					<view class="box-tags-ct">
						<view class="item"
						v-for="(value, index) in tags"
						:key="index"
						v-text="value.value"></view>
						<navigator url="/pages/children/addTag?type=addmytag" class="iconfont icon-edit-pen"></navigator>
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
				<view class="extra-my">
					<view class="extra-my-box" @tap="jumpMyDiscuss">
						<image src="/static/assets/myself/my-discuss.png"></image>
						<view>我的关注</view>
					</view>
					<view class="extra-my-box" @tap="jumpMyAction">
						<image src="/static/assets/myself/my-action.png"></image>
						<view>我的动态</view>
					</view>
				</view>
				<view class="extra-adjust">
					<navigator url="#" class="extra-adjust-title">
						<view class="iconfont icon-pen"></view>
						<view class="adjust">意见反馈</view>
					</navigator> 
				</view>
			</view>
		</scroll-view>
	</view>
</template>
<script>
	import {getMyTags} from '@/extends/host'
	export default {
		data() {
			return {
				viewMinHeight: 0,
				pageMinHeight: 0,
				tags: [],
				openid: '',
				userInfo: {},
			}
		},
		methods: {
			navModelChange({detail}) {
				console.log(detail)
			},
			initUserInfo() {
				let vm = this
				uni.getStorage({
					key: 'myOpenId',
				}).then(([err, {data}]) => {
					vm.openid = data
					// 获取用户的标签
					uni.request({
						url: getMyTags,
						data: {openid: data},
					}).then(([err, {data}]) => {
						vm.tags = data
						console.log(data)
						uni.stopPullDownRefresh()
					})
				})
				uni.getStorage({
					key: 'userData',
				}).then(([err, {data}]) => {
					// 加载用户信息
					vm.userInfo = data.userInfo
				})
			},
			wastMoney() {
				uni.showToast({
					title: '功能暂未开放',
					duration: 800,
					icon: 'none',
				})
			},
			jumpMyAction() {
				uni.showToast({
					title: '暂未开通',
					duration: 900,
					icon: 'none',
				})
			},
			jumpMyDiscuss() {
				uni.showToast({
					title: '暂未开通',
					duration: 900,
					icon: 'none',
				})
			},
		},
		onReady() {
			let vm = this
			uni.getSystemInfo({
				success({windowHeight}) {
					// top 即header占据的空间高度(绝对值)
					vm.pageMinHeight = windowHeight + 'px'
					vm.viewMinHeight = windowHeight + 'px';
				},
			})
		},
		onLoad() {
			this.initUserInfo()
		},
		onPullDownRefresh() {
			this.initUserInfo()
		},
		watch: {
			openid(value) {
				// 获取个人相关的信息
			},
		}
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
	.extra {
		display: flex;
		@{ai}:center;
		@{fd}: column;
		&-my {
			width: 710upx;
			@{bgc}: @extra-my-bg;
			@{bdra}: 30upx;
			margin-bottom: 18upx;
			image {
				width: 65upx;
				height: 65upx;
			}
			color: #8e81c0;
			@{fs}: 24upx;
			display: flex;
			&-box {
				display: flex;
				@{fd}: column;
				@{ai}: center;
				padding: 40upx 12upx;
				margin: 0 20upx;
				view {
					margin-top: 20upx;
				}
				&:active {
					opacity: .8;
				}
			}
		}
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
		&-vip {
			margin: 20upx 0;
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