function post(uri, params, succ, title="加载中") {
	doRequest(uri, params, "POST", succ, title)
}

function get(uri, params, succ, title="加载中") {
	doRequest(uri, params, "GET", succ, title)
}

function doRequest(uri, params, method, succ, title) {
	//var host = "http://129.211.114.135:3000/mock/17"
	host = "http://192.168.0.116:8077"
	//host = "https://aimark.webvtao.com:8843"
	var url = host+uri
	
	uni.showLoading({
		mask:true,
		title:title
	})
	uni.request({
		url:url,
		method:method,
		header:{
			"content-type":"application/x-www-form-urlencoded",
			"uid":uni.getStorageSync("uid"),
			"token":uni.getStorageSync("token"),
			},
		data:params,
		success(res){
			uni.hideLoading()
			if (res.data.code == 1) {
				if (res.data.session_key != void 0) {
					uni.setStorageSync("skey", res.data.session_key)
				}
				console.log("request success")
				succ(res.data.data)
			}else{
				uni.showToast({
					icon:'none',
					title:res.data.message
				})
			}
			
		},
		fail(err) {
			console.log(err)
			uni.hideLoading()
			wx.showToast({
				icon:'none',
				title:err.errMsg
			})
		}
	})
}

export default {
	post,
	get
}
