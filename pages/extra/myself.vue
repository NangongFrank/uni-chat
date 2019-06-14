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
	
</style>