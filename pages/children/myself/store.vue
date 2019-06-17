<template>
	<view>
		<scroll-view scroll-y :style="{height: viewMinHeight}">
			<view class="ul">
				<view class="li"
				v-for="(item, index) in storeList"
				:key="index">
					<view class="cover">
						<image :src="item.src"></image>
					</view>
					<view class="content">
						<view class="title"
						v-text="item.title"></view>
						<view class="info">
							<view
							v-for="(value, index) in item.info"
							:key="index"
							v-text="value.key + '：' + value.value"></view>
						</view>
						<view class="side">
							<view class="side-name" v-text="item.side"></view>
							<view class="side-long" v-text="item.long"></view>
						</view>
					</view>
					<view class="token" v-if="!index">精选</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				viewMinHeight: 0,
				pageMinHeight: 0,
				storeList: [{
					src: '/static/assets/myself/store/store-01.jpg',
					title: '亨元茶馆',
					info: [{
						key: '茶艺师',
						value: '25人',
						}, {
						key: '门店规模',
						value: '300m',
					}],
					side: '湖南省长沙市开福区北辰三角洲(凤凰海购物公园旁)',
					long: '2.4km',
					}, {
					src: '/static/assets/myself/store/store-02.jpg',
					title: '亨元茶馆',
					info: [{
						key: '茶艺师',
						value: '25人',
						}, {
						key: '门店规模',
						value: '300m',
					}],
					side: '湖南省长沙市开福区北辰三角洲(凤凰海购物公园旁)',
					long: '2.4km',
					}, {
					src: '/static/assets/myself/store/store-03.jpg',
					title: '亨元茶馆',
					info: [{
						key: '茶艺师',
						value: '25人',
						}, {
						key: '门店规模',
						value: '300m',
					}],
					side: '湖南省长沙市开福区北辰三角洲(凤凰海购物公园旁)',
					long: '2.4km',
					}],
				
				
				
			}
		},
		onLoad(opitons) {

		},
		methods: {

		},
		onReady() {
			let vm = this
			uni.getSystemInfo({
				success({pixelRatio, screenHeight}) {
					// top 即header占据的空间高度(绝对值)
					let height = 0,
						hei = 0
					// #ifdef MP-WEIXIN
					height = screenHeight
					hei = screenHeight - 64
					height += 'px'
					hei += 'px'
					// #endif
					vm.pageMinHeight = height
					vm.viewMinHeight = hei
				},
			})
		}
	}
</script>
<style lang="less" scoped>
	@import '../../../static/config.less';
	@import '../../../static/theme/children/myself/store.less';
	.ul {
		padding: 34upx 10upx;
		display: flex;
		@{fd}: column;
		@{ai}: center;
		.li {
			margin-bottom: 26upx;
			padding: 20upx;
			width: 678upx;
			@{bdra}: 14upx;
			box-shadow: 0 1upx 20upx 2upx #ebebeb;
			position: relative;
			overflow: hidden;
			display: flex;
			.cover {
				padding: 0 10upx;
			}
			.title {
				@{fs}: @title-fs;
				color: @title-color;
				font-weight: 900;
			}
			.info {
				@{fs}: @info-fs;
				color: @info-color;
			}
			.side {
				width: 430upx;
				@{fs}: @side-fs;
				color: @side-color;
				display: flex;
				@{jc}: space-between;
				@{ai}:center;
				&-name {
					width: 340upx;
				}
				&-long {
					flex: 1;
					display: flex;
					@{ai}: center;
					@{jc}: flex-end;
				}
			}
			image {
				width: 210upx;
				height: 160upx;
				@{bdra}: 10upx;
			}
			.token {
				position: absolute;
				right: -48upx;
				top: -10upx;
				padding-bottom: 6upx;
				transform: rotate(45deg);
				@{bgc}: @token-bg;
				@{fs}: @token-fs;
				color: #fff;
				width: 150upx;
				height: 70upx;
				display: flex;
				@{jc}: center;
				@{ai}: flex-end;
			}
		}
	}
</style>
