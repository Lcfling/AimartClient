<template>
	<view>
		<view class="plist">
			<view class="items">
				<view class="ileft">
					<view class="tt">可口可乐500mlsbadasdasdkjabdashjdhajsgdjhasgdjhasshkjdhashb</view>
					<view class="pr">￥3.0</view>
					<view class="un">瓶</view>
				</view>
				<view class="iright"><text class="reduce">-</text><text class="num">0</text><text class="add">+</text></view>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.items{
		display: flex;
		justify-content: center;
		padding: 16rpx;
		width: 96%;
	}
	.tt{
		display: flex;
		flex: 1;
		white-space: nowrap;
		
		text-overflow: ellipsis;
	}
	.div{
		min-width: 0;
		
	}
	.pr{
		display: flex;
		width: 120rpx;
		text-align: left;
		flex: 0;
	}
	.un{
		display: flex;
		width: 60rpx;
		text-align: center;
	}
	.ileft{
		display: flex;
		flex: 1;
		flex-direction: row;
		border: 1px solid #ccc;
	}
	.iright{
		width: 120rpx;
		display: flex;
		justify-content: flex-end;
		
		float: right;
		border: 1px solid #ccc;
		text-align: justify;
	}
	.reduce{
		border: 1rpx solid #eee;
		width: 36rpx;
		height: 36rpx;
		border-radius: 8rpx;
		text-align: center;
		line-height: 36rpx;
		margin-right: 16rpx;
		margin-top: 4rpx;
	}
	.add{
		color: #fff;
		width: 36rpx;
		height: 36rpx;
		border-radius: 8rpx;
		text-align: center;
		line-height: 36rpx;
		margin-left: 16rpx;
		background: #c24244;
		margin-top: 4rpx;
	}
	.num{
		margin-top: 6rpx;
	}
</style>
