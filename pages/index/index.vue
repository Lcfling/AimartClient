
<template>
	<view class="bodybg">
		
		<view class="content">
			<view class="openborder circle">
				<view class="open circle">
					<view class="f48 pt48"><text class="iconfont icon-scan blue"></text></view>
					<text class="opentext">扫码开门</text>
				</view>
			</view>
			
			
			<view class="footer">
				<view class="btn">
					
					<view class="f36"><text class="iconfont icon-me f32 brown"></text></view>
					<text  class="btntext">我的信息</text>
				</view>
				<view class="btn">
					
					<view class="f36"><text class="iconfont icon-travel f32 brown"></text></view>
					<text class="btntext">附近超市</text>
				</view>
				<view class="btn">
					
					<view class="f36"><text class="iconfont icon-smail f32 brown"></text></view>
					<text  class="btntext">联系客服</text>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	
	.bodybg{
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(to bottom, #fff,#fff);
		
	}
	.c1{
		position: absolute;
		width: 90rpx;
		height: 90rpx;
		background-color: #fff;
	}
	
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: 10;
	}
	.footer{
		position: absolute;
		bottom: 100rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		color: #000;
	}
	.openborder{
		margin-top: 360rpx;
		background-image: linear-gradient(to bottom right, #2fa9c3, #4ed9f7);
		/*background-color: rgba(236,232,228,0.8);*/
		margin-bottom: 50rpx;
		box-shadow: 0 0 32rpx #ccc;
	}
	.open {
		background-color: #FFFFFF;
		height: 296rpx;
		width: 296rpx;
		margin: 36rpx;
		text-align: center;
		color: #000;
	}
	.opentext{
		font-size: 42rpx;
		line-height: 68rpx;
		width: 200rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}
	.btn{
		line-height: 96rpx;
		padding: 24rpx;
		text-align: center;
		border-radius: 36rpx;
		background-color: #fff;
		margin-left: 32rpx;
		margin-right: 32rpx;
		box-shadow:0 0 32rpx #ccc;
	}
	.btntext{
		font-size: 28rpx;
	}
	.blue{
		color: #2ea9c4;
	}
	.brown{
		color: #6b858f;
	}
.title{
	text-align: center;
	line-height: 64rpx;
}
	
</style>
