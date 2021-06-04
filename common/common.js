
import http from './http.js';
import WXBizDataCrypt from "./WXBizDataCrypt.js"
const host="http://192.168.0.116:8077"
function getUserInfo(succ) {
	let profile = uni.getStorageSync("profile")
	console.log(profile)
	if (profile == void 0 || profile.length == 0) {
		//获取用户信息
		uni.getUserProfile({
			desc:"注册",
			success(res) {
				wx.hideLoading()
				uni.setStorageSync("profile",res.userInfo)
				succ(res.userInfo)
			},
			fail(err) {
				wx.hideLoading()
				console.log(err)
			}
		})
	}else{
		succ(profile)
	}
}

function getLoginCode(succ) {
	uni.login({
		success(res) {
			succ(res.code)
		}
	})
}

function isLogin() {
	var token = uni.getStorageSync("token")
	if (token == void 0 || token.length == 0) {return false}
	return true
}

function isUserInfo() {
	let profile = uni.getStorageSync("profile")
	if (profile == void 0 || profile.length == 0) {
		return false
	}
	return true
}

function isBindPhone() {
	let phone = uni.getStorageSync("phone")
	if (phone == void 0 || phone.length == 0) {
		return false
	}
	return true
}

function loginIfNeed(username,password,succ){
	http.post("/store/login", {"account":username, "password":password}, (res)=> {
		console.log(res)
		uni.setStorageSync("token", res.Token)
		uni.setStorageSync("uid", res.Id)
		succ()
	})
}

function decryptData(encryptedData, iv){
	var sessionKey = uni.getStorageSync("skey")
	var appId = "wx09cd63acf1709730"
	var pc = new WXBizDataCrypt(appId, sessionKey)
	var data = pc.decryptData(encryptedData , iv)
	console.log('解密后 data: ', data)
	return data
}

function updateUserInfo() {

}

function formatTime(timestamp) {
	var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
	var Y = date.getFullYear() + '-';
	var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1):date.getMonth()+1) + '-';
	var D = (date.getDate()< 10 ? '0'+date.getDate():date.getDate())+ ' ';
	var h = (date.getHours() < 10 ? '0'+date.getHours():date.getHours())+ ':';
	var m = (date.getMinutes() < 10 ? '0'+date.getMinutes():date.getMinutes()) + ':';
	var s = date.getSeconds() < 10 ? '0'+date.getSeconds():date.getSeconds();
	return Y+M+D+h+m+s;
}

function gup(name, url) {
  if (!url) url = location.href;
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(url);
  return results == null ? null : results[1];
}

function getUrlParams(url) {
	let query = url.split("?")[1];
	let zparams = query.split("&");
	var params = {}
	for (var i=0;i<zparams.length;i++) {
		var sp = zparams[i].split("=")
		params[sp[0]] = sp[1]
	}
	
	return params
}

export default {
	getUserInfo,
	getLoginCode,
	isLogin,
	loginIfNeed,
	isUserInfo,
	isBindPhone,
	decryptData,
	formatTime,
	gup,
	getUrlParams
}