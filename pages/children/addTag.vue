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
				<view class="res-tags" @tap="selectTag">
					<view class="res-tags-li"
					v-for="(value, index) in resTags1"
					:key="index"
					:data-tag="value.value"
					v-text="value.value"></view>
				</view>
				<view class="res-tags" @tap="selectTag">
					<view class="res-tags-li"
					v-for="(value, index) in resTags2"
					:key="index"
					:data-tag="value.value"
					v-text="value.value"></view>
				</view>
				<view class="tip">
					<view>第一个标签将作为自己的随机搜索标志</view>
				</view>
				<view class="space-pool"></view>
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
				resTags1: [{
					value: '篮球'
					}, {
					value: '羽毛球'
					}, {
					value: '乒乓球'
					}, {
					value: '足球'
					}, {
					value: '滑板'
					}, {
					value: '滑旱冰'
					}, {
					value: '跑步'
					}, {
					value: '跳绳'
					}, {
					value: '举重'
					}, {
					value: '音乐'
					}, {
					value: '电影'
					}, {
					value: '绘画'
					}, {
					value: '小说'
					}, {
					value: '看书'
					}, {
					value: '吉他'
					}, {
					value: '钢琴'
					}, {
					value: '萨克斯'
					}, {
					value: '葫芦丝'
					}, {
					value: '小提琴'
					}, {
					value: '折纸'
					}, {
					value: '剪纸'
					}, {
					value: '品茶'
				}],
				resTags2: [{
					value: '涂鸦'
					}, {
					value: '夜猫子'
					}, {
					value: '只爱美剧'
					}, {
					value: '做一个开心的吃货'
					}, {
					value: '幽默'
					}, {
					value: '帽子控'
					}, {
					value: '二次元'
					}, {
					value: '型男'
					}, {
					value: '静水流深'
					}, {
					value: '萌萌哒'
					}, {
					value: '风趣'
					}, {
					value: '单身待解救'
					}, {
					value: '狮子座'
					}, {
					value: '宅女'
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
			selectTag({target}) {
				let dataset = target.dataset.tag,
					vm = this,
					oldList = vm.tags,
					isUnique = false
				if(dataset) {
					isUnique = oldList.every(item => {
						if(item.value == dataset) {
							return false
						} else {
							return true
						}
					})
					if(isUnique) {
						vm.tags.push({value: dataset})
					}
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
				success({screenHeight, windowHeight}) {
					// top 即header占据的空间高度(绝对值)
					vm.pageMinHeight = windowHeight + 'px'
					vm.viewMinHeight = windowHeight - 64 + 'px'
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
				@{bgc}:  #4529a2;
				color: #fff;
				&:active {
					opacity: .8;
				}
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
		width: 710upx;
		position: fixed;
		bottom: 0;
		left: 20upx;
		margin: 12upx 0;
		view {
			flex: 1;
			height: 70upx;
			@{bdra}: 35upx;
			@{bgc}: #4529a2;
			color: #fff;
			@{fs}: 24upx;
			display: flex;
			@{ai}: center;
			@{jc}: center;
			&:active {
				opacity: .8;
			}
		}
	}
	.space-pool {
		padding: 50upx 0;
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
