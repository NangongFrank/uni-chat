<template>
	<view>
		<scroll-view scroll-y :style="{height: viewMinHeight}">
			<view class="ul">
				<view class="li"
				v-for="(item, index) in videoList"
				:key="index">
					<video :src="item.src" :poster="item.poster" controls></video>
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
				videoList: [{
					poster: '/static/assets/myself/video/poster-01.jpg',
					src: 'http://cdn.toxicjohann.com/lostStar.mp4',
					}, {
					poster: '/static/assets/myself/video/poster-02.jpg',
					src: 'http://cdn.toxicjohann.com/lostStar.mp4',
					}, {
					poster: '/static/assets/myself/video/poster-03.jpg',
					src: 'http://cdn.toxicjohann.com/lostStar.mp4',
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
	@import '../../../static/theme/children/myself/video.less';
	.ul {
		padding: 20upx;
		display: flex;
		@{fd}: column;
		@{ai}: center;
		video {
			width: 668upx;
		}
		.li {
			margin-bottom: 30upx;
			box-shadow: 0 1upx 20upx 2upx #ebebeb;
		}
	}
</style>
