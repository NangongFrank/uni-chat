<template>
	<view class="wrapper" :style="{'min-height': pageMinHeight}">
		<view class="header">
			<nav-header 
			:center-status="false" 
			:right-status="false" 
			:left-model="'textBackStep'"
			:back-step-path="'/pages/index/index'"
			:action-name="'返回'"/>
		</view>
		<view class="box">
			<view class="box-nav">
				<view class="box-nav-action">
					<view>匿名模式</view>
					<switch checked @change="navModelChange" />
				</view>
				<view class="box-nav-wast">
					<view>充值</view>
					<view class="iconfont icon-delta-right"></view>
				</view>
			</view>
			<view class="box-aside">
				<view class="box-aside-cover">
					<view class="cover">
						<image src="/static/assets/myself/user-head.png"></image>
					</view>
					<view class="cash">余额88</view>
				</view>
				<view class="box-aside-info">
					<view class="name">
						<view class="user-name">ALEX</view>
						<navigator url="#" class="iconfont icon-edit-pen"></navigator>
						<view class="sex iconfont"
						:class="['icon-' + 'female', 'bg-' + 'female']"></view>
					</view>
					<view class="tip">信书1级</view>
				</view>
			</view>
			<view class="box-footer">这家伙很懒，什么都没有留下</view>
		</view>
		<view class="extra">
			
		</view>
	</view>
</template>
<script>
	import navHeader from '@/components/navHeader'
	export default {
		data() {
			return {
				viewMinHeight: 0,
				pageMinHeight: 0,
			}
		},
		components: {
			navHeader,
		},
		methods: {
			navModelChange({detail}) {
				console.log(detail)
			},
		},
		onReady() {
			let vm = this
			uni.getSystemInfo({
				success({pixelRatio, screenHeight}) {
					// top 即header占据的空间高度(绝对值)
					const top = 120
					let height = pixelRatio * screenHeight,
						hei = (screenHeight - top) * pixelRatio
					// #ifdef MP-WEIXIN
					height += 'rpx'
					hei += 'rpx'
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
	.box {
		min-height: 508upx;
		@{bgi}: linear-gradient(to bottom, @box-nav-start-bg, @box-nav-end-bg);
		padding: 30upx 0 0 10upx;
		color: @simple-font-color;
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