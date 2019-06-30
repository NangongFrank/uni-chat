<template>
	<view class="pool" :style="{height: poolHeight}">
		<image class="bg-cover" src="/static/assets/findta/bg-find.jpg" mode="widthFix"></image>
		<view class="preparation" @tap="showPreparation">
			<view class="iconfont icon-preparation"></view>
			<view>筛选</view>
		</view>
		<view class="threebox"
		@touchstart="startSide"
		@touchend="endSide">
			<view class="threebox-li"
			:class="['ps-' + index]"
			@tap="jumpToChat(value)"
			v-for="(value, index) in userList"
			:key="index">
				<image :src="value.cover"></image>
				<view class="name" v-text="value.name" v-if="index"></view>
				<view class="user-tags" v-else>
					<view v-for="(val, ind) in value.tags"
					:key="ind"
					v-text="val"></view>
				</view>
			</view>
		</view>
		
		<view class="action">
			<view class="action-btn" @tap="findStarting">寻Ta</view>
			<view class="action-tip">1234123在线</view>
		</view>
		<view class="preparation-box" v-show="preparationSheetStatus">
			<view class="m-tt">筛选</view>
			<view class="m-sex">
				<view class="m-sex-tt">性别</view>
				<view class="m-sex-ct" @tap="checkSex">
					<view class="bda-left col-1-3" data-sex="m" 
					:class="{active: !sex}">男</view>
					<view data-sex="free" class="col-1-3"
					:class="{active: sex == 1}">不限</view>
					<view class="bda-right col-1-3" data-sex="f"
					:class="{active: sex == 2}">女</view>
				</view>
			</view>
			<view class="m-tag"  @tap="checkTag">
				<view class="m-tag-tt">标签</view>
				<view class="m-tag-ct">
					<view data-tag="all" class="bda-left col-1-2"
					:class="{active: !tag}">全部标签</view>
					<view data-tag="myself" class="bda-right col-1-2"
					:class="{active: tag}">
						自定义标签
						<text class="iconfont icon-arrow-left" data-tag="myself"></text>
					</view>
				</view>
			</view>
			<view class="m-btn" @tap="btnHandler">
				<view class="m-btn-confirm active" data-btn="confirm">确定</view>
				<view class="m-btn-cancel bg-glay" data-btn="cancel">取消</view>				
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				poolHeight: '500px',
				startX: 0,
				sex: 1,
				tag: 0,
				preparationSheetStatus: false,
				userList: [{
					tags: ['旅游', '摄影', '设计'],
					cover: '/static/assets/myfirends/firend-01.png',
					name: '张三',
					}, {
					name: '张三',
					tags: ['旅游', '摄影'],
					cover: '/static/assets/myfirends/firend-02.png',
					name: '张三',
					}, {
					name: '张三',
					tags: ['摄影', '设计'],
					cover: '/static/assets/myfirends/firend-03.png',
					name: '张三',
					}, {
					tags: ['跑步', '鬼故事'],
					cover: '/static/assets/myfirends/firend-02.png',
					}, {
					name: '张三',
					tags: ['舞蹈', '音乐', '逛街'],
					cover: '/static/assets/myfirends/firend-03.png',
					}, {
					name: '张三',
					tags: ['旅游', '摄影', '设计'],
					cover: '/static/assets/myfirends/firend-04.png',
					}, {
					name: '张三',
					tags: ['旅游', '摄影', '设计'],
					cover: '/static/assets/myfirends/firend-05.png',
					}, {
					name: '张三',
					tags: ['旅游', '摄影', '设计'],
					cover: '/static/assets/myfirends/firend-06.png',
					}, {
					name: '张三',
					tags: ['旅游', '摄影', '设计'],
					cover: '/static/assets/myfirends/firend-09.png',
					}, {
					name: '张三',
					tags: ['旅游', '摄影', '设计'],
					cover: '/static/assets/myfirends/firend-10.png',
					}, {
					name: '张三',
					tags: ['旅游', '摄影', '设计'],
					cover: '/static/assets/myfirends/firend-02.png',
					}, {
					name: '张三',
					tags: ['旅游', '摄影', '设计'],
					cover: '/static/assets/myfirends/firend-04.png',
					}, {
					name: '张三',
					tags: ['旅游', '摄影', '设计'],
					cover: '/static/assets/myfirends/firend-01.png',
					}, {
					name: '张三',
					tags: ['旅游', '摄影', '设计'],
					cover: '/static/assets/myfirends/firend-02.png',
					}, {
					name: '张三',
					tags: ['旅游', '摄影', '设计'],
					cover: '/static/assets/myfirends/firend-02.png',
					}, {
					name: '张三',
					tags: ['旅游', '摄影', '设计'],
					cover: '/static/assets/myfirends/firend-04.png',
					}, {
					name: '张三',
					tags: ['旅游', '摄影', '设计'],
					cover: '/static/assets/myfirends/firend-01.png',
					}, {
					name: '张三',
					tags: ['cosplay', '旅游', '游泳'],
					cover: '/static/assets/myfirends/firend-02.png',
					}, {
					name: '张三',
					tags: ['工作', '程序员', '二次元'],
					cover: '/static/assets/myfirends/firend-03.png',
				}]
			}
		},
		onLoad(opitons) {

		},
		methods: {
			showPreparation() {
				this.preparationSheetStatus = true
			},
			hidePreparation() {
				this.preparationSheetStatus = false
			},
			btnHandler({target}) {
				let tag = target.dataset.btn
				switch(tag) {
					case 'confirm':
					// 执行筛选操作
					case 'cancel':
				}
				this.hidePreparation()
			},
			checkSex({target}) {
				let tag = target.dataset.sex
				switch(tag) {
					case 'm':
					this.sex = 0
					break
					case 'f':
					this.sex = 2
					break
					case 'free':
					this.sex = 1
				}
			},
			checkTag({target}) {
				let tag = target.dataset.tag
				switch(tag) {
					case 'all':
					this.tag = 0
					break
					case 'myself':
					this.tag = 1
					uni.navigateTo({
						url: '/pages/children/addTag',
					})
				}
			},
			startSide({changedTouches}) {
				// console.log(touches)
				let {clientX} = changedTouches[0]
				this.startX = clientX
			},
			endSide({changedTouches}) {
				let vm = this,
				    {clientX} = changedTouches[0],
					startX = vm.startX,
					reduce = clientX - startX,
					changeMove = Math.ceil(reduce / 20),
					cache = ""
				if(changeMove < 0) {
					cache = vm.userList.pop()
					vm.userList.unshift(cache)
				} else {
					cache = vm.userList.shift()
					vm.userList.push(cache)
				}
				console.log(changeMove)
			},
			findStarting() {
				uni.navigateTo({
					url: '/pages/extra/findTaing'
				})
				
			},
			jumpToChat(value) {
				uni.navigateTo({
					url:'/pages/children/chatFirend?name=' + 'stranger'
				})
			},
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
	.preparation-box {
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 10;
		width: 550upx;
		padding: 36upx 100upx;
		@{bgc}: #fff;
		@{bdra}: 10upx 10upx 0 0;
		.active {
			@{bgc}: #4529a2!important;
			color: #fff!important;
		}
		.m-btn {
			margin-top: 40upx;
			.bg-glay {
				@{bgc}: #ddd;
			}
			view {
				width: 540upx;
				@{bdra}: 30upx;
				height: 60upx;
				display: flex;
				@{ai}: center;
				@{jc}: center;
				margin-top: 12upx;
				@{fs}: 20upx;
			}
		}
		.m-sex,
		.m-tag {
			&-tt {
				@{fs}: 24upx;
				color: #333;
				padding: 18upx 0;
			}
			.bda-left {
				@{bdra}: 30upx 0 0 30upx;
			}
			.bda-right {
				@{bdra}: 0 30upx 30upx 0;
			}
			.col-1-3 {
				width: 180upx;
			}
			.col-1-2 {
				width: 270upx;
			}
			.iconfont {
				transform: rotate(180deg);
				@{fs}: 24upx;
			}
			&-ct {
				display: flex;
				@{jc}: space-between;
				view {
					display: flex;
					@{ai}: center;
					@{jc}: center;
					@{fs}: 20upx;
					color: #555;
					height: 60upx;
					@{bgc}: #ddd;
				}
			}
		}
		.m-tt {
			display: flex;
			@{jc}: center;
			@{fs}: 32upx;
			color: #333;
		}
	}
	.preparation {
		position: absolute;
		right: 30upx;
		top: 30upx;
		display: flex;
		@{ai}: center;
		padding: 4upx 12upx;
		border: 2upx solid #4529a2;
		@{bdra}: 24upx;
		.iconfont {
			color: #4529a2;
			@{fs}: 34upx;
			margin-right: 6upx;
		}
		view {
			@{fs}: 24upx;
			color: #fff;
		}
	}
	.bg-cover {
		width: 750upx;
		position: absolute;
		left: 0;
		top: 0;
		z-index: -1;
	}
	.threebox {
		position: absolute;
		left: 0;
		top: 222upx;
		width: 750upx;
		height: 310upx;
		z-index: 10;
		&-li {
			position: absolute;
			display: flex;
			@{fd}: column;
			@{ai}: center;
			image {
				@{bdra}: 50%;
				width: 110upx;
				height: 110upx;
			}
			.name {
				@{fs}: 24upx;
				color: #d2d2d2;
				margin-top: 8upx;
			}
			.user-tags {
				position: fixed;
				top: 642upx;
				left: 0;
				@{fs}: 24upx;
				color: #fff;
				width: 750upx;
				display: flex;
				@{jc}: center;
				@{fw}: wrap;
				view {
					margin: 0 6upx;
					@{bdra}: 26upx;
					padding: 6upx 14upx;
					border: 2upx solid #39207f;
				}
			}
			transition: transform .75 linear;
		}
	}
	.action {
		position: absolute;
		top: 830upx;
		left: 0;
		width: 750upx;
		display: flex;
		@{fd}: column;
		@{ai}: center;
		&-btn {
			width: 300upx;
			height: 80upx;
			@{bdra}: 40upx;
			word-spacing: 10upx;
			color: #fff;
			@{fs}: 40upx;
			@{bgc}: #4529a2;
			display: flex;
			@{ai}: center;
			@{jc}: center;
		}
		&-tip {
			margin-top: 6upx;
			color: #dedede;
			@{fs}: 24upx;
		}
	}
	.ps-0 {
		left: 306upx;
		top: 300upx;
	}
	.ps-1 {
		left: 180upx;
		top: 230upx;
		transform: scale(.9);
	}
	.ps-2 {
		left: 78upx;
		top: 160upx;
		transform: scale(.8);
	}
	.ps-3 {
		left: 16upx;
		top: 90upx;
		transform: scale(.7);
	}
	.ps-4 {
		left: 86upx;
		top: 56upx;
		transform: scale(.6);
	}
	.ps-5 {
		left: 152upx;
		top: 60upx;
		transform: scale(.5);
		opacity: .9;
	}
	.ps-6 {
		left: 206upx;
		top: 48upx;
		transform: scale(.4);
		opacity: .8;
	}
	.ps-7 {
		left: 250upx;
		top: 36upx;
		transform: scale(.3);
		opacity: .7;
	}
	.ps-8 {
		left: 290upx;
		top: 26upx;
		transform: scale(.2);
		opacity: .6;
	}
	.ps-9 {
		left: 316upx;
		top: 18upx;
		transform: scale(.1);
		opacity: .5;
	}
	.ps-10 {
		right: 316upx;
		top: 18upx;
		transform: scale(.1);
		opacity: .5;
	}
	.ps-11 {
		right: 290upx;
		top: 26upx;
		transform: scale(.2);
		opacity: .6;
	}
	.ps-12 {
		right: 250upx;
		top: 36upx;
		transform: scale(.3);
		opacity: .7;
	}
	.ps-13 {
		right: 206upx;
		top: 48upx;
		transform: scale(.4);
		opacity: .8;
	}
	.ps-14 {
		right: 152upx;
		top: 60upx;
		transform: scale(.5);
		opacity: .9;
	}
	.ps-15 {
		right: 86upx;
		top: 56upx;
		transform: scale(.6);
	}
	.ps-16 {
		right: 16upx;
		top: 90upx;
		transform: scale(.7);
	}
	.ps-17 {
		right: 78upx;
		top: 160upx;
		transform: scale(.8);
	}
	.ps-18 {
		right: 180upx;
		top: 230upx;
		transform: scale(.9);
	}
</style>
