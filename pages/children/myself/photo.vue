<template>
	<view>
		<scroll-view scroll-y :style="{height: viewMinHeight}">
			<view class="ul">
				<view class="li"
				@tap="previewImg(item)"
				v-for="(item, index) in photoList"
				:key="index">
					<image class="wrapper" :src="item.src"></image>
				</view>
				<view class="li" v-if="photoList.length % 3 == 2">
					<view class="wrapper"></view>
				</view>
				<view class="li"  v-if="photoList.length % 3 == 1">
					<view class="wrapper"></view>
				</view>
				<view class="li"  v-if="photoList.length % 3 == 1">
					<view class="wrapper"></view>
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
				photoList: [{
					src: '/static/assets/myself/photo/p1.jpg',
					}, {
					src: '/static/assets/myself/photo/p2.jpg',
					}, {
					src: '/static/assets/myself/photo/p3.jpg',
					}, {
					src: '/static/assets/myself/photo/p4.jpg',
					}, {
					src: '/static/assets/myself/photo/p5.jpg',
					}, {
					src: '/static/assets/myself/photo/p6.jpg',
					}, {
					src: '/static/assets/myself/photo/p7.jpg',
					}, {
					src: '/static/assets/myself/photo/p8.jpg',
					}, {
					src: '/static/assets/myself/photo/p9.jpg',
					}, {
					src: '/static/assets/myself/photo/p10.jpg',
					}, {
					src: '/static/assets/myself/photo/p11.jpg',
					}, {
					src: '/static/assets/myself/photo/p12.jpg',
					}, {
					src: '/static/assets/myself/photo/p12.jpg',
					}],
			}
		},
		onLoad(opitons) {

		},
		methods: {
			previewImg(item) {
				
			},
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
	@import '../../../static/theme/children/myself/photo.less';
	.ul {
		padding: 20upx;
		display: flex;
		@{fw}: wrap;
		@{jc}: space-around;
		.wrapper {
			width: 220upx;
			height: 220upx;
		}
		.li {
			margin-bottom: 40upx;
		}
	}
</style>
