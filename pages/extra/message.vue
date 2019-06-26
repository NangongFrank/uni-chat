<template>
	<view>
		<view class="search">
			<view class="search-box">
				<view class="iconfont icon-search"></view>
				<input confirm-type="search" placeholder="搜索名称或聊天记录" v-model="searchText"/>
			</view>
		</view>
		<scroll-view scroll-y :style="{'height': viewMinHeight}">
			<view class="ul">
				<view class="li"
				v-for="(value, index) in msgList"
				:key="index">
					<view class="cover" @tap="seeUser(value)">
						<image :src="value.cover"></image>
					</view>
					<view class="tip" @tap="jumpToChat(value)">
						<view class="tip-info">
							<view class="tip-info-name"
							v-text="value.name"></view>
							<view class="tip-info-time"
							v-text="value.time"></view>
						</view>
						<view class="tip-msg"
						v-text="value.msg"></view>
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
				msgList: [{
					cover: '/static/assets/message/user-head.png',
					name: '考研',
					msg: '为了成为更好的自己，一起加油吧~！',
					time: '6-12',
					isFriend: true,
					},{
					cover: '/static/assets/message/user-head.png',
					name: '考研',
					msg: '为了成为更好的自己，一起加油吧~！',
					time: '6-12',
					},{
					cover: '/static/assets/message/user-head.png',
					name: '考研',
					msg: '为了成为更好的自己，一起加油吧~！',
					time: '6-12',
					},{
					cover: '/static/assets/message/user-head.png',
					name: '考研',
					msg: '为了成为更好的自己，一起加油吧~！',
					time: '6-12',
					},{
					cover: '/static/assets/message/user-head.png',
					name: '考研',
					msg: '为了成为更好的自己，一起加油吧~！',
					time: '6-12',
					},{
					cover: '/static/assets/message/user-head.png',
					name: '考研',
					msg: '为了成为更好的自己，一起加油吧~！',
					time: '6-12',
					},{
					cover: '/static/assets/message/user-head.png',
					name: '考研',
					msg: '为了成为更好的自己，一起加油吧~！',
					time: '6-12',
					},{
					cover: '/static/assets/message/user-head.png',
					name: '考研',
					msg: '为了成为更好的自己，一起加油吧~！',
					time: '6-12',
					},{
					cover: '/static/assets/message/user-head.png',
					name: '考研',
					msg: '为了成为更好的自己，一起加油吧~！',
					time: '6-12',
				}],
				viewMinHeight: 0,
				searchText: "",
			}
		},
		onReady() {
			let vm = this
			uni.getSystemInfo({
				success({pixelRatio, screenHeight}) {
					// top 即header占据的空间高度(绝对值)
					const top = 64
					let	hei = 0
					hei = screenHeight - top - 42 +  'px'
					vm.viewMinHeight = hei
				},
			})
		},
		methods: {
			jumpToChat({name}) {
				uni.navigateTo({
					url: '/pages/children/chatFirend?name=' + name,
				})
			},
			seeUser({isFriend}) {
				if(isFriend) {
					isFriend = 1
				} else {
					isFriend = 0
				}
				uni.navigateTo({
					url: '/pages/children/userHome?isFriend=' + isFriend
				})
			}
		}
	}
</script>
<style lang="less" scoped>
	@import '../../static/config.less';
	@import "../../static/theme/extra/message.less";
	scroll-view {
		width: 750upx;
	}
	.search {
		padding: 12upx 24upx;
		display: flex;
		&-box {
			flex: 1;
			@{bdra}: 30upx;
			@{bgc}: #f2f2f2;
			display: flex;
			@{ai}: center;
			height: 60upx;
		}
		input {
			flex: 1;
			@{fs}: 24upx;
		}
		.iconfont {
			width: 66upx;
			display: flex;
			@{ai}: center;
			@{jc}: center;
		}
	}
	.ul {
		width: 750upx;
		display: flex;
		@{fd}: column;
		@{ai}: center;
	}
	.li {
		display: flex;
		width: 710upx;
		padding: 20upx 0;
		border-bottom: 2upx solid #ccc;
		@{bgc}: #fff;
		.cover,
		image {
			width: 138upx;
			height: 138upx;
			@{bdra}: 50%;
		}
		.cover {
			margin-right: 20upx;
		}
		.tip {
			flex: 1;
			display: flex;
			@{fd}: column;
			@{jc}: space-around;
			padding: 10upx 0;
			&-info {
				display: flex;
				@{jc}: space-between;
				@{ai}: baseline;
				&-name {
					@{fs}: 30upx;
				}
				&-time {
					@{fs}: 18upx;
				}
			}
			&-msg {
				@{fs}: 24upx;
			}
		}
	}
</style>