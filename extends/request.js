const host = 'http://218.77.105.152:2522'

const Route = {
	sendChatContent: '/letter-api/v1/weChat/createChat.shtml',
	getChatContent: '/letter-api/v1/weChat/selectChatPage.shtml',
}
function req(route, data, suc, err) {
	let url = host + Route[route]
	if(typeof fail != 'function') {
		err = () => {}
	}
	uni.request({
		method: 'POST',
		header: {
			"Content-Type": 'application/x-www-form-urlencoded',
		},
		data,
		url,
		success({data}) {
			if(!data.result) {
				suc(data)
			} else {
				uni.showToast({
					title: '数据请求有误',
					icon: 'none',
					duration: 900,
				})
			}
			
		},
		fail() {
			err('fail')
		}
	})
}

export default {
	req,
}