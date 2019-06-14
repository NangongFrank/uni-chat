<template>
	<view class="wrapper">
		<view class="header">
			<nav-header />
		</view>
		<scroll-view scroll-y :style="{height: viewMinHeight}">
			<view class="ul">
				<view class="li"
				v-for="(value, index) in firendList"
				:key="index">
					<view class="cover">
						<image :src="value.cover"></image>
					</view>
					<view class="user-info">
						<view class="user-info-base">
							<view class="name" v-text="value.name"></view>
							<view class="iconfont" 
							:class="['icon-' + value.sex, 'bg-' + value.sex]"></view>
						</view>
						<view class="user-info-extra">
							<view 
							v-for="(val, ind) in value.tip"
							:key="ind"
							v-text="val"></view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>
<script>
	import navHeader from '@/components/navHeader'
	export default {
		data() {
			return {
				firendList: [{
					name: 'Riven',
					sex: 'female',
					tip: ['90后', '音乐', '美食'],
					cover: '/static/assets/myfirends/firend-01.png',
					}, {
					name: '从林',
					sex: 'male',
					tip: ['90后', '音乐', '美食'],
					cover: '/static/assets/myfirends/firend-02.png',
					}, {
					name: '夏夏',
					sex: 'female',
					tip: ['90后', '音乐', '美食'],
					cover: '/static/assets/myfirends/firend-03.png',
					}, {
					name: 'Helen',
					sex: 'male',
					tip: ['90后', '音乐', '美食'],
					cover: '/static/assets/myfirends/firend-04.png',
					}, {
					name: 'Fiona',
					sex: 'female',
					tip: ['90后', '音乐', '美食'],
					cover: '/static/assets/myfirends/firend-05.png',
					}, {
					name: '刘易斯',
					sex: 'female',
					tip: ['90后', '音乐', '美食'],
					cover: '/static/assets/myfirends/firend-06.png',
					}, {
					name: 'Fionalin',
					sex: 'male',
					tip: ['90后', '音乐', '美食'],
					cover: '/static/assets/myfirends/firend-07.png',
					}, {
					name: '刘露丝',
					sex: 'female',
					tip: ['90后', '音乐', '美食'],
					cover: '/static/assets/myfirends/firend-08.png',
					}, {
					name: '阿秋',
					sex: 'female',
					tip: ['90后', '音乐', '美食'],
					cover: '/static/assets/myfirends/firend-09.png',
					}, {
					name: 'Tom',
					sex: 'male',
					tip: ['90后', '音乐', '美食'],
					cover: '/static/assets/myfirends/firend-10.png',
				}, {
					name: 'Jone',
					sex: 'male',
					tip: ['90后', '音乐', '美食'],
					cover: '/static/assets/myfirends/firend-10.png',
				}],
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
					const top = 31
					let height = 0,
						hei = 0
					// #ifdef MP-WEIXIN
					height = screenHeight
					hei = screenHeight - top
					height += 'px'
					hei += 'px'
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
	@import "../../static/theme/extra/firends.less";
	.wrapper {
		@{bgc}: @wrapper-bg;
	}
	.ul {
		height: 1206upx;
		display: flex;
		@{fw}: wrap;
		@{jc}: space-between;
		padding: 20upx 12upx;
		.li {
			width: 352upx;
			height: 180upx;
			box-shadow: 0 2upx 3upx 2upx @box-shadow;
			image {
				width: 180upx;
				height: 180upx;
			}
			display: flex;
			color: #fff;
			@{bgi}: radial-gradient(circle at center, @radial-start, @radial-end 100upx);
		}
		.user-info {
			display: flex;
			@{fd}: column;
			@{jc}: space-around;
			&-base,
			&-extra {
				display: flex;
			}
			&-base {
				@{fs}: @name-fs;
				.name {
					max-width: 100upx;
					.word-online();
				}
				.iconfont {
					width: 28upx;
					height: 28upx;
					@{fs}: 22upx;
					display: flex;
					@{ai}: center;
					@{jc}: center;
					@{bdra}: 50%;
					margin-left: 4upx;
					color: #fff;
				}
			}
			&-extra {
				@{fs}: @tip-fs;
				@{fw}: wrap;
				view {
					padding:0 10upx 10upx 0;
				}
			}
		}
		.li,
		.cover,
		image {
			@{bdra}: 12upx;
		}
		.cover {
			margin-right: 20upx;
		}
	}
	.bg-female {
		@{bgc}: @bg-female;
	}
	.bg-male {
		@{bgc}: @bg-male;
	}
</style>