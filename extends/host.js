const appid = 'wx65670f9c361d0227',
	  secret = '40cd2c8443bb04808df2d5404f79e83e'
	  
const host = 'http://192.168.2.148/',
	wsHost = 'ws://192.168.2.148:8282',
	tpImport = 'index.php/index/'
	
let uploadImgHost = host + tpImport + 'upload/imgupload',
    uploadAudioHost = host + tpImport + 'upload/audioupload'
    
let userRegister = host + tpImport + 'user/userRegister',
    userIsRegister = host + tpImport + 'user/userIsRegister',
    userBindPhone = host + tpImport + 'user/bindPhone',
    userIsBindPhone = host + tpImport + 'user/isBindPhone'

let messageGetChat = host + tpImport + 'message/getChat',
    messageGetFriendChat = host + tpImport + 'message/getFriendChat'
	
let friendIsFriend = host + tpImport + 'friend/isfriend'

export {appid, secret}

// websocket 连接
export {
	wsHost,
}
// 文件上传
export {
	uploadImgHost,  // post
	uploadAudioHost, // post
}
// 用户相关操作
export {
	userRegister,  // post
	userBindPhone,  // put
	userIsBindPhone,  // post
	userIsRegister,  // post
}
// 聊天记录拉取
export {
	messageGetFriendChat,  // get
	messageGetChat,  // get
}

// 好友
export {
	friendIsFriend, // post
}