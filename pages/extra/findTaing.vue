<template>
	<view class="pool" :style="{height: poolHeight}">
		<image class="bg-cover" src="/static/assets/findta/bg.jpg" mode="widthFix"></image>
		<image class="cover" src="/static/assets/findta/cover.png" mode="widthFix"
		:class="{animation: isFinding}"></image>
		<view class="action">
			<view class="action-text">正在茫茫人海中寻找那一粟</view>
			<view class="action-text">只欠一个转身</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				poolHeight: '500px',
				isFinding: true,
			}
		},
		onLoad(opitons) {
			let vm = this
			setTimeout(() => {
				uni.navigateTo({
					url: '/pages/extra/foundTa',
				})
			}, 2000)
		},
		methods: {

		},
		onReady() {
			let vm = this
			uni.getSystemInfo({
				success({pixelRatio, screenHeight, windowHeight}) {
					// top 即header占据的空间高度(绝对值)
					vm.poolHeight = windowHeight + 'px'
				},
			})
		},
	}
</script>
<style lang="less" scoped>
	@import "../../static/config.less";
	.pool {
		position: relative;
		overflow: hidden;
	}
	.bg-cover,
	.cover {
		width: 750upx;
		position: absolute;
		left: 0;
		top: 0;
		z-index: -1;
	}
	.cover {
		top: 270upx;
		z-index: 0;
	}
	.animation {
		animation: shashwo 1.5s ease-in-out infinite reverse;
	}
	.action {
		position: absolute;
		top: 830upx;
		left: 0;
		width: 750upx;
		display: flex;
		@{fd}: column;
		@{ai}: center;
		&-text {
			margin-top: 4upx;
			@{fs}: 24upx;
			color: #cecece;
		}
	}
	@keyframes shashwo {
		0% {opacity: 1;}
		10% {
			opacity: .1;
		}
		20% {
			opacity: .2;
		}
		30% {
			opacity: .3;
		}
		30% {
			opacity: .3;
		}
		40% {
			opacity: .4;
		}
		50% {
			opacity: .5;
		}
		60% {
			opacity: .6;
		}
		70% {
			opacity: .7;
		}
		80% {
			opacity: .8;
		}
		90% {
			opacity: .9;
		}
		100% {opacity: 1;}
	}
</style>
