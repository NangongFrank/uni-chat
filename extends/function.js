function getResidueHeight(usedHeight) {
	if(!usedHeight) {
		return {
			pageMinHeight: 0,
			viewMinHeight: 0,
		}
	} else {
		done(usedHeight).then(res => {
			return res
		})
	}
	function done(usedHeight) {
		return new Promise((resolve, reject) => {
			uni.getSystemInfo({
				success({pixelRatio, screenHeight}) {
					let height = 0,
						hei = 0
					usedHeight += 64
					// #ifdef MP-WEIXIN
					resolve({
						pageMinHeight: screenHeight + 'px',
						viewMinHeight: screenHeight - usedHeight + 'px',
					})
					// #endif
				},
				fail() {
					reject()
				}
			})
		})
	}
	
}


function login() {
	function getProvider() {
		return new Promise((resolve, reject) => {
			uni.getProvider({
				service: 'oauth',
				success({service, provider}) {
					resolve(provider[0], service)						
				},
				fail() {
					reject()
				}
			})
		})
	}
	getProvider().then((provider, service) => {
		return new Promise((resolve, reject) => {
			uni.login({
				provider,
				timeout: 2000,
				success({authResult}) {
					resolve(authResult)
				},
				fail() {
					reject()
				}
			})
		})
	}).catch(() => {
		console.log('get provider fail')
	}).then(authResult => {
		console.log(authResult)
	}).catch(() => {
		console.log('login action error')
	})
}

export default {
	getResidueHeight,
	login,
}
