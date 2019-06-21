<template>
	<view>
		<scroll-view scroll-y :style="{'height': viewMinHeight}">
			<view class="box">
				<view class="input">
					<view class="item"
					v-for="(value, index) in tags"
					@longpress="removeTag(index)"
					:key="index"
					v-text="value.value"></view>
					<view class="input-box">
						<input @blur="addTag" v-model="tagVal" placeholder="添加标签">
					</view>
				</view>
				<view class="res-tags">
					<view class="res-tags-li"
					v-for="(value, index) in resTags"
					@tap="selectTag(value)"
					:key="index"
					v-text="value.value"></view>
				</view>
				<view class="tip">
					<view>第一个标签将作为自己的随机搜索标志</view>
				</view>
				<view class="btn">
					<view @tap="savaTags">保存</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				tags:[],
				resTags: [{
					value: '90后'
					}, {
					value: '美术'
					}, {
					value: '运动'
					}, {
					value: '电影'
					}, {
					value: '电影'
					}, {
					value: '电影'
					}, {
					value: '电影'
				}],
				tagVal: "",
			}
		},
		onLoad(opitons) {

		},
		methods: {
			addTag({target}) {
				let value = target.value,
					vm = this,
					oldList = vm.tags,
					isUnique = false
				isUnique = oldList.every(item => {
					if(item.value == value) {
						return false
					} else {
						return true
					}
				})
				if(isUnique) {
					vm.tags.push({value})
				}
				vm.tagVal = ""
			},
			selectTag({value}) {
				let vm = this,
					oldList = vm.tags,
					isUnique = false
				isUnique = oldList.every(item => {
					if(item.value == value) {
						return false
					} else {
						return true
					}
				})
				if(isUnique) {
					vm.tags.push({value})
				}
			},
			removeTag(index) {
				this.tags.splice(index, 1)
			},
			savaTags() {
				// 保存用户的自定义标签
				uni.navigateTo({
					animationType: "slide-in-right",
					url: "/pages/extra/myself"
				})
			},
		},
		onReady() {
			let vm = this
			uni.getSystemInfo({
				success({pixelRatio, screenHeight}) {
					// top 即header占据的空间高度(绝对值)
					const top = 68
					let height = 0,
						hei = 0
					// #ifdef MP-WEIXIN
					height = screenHeight
					hei = screenHeight - top - 64
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
	@import "../../static/config.less";
	.box {
		padding: 10upx 20upx;
		.input {
			display: flex;
			@{fw}: wrap;
			@{ai}: center;
			border-bottom: 2upx solid #ccc;
			view {
				margin: 10upx 8upx;
			}
			.item {
				@{fs}: 28upx;
				padding: 8upx 16upx;
				@{bdra}: 18upx;
				@{bgc}: #8e52b1;
				color: #fff;
			}
			input {
				@{fs}: 24upx;
				@{bgc}: #f2f2f2;
				padding: 4upx 12upx;
				width: 120upx;
				@{bdra}: 18upx;
			}
		}
	}
	.btn {
		display: flex;
		@{jc}: center;
		margin-top: 50upx;
		view {
			padding: 14upx 32upx;
			@{bdra}: 20upx;
			@{bgc}: #8e52b1;
			color: #fff;
			@{fs}: 30upx;
		}
	}
	.tip {
		margin: 40upx 0;
		display: flex;
		@{jc}: center;
		@{fs}: 24upx;
		color: #666;
	}
	.res-tags {
		display: flex;
		@{fw}: wrap;
		padding: 16upx 0;
		&-li {
			border: 2upx solid #ddd;
			@{bdra}: 18upx;
			padding: 6upx 20upx;
			@{fs}: 20upx;
			color: #555;
			margin: 8upx 12upx;
		}
	}
</style>
