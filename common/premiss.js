
function getLocation(succ) {
	checkPremiss("scope.userLocation", "你未授权位置信息,需要您同意授权", ()=>{
		uni.getLocation({
			success(res) {
				succ({"lat":res.latitude, "long":res.longitude})
			}
		})
	})
}

function checkAlubum (succ) {
	checkPremiss("scope.writePhotosAlbum", "你未授权相册,需要您同意授权", succ)
}

function checkCamera (succ) {
	checkPremiss("scope.camera", "你未授权相机,需要您同意授权", succ)
}

function checkPremiss(key, msg, succ) {
	uni.getSetting({
		success(res) {
			//用户未做选择，直接调用授权，系统会弹窗询问
			if (res.authSetting[key] == void 0) {
				succ()
			}
			//用户拒绝，弹出自定义弹窗
			else if (!res.authSetting[key]) { 
				requestPremiss(key, msg, succ)
			}
			//已授权
			else{
				succ()
			}
		}
	})
}


function requestPremiss(key, msg, succ) {
	wx.showModal({
		title:'提示',
		content:msg,
		showCancel:false,
		confirmText:"去授权",
		success(res) {
			if (res.confirm) {
				uni.openSetting({
					success(data) {
						if (data.authSetting[key]) { //用户完成授权
							succ()
						}else{
							uni.showModal({
								title:'温馨提示',
								content:"未授权",
								showCancel:false
							})
						}
					}
				})
			}
		}
	})
}

export default {
	getLocation,
	checkAlubum,
	checkCamera
}
