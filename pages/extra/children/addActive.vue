<template>
	<view class="m">
		<view class="m-tt" @tap="sendActive(isInput)">
			<view :class="{'is-input': isInput}">发布</view>
		</view>
		<view class="m-ct">
			<textarea placeholder="快和我们分享有趣的事吧~" v-model="task" maxlength="300"/>
		</view>
		<view class="m-ft">
			<view class="li" 
			@tap="priviewImg(index)"
			@longtap="deleteImg(index)"
			v-for="(value, index) in checkedList"
			:key="index">
				<image :src="value.src" mode="aspectFill"></image>
			</view>
			<view class="li" @tap="chooseImg">
				<view class="iconfont icon-take-photo"></view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				task: '',
				checkedList: [],
			}
		},
		onLoad(opitons) {

		},
		methods: {
			priviewImg(current) {
				let vm = this,
					urls = []
				vm.checkedList.map(value => {
					urls.push(value.src)
				})
				uni.previewImage({urls,current})
			},
			deleteImg(index) {
				this.checkedList.splice(index, 1)
			},
			chooseImg() {
				uni.chooseImage().then(([err, {tempFilePaths, tempFiles}]) => {
					let arr = []
					tempFilePaths.map(value => {
						arr.push({src: value})
					})
					this.checkedList = this.checkedList.concat(arr)
				})
			},
			sendActive(isInput) {
				if(!isInput) {
					return
				} else {
					uni.showLoading({
						title:'发布中...'
					})
					setTimeout(() => {
						uni.hideLoading()
					}, 2000)
				}
			}
		},
		computed: {
			isInput() {
				if(!this.task || !this.checkedList.length) {
					return false
				} else {
					return true
				}
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../../../static/config.less";
	image {
		width: 176upx;
		height: 184upx;
	}
	.m {
		padding: 0 20upx;
		&-ft {
			display: flex;
			@{fw}: wrap;
			@{jc}: space-around;
		}
		&-tt {
			display: flex;
			@{jc}: flex-end;
			@{fs}: 28upx;
			padding: 20upx 0;
			view {
				padding: 8upx 18upx;
				@{bdra}: 28upx;
				@{bgc}: #f2f2f2;
			}
		}
		&-ct {
			padding: 20upx 10upx;
			textarea {
				@{fs}: 24upx;
				width: 650upx;
				padding: 10upx 20upx;
				box-shadow: 1upx 1upx 6upx 2upx #dedede;
				@{bdra}: 6upx;
			}
		}
		.is-input {
			@{bgc}: #4529a2;
			color: #fff;
		}
	}
	.li {
		width: 176upx;
		height: 184upx;
		margin: 14upx 0 0;
		display: flex;
		@{ai}: center;
		@{jc}: center;
		@{bgc}: #f6f6f6;
		.iconfont {
			@{fs}: 90upx;
			color: #8a8a8a;
		}
	}
</style>
