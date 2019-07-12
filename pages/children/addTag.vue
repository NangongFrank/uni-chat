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
					<view>最多可存储8个标签</view>
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
	import {getMyTags, recommendTags, setMyTags} from '@/extends/host'
	export default {
		data() {
			return {
				tags:[],
				resTags1: [],
				resTags2: [],
				tagVal: "",
				type: 'addmytag',
			}
		},
		onLoad({type}) {
			/* let vm = this
			if(type == 'addmytag') {
				uni.getStorage({
					key: 'myOpenId',
				}).then(([err, {data}]) => {
					vm.openid = data
					uni.request({
						url: getMyTags,
						data: {openid: data},
					}).then(([err, {data}]) => {
						vm.tags = data
					})
				})
			} else {
				vm.type = 'searchtag'
				uni.getStorage({
					key: 'searchTags'
				}).then(([err, {data}]) => {
					vm.tags = data
				}).catch(e => {
					vm.tags = []
				})
			}
			uni.request({
				url: recommendTags,
			}).then(([err, {data}]) => {
				vm.resTags1 = data[0]
				vm.resTags2 = data[1]
			}) */
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
				let vm = this
				if(!vm.tags.length) {
					uni.showToast({
						title: '需要添加标签保存',
						icon: 'none',
						duration: 900
					})
					return
				}
				if(vm.type == 'searchtag') {
					uni.setStorage({
						key: 'searchTags',
						data: vm.tags
					}).then(e => {
						uni.navigateBack({
							animationType: "slide-in-right",
						})
					})
				} else {
					uni.showLoading({
						title: '保存中...'
					})
					uni.request({
						url: setMyTags,
						method: 'post',
						data: {
							openid: vm.openid,
							data: JSON.stringify(vm.tags),
						},  
					}).then(([err, {data}]) => {
						uni.hideLoading()
						if(data.state) {
							uni.navigateBack({
								animationType: "slide-in-right",
							})
						}
					})
				}
				
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
