<template>
	<view class="pool" :style="{height: poolHeight}">
		<image class="bg-cover" src="/static/assets/findta/bg-find.jpg" mode="widthFix"
		v-if="!isFinding" ></image>
		<image class="bg-cover" src="/static/assets/findta/bg.jpg" mode="widthFix"
		v-else></image>
		<image class="cover" src="/static/assets/findta/cover.png" mode="widthFix"
		v-if="isFinding" 
		:class="{animation: isFinding}"></image>
		<view class="threebox"
		v-if="!isFinding"
		@touchstart="startSide"
		@touchend="endSide">
			<view class="threebox-li"
			:class="['ps-' + index]"
			@tap="jumpToChat(value)"
			v-for="(value, index) in userList"
			:key="index">
				<image :src="value.cover"></image>
				<view class="text" v-text="value.tip"></view>
			</view>
		</view>
		
		<view class="action" v-if="!isFinding">
			<view class="action-btn" @tap="findStarting">寻找</view>
			<view class="action-tip">1234123在线</view>
		</view>
		<view class="action" v-else>
			<view class="action-text">正在茫茫人海中寻找那一粟</view>
			<view class="action-text">只欠一个转身</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				poolHeight: '500px',
				isFinding: false,
				startX: 0,
				userList: [{
					tip: '90后, 音乐, 美食',
					cover: '/static/assets/myfirends/firend-01.png',
					}, {
					tip: '90后, 音乐, 美食',
					cover: '/static/assets/myfirends/firend-02.png',
					}, {
					tip: '90后, 音乐, 美食',
					cover: '/static/assets/myfirends/firend-03.png',
					}, {
					tip: '90后, 音乐, 美食',
					cover: '/static/assets/myfirends/firend-02.png',
					}, {
					tip: '90后, 音乐, 美食',
					cover: '/static/assets/myfirends/firend-03.png',
					}, {
					tip: '90后, 音乐, 美食',
					cover: '/static/assets/myfirends/firend-04.png',
					}, {
					tip: '90后, 音乐, 美食',
					cover: '/static/assets/myfirends/firend-05.png',
					}, {
					tip: '90后, 音乐, 美食',
					cover: '/static/assets/myfirends/firend-06.png',
					}, {
					tip: '90后, 音乐, 美食',
					cover: '/static/assets/myfirends/firend-09.png',
					}, {
					tip: '90后, 音乐, 美食',
					cover: '/static/assets/myfirends/firend-10.png',
					}, {
					tip: '90后, 音乐, 美食',
					cover: '/static/assets/myfirends/firend-02.png',
					}, {
					tip: '90后, 音乐, 美食',
					cover: '/static/assets/myfirends/firend-04.png',
					}, {
					tip: '90后, 音乐, 美食',
					cover: '/static/assets/myfirends/firend-01.png',
					}, {
					tip: '90后, 音乐, 美食',
					cover: '/static/assets/myfirends/firend-02.png',
					}, {
					tip: '90后, 音乐, 美食',
					cover: '/static/assets/myfirends/firend-02.png',
					}, {
					tip: '90后, 音乐, 美食',
					cover: '/static/assets/myfirends/firend-04.png',
					}, {
					tip: '90后, 音乐, 美食',
					cover: '/static/assets/myfirends/firend-01.png',
					}, {
					tip: '90后, 音乐, 美食',
					cover: '/static/assets/myfirends/firend-02.png',
					}, {
					tip: '90后, 音乐, 美食',
					cover: '/static/assets/myfirends/firend-03.png',
				}]
			}
		},
		onLoad(opitons) {

		},
		methods: {
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
				let vm = this
				vm.isFinding = true
				setTimeout(() => {
					vm.isFinding = false
				}, 2000)
				
			},
			jumpToChat(value) {
				uni.navigateTo({
					url:'/pages/children/chatFirend?name=' + 'stranger'
				})
			},
		},
		watch: {
			isFinding(value) {
				let title = '寻Ta'
				if(value) {
					title = '寻Ta中...'
				}
				uni.setNavigationBarTitle({title})
			}
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
	.bg-cover,
	.cover {
		width: 750upx;
		position: absolute;
		left: 0;
		top: 0;
		z-index: -1;
	}
	.cover {
		top: 270upx;
		z-index: 0;
	}
	.animation {
		animation: shashwo 1.5s ease-in-out infinite reverse;
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
			.text {
				@{fs}: 24upx;
				color: #d2d2d2;
				margin-top: 8upx;
				width: 100upx;
				.word-online();
			}
			transition: transform .75 linear;
		}
	}
	@keyframes shashwo {
		0% {opacity: 1;}
		10% {
			opacity: .1;
		}
		20% {
			opacity: .2;
		}
		30% {
			opacity: .3;
		}
		30% {
			opacity: .3;
		}
		40% {
			opacity: .4;
		}
		50% {
			opacity: .5;
		}
		60% {
			opacity: .6;
		}
		70% {
			opacity: .7;
		}
		80% {
			opacity: .8;
		}
		90% {
			opacity: .9;
		}
		100% {opacity: 1;}
	}
	.action {
		position: absolute;
		top: 830upx;
		left: 0;
		width: 750upx;
		display: flex;
		@{fd}: column;
		@{ai}: center;
		&-text {
			margin-top: 4upx;
			@{fs}: 24upx;
			color: #cecece;
		}
		&-btn {
			width: 300upx;
			height: 80upx;
			@{bdra}: 40upx;
			letter-spacing: 14upx;
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
	}
	.ps-6 {
		left: 206upx;
		top: 48upx;
		transform: scale(.4);
	}
	.ps-7 {
		left: 250upx;
		top: 36upx;
		transform: scale(.3);
	}
	.ps-8 {
		left: 290upx;
		top: 26upx;
		transform: scale(.2);
	}
	.ps-9 {
		left: 316upx;
		top: 18upx;
		transform: scale(.1);
	}
	.ps-10 {
		right: 316upx;
		top: 18upx;
		transform: scale(.1);
	}
	.ps-11 {
		right: 290upx;
		top: 26upx;
		transform: scale(.2);
	}
	.ps-12 {
		right: 250upx;
		top: 36upx;
		transform: scale(.3);
	}
	.ps-13 {
		right: 206upx;
		top: 48upx;
		transform: scale(.4);
	}
	.ps-14 {
		right: 152upx;
		top: 60upx;
		transform: scale(.5);
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
