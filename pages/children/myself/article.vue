<template>
	<view>
		<scroll-view scroll-y :style="{ height: viewMinHeight }">
			<view class="ul">
				<view class="li" 
				v-for="(value, index) in articleList" 
				:key="index">
					<view class="li-tt" v-text="value.tt"></view>
					<view class="li-ct" v-text="value.ct"></view>
					<view class="li-cover" v-if="value.imgs.length > 0">
						<image class="cover"
						:src="val.img" 
						v-for="(val, ind) in value.imgs" 
						:key="ind"></image>
						<view class="cover" v-if="value.imgs.length % 3 == 2"></view>
						<view class="cover" v-if="value.imgs.length % 3 == 1"></view>
						<view class="cover" v-if="value.imgs.length % 3 == 1"></view>
					</view>
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
			articleList: [{
				tt: '品一盏清香，兴一方回响 ',
				ct: '为这座城市的访亲会友之人，提供一个宾至如归场所是我们的追求！《智丹小语》以漫画的形式将自己对人生的思考、对企业管理的心得，对哲学的一些领悟等展现给广大读者。涵盖面广泛，且内容深刻 …',
					}, {
				tt: '茶匠的世界，无声胜有声',
				ct: '智丹小语以漫画的形式将自己对人生的思考、对企业管理的心得，对哲学的一些领悟等展现给广大读者。涵盖面广泛，且内容深刻，为世人传递出积极向上的正能量。画风幽默而不失深度 …',
				imgs: [{
					img: '/static/assets/myself/article/p1.jpg',
					}, {
					img: '/static/assets/myself/article/p2.jpg',
					}, {
					img: '/static/assets/myself/article/p3.jpg',
					}, {
					img: '/static/assets/myself/article/p2.jpg',
				}],
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
@import '../../../static/theme/children/myself/article.less';
.li {
	padding: 20upx;
	margin: 16upx 0;
	box-shadow: 0 1upx 20upx 3upx #eee, 0 -1upx 20upx 3upx #eee;
	&-tt {
		@{fs}: @tt-fs;
		color: @tt-color;
		font-weight: 900;
		padding: 10upx 0;
		width: 700upx;
		.word-online();
	}
	&-ct {
		@{fs}: @ct-fs;
		color: @ct-color;
		text-indent: 2 * @ct-fs;
		line-height: 1.6 * @ct-fs;
		text-align: justify;
	}
	&-cover {
		display: flex;
		@{jc}: space-around;
		@{fw}: wrap;
		.cover {
			width: 196upx;
			height: 188upx;
			margin-top: 24upx;
		}
	}
	
}
</style>
