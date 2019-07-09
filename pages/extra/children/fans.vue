<template>
	<view class="m" :style="{height: windowHeight}">
		<view class="m-tt">
			<view class="iconfont icon-search"></view>
			<input confirm-type="search" placeholder="名称搜索"
			@confirm="searchEvent"/>
		</view>
		<scroll-view scroll-y class="m-ct" :style="{height: poolHeight}">
			<view class="li"
			v-for="(value, index) in list"
			:key="index">
				<view class="m-ct-info">
					<image :src="value.cover"></image>
					<view class="name" v-text="value.name">风一样自由</view>
					<view class="iconfont"
					:class="{'icon-female': value.sex != 1, 'icon-male' : value.sex == 1}"></view>
				</view>
				<view class="m-ct-action">
					<view v-if="value.relation">相互关注</view>
					<view v-else class="tip">关注</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				windowHeight: '603px',
				poolHeight: '552px',
				list: [{
					cover: '/static/assets/myfirends/firend-01.png',
					name: '风一样自由',
					sex: 1,
					relation: false,
					}, {
					cover: '/static/assets/myfirends/firend-02.png',
					name: '飘在半空',
					sex: 1,
					relation: false,
					}, {
					cover: '/static/assets/myfirends/firend-03.png',
					name: '东方神起',
					sex: 2,
					relation: false,
					}, {
					cover: '/static/assets/myfirends/firend-04.png',
					name: '考研',
					sex: 2,
					relation: false,
					}, {
					cover: '/static/assets/myfirends/firend-05.png',
					name: '派大星的好朋友',
					sex: 2,
					relation: true,
					}, {
					cover: '/static/assets/myfirends/firend-06.png',
					name: '遇见',
					sex: 2,
					relation: true,
					}, {
					cover: '/static/assets/myfirends/firend-07.png',
					name: '余生只有你',
					sex: 1,
					relation: true,
					}, {
					cover: '/static/assets/myfirends/firend-05.png',
					name: '派大星的好朋友',
					sex: 2,
					relation: true,
					}, {
					cover: '/static/assets/myfirends/firend-06.png',
					name: '遇见',
					sex: 2,
					relation: true,
					}, {
					cover: '/static/assets/myfirends/firend-07.png',
					name: '余生只有你',
					sex: 1,
					relation: true,
					}, {
					cover: '/static/assets/myfirends/firend-08.png',
					name: '独自去流浪',
					sex: 1,
					relation: true,
				}],
			}
		},
		onLoad(opitons) {
			uni.getSystemInfo().then(([err, {windowHeight}]) => {
				this.windowHeight = windowHeight + 'px'
				this.poolHeight = windowHeight - 31 + 'px'
			})
		},
		methods: {
			searchEvent({detail}) {
				// 真机搜索效果值
				console.log(detail.value)
			},
		}
	}
</script>
<style lang="less" scoped>
	@import "../../../static/config.less";
	image {
		width: 100upx;
		height: 100upx;
		@{bdra}: 50%;
		margin-right: 20upx;
	}
	.m {
		padding: 0 20upx;
		&-ct {
			.li {
				display: flex;
				@{jc}: space-between;
				border-bottom: 2upx solid #f2f2f2;
				padding: 14upx 0;
				@{fs}: 28upx;
				color: #333;
			}
			.iconfont {
				color: #fff;
				@{bdra}: 50%;
				margin-left: 6upx;
				padding: 6upx;
				@{fs}: 28upx;
			}
			.icon-male {
				@{bgc}: #5534e0;
			}
			.icon-female {
				@{bgc}: #fc42a4;
			}
			.name {
				max-width: 400upx;
				.word-online();
			}
			&-info,
			&-action {
				display: flex;
				@{ai}: center;
			}
			&-action {
				view {
					padding: 6upx 14upx;
					@{bgc}: #e6e6e6;
					@{bdra}: 28upx;
				}
				.tip {
					color: #4529a2;
				}
			}
		}
		&-tt {
			margin: 6upx 0;
			position: relative;
			.iconfont {
				position: absolute;
				left: 10upx;
				top: 50%;
				transform: translateY(-50%);
				@{fs}: 28upx;
			}
			input {
				@{bgc}: #f2f2f2;
				@{bdra}: 30upx;
				@{fs}: 24upx;
				padding: 4upx 0 4upx 38upx;
			}
		}
	}
</style>
