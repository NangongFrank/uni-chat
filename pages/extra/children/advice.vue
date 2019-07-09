<template>
	<view class="content">
		<view class="m-tt">问题描述</view>
		<view class="m-ct">
			<textarea placeholder="请填写问题和建议" v-model="task" maxlength="200"/>
		</view>
		<view class="m-tt">联系方式</view>
		<view class="m-ct">
			<input placeholder="手机号,邮箱,微信号等" v-model="tel"/>
		</view>
		<view style="height: 100upx;"></view>
		<view class="m-ft">
			<view>提交反馈</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				tel: '',
				task: '',
			}
		},
		onLoad(opitons) {

		},
		methods: {

		}
	}
</script>
<style lang="less" scoped>
	@import "../../../static/config.less";
	.content {
		padding: 0 20upx;
		.m-tt {
			padding: 28upx 0;
			@{fs}: 32upx;
			color: #333;
		}
		.m-ct {
			input,
			textarea {
				@{bgc}: #f6f6f6;
				@{fs}: 24upx;
				@{bdra}: 12upx;
			}
			textarea {
				width: 682upx;
				padding: 14upx;
			}
			input {
				padding: 10upx 16upx;
			}
		}
		.m-ft {
			position: fixed;
			padding: 0 20upx;
			width: 710upx;
			bottom: 0;
			left: 0;
			padding-bottom: 10upx;
			@{bgc}: #fff;
			view {
				height: 70upx;
				display: flex;
				@{ai}: center;
				@{jc}: center;
				@{bdra}: 35upx;
				color: #fff;
				@{fs}: 28upx;
				@{bgc}: #4529a2;
			}
		}
	}
</style>
