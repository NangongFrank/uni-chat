<template>
	<view class="content">
		<word-header />
		<view class="ul">
			<view class="li"
			v-for="(value, index) in 10"
			:key="index">
				<view class="cover">
					<image src="/static/assets/user-head.png"></image>
				</view>
				<view class="ct">
					<view class="ct-name">我是用户名</view>
					<view class="ct-ct">
						这是一段文本
						这是一段文本
						这是一段文本
						这是一段文本
						这是一段文本
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import WordHeader from '@/components/wordHead'
	export default {
		data() {
			return {
			}
		},
		onLoad() {

		},
		components: {
			WordHeader,
		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	@import "../../static/config";
	image {
		width: 80upx;
		height: 80upx;
	}
	.li {
		display: flex;
		padding: 10upx 20upx;
		.ct {
			flex: 1;
			width: 690upx;
			padding: 0 10upx;
			&-name {
				@{fs}: 32upx;
				font-weight: 900;
			}
			&-ct {
				@{fs}: 28upx;
				text-align: justify;
			}
		}
	}
</style>
