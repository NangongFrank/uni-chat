<template>
	<view class="wrapper" :style="{'min-height': pageMinHeight}">
		<view class="box">
			<navigator url="/pages/extra/children/advice" 
			class="box-token iconfont icon-advice"></navigator>
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
					<view class="about-me" @tap="jumpNewPage">
						<view class="about-me-box" data-tag="focus">
							<view class="tt" data-tag="focus">关注</view>
							<view class="ct" data-tag="focus">12</view>
						</view>
						<view class="about-me-box" data-tag="fans">
							<view class="tt" data-tag="fans">粉丝</view>
							<view class="ct" data-tag="fans">12</view>
						</view>
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
		<navigator url="/pages/extra/children/addActive" class="add-active">
			<view>发布</view>
			<view>动态</view>
		</navigator>
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
			}
		},
		methods: {
			initUserInfo() {
				let vm = this
				uni.getStorage({
					key: 'userData',
				}).then(([err, {data}]) => {
					// 加载用户信息
					vm.userInfo = data.userInfo
				})
				uni.getStorage({
					key: 'myOpenId',
				}).then(([err, {data}]) => {
					vm.openid = data
					// 获取用户的标签
					/* uni.request({
						url: getMyTags,
						data: {openid: data},
					}).then(([err, {data}]) => {
						vm.tags = data
						// console.log(data)
						uni.stopPullDownRefresh()
					}) */
				})
			},
			jumpNewPage({target}) {
				let {tag} = target.dataset,
					url = ""
				if(tag == 'focus') {
					url = '/pages/extra/children/focusUser'
				} else {
					url = '/pages/extra/children/fans'
				}
				uni.navigateTo({url})
			},
		},
		onPullDownRefresh() {
			this.initUserInfo()
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
		@{bgc}: #fff;
	}
	.box {
		// min-height: 508upx;
		min-height: 420upx;
		@{bgi}: linear-gradient(to bottom, @box-nav-start-bg, @box-nav-end-bg);
		padding: 30upx 0 0 10upx;
		color: @simple-font-color;
		position: relative;
		&-token {
			position: absolute;
			right: 30upx;
			top: 30upx;
			color: #fff;
			@{fs}: 48upx;
		}
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
				@{jc}: center;
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
			.about-me {
				margin-top: 10upx;
				display: flex;
				@{jc}: space-around;
				&-box {
					display: flex;
					@{ai}: center;
					@{fd}: column;
				}
				color: #fff;
				.tt {
					@{fs}: 28upx;
				}
				.ct {
					@{fs}: 24upx;
				}
			}
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
	.extra {
		padding: 0 20upx;
		&-active {
			display: flex;
			margin-top: 20upx;
			.m-left {
				width: 28upx;
				display: flex;
				@{fd}: column;
				padding: 40upx 0 40upx 10upx;
				&::before {
					content: "";
					flex: 1;
					width: 2upx;
					@{bgc}: #f3f3f3;
				}
			}
			.m-text-box {
				flex: 1;
				margin-bottom: 20upx;
				@{bgc}: #ebebeb;
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
					border-right-color: #ebebeb;
					left: -40upx;
				}
				&::after {
					left: -58upx;
					width: 24upx;
					height: 24upx;
					@{bdra}: 50%;
					@{bgc}: #ffc72d;
				}
			}
			.m-right {
				@{bdra}: 12upx;
				flex: 1;
				.time,
				.weather {
					color: #666;
				}
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
				.tip-ct {
					color: #333;
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
	.bg-female {
		@{bgc}: @bg-female;
	}
	.bg-male {
		@{bgc}: @bg-male;
	}
	.add-active {
		position: fixed;
		right: 30upx;
		bottom: 30upx;
		@{bdra}: 50%;
		width: 80upx;
		height: 80upx;
		@{bgi}: linear-gradient(to bottom, #9c6cc1 20%, #4a2ca4);
		display: flex;
		@{ai}: center;
		@{jc}: center;
		@{fd}: column;
		view {
			@{fs}: 20upx;
			color: #fff;
		}
	}
</style>