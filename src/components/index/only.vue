<template>
	<div class="js_only">
	
		<div>
			<mt-swipe :auto="2000" @change="handleChange" :prevent=true>
			  <mt-swipe-item><img src="../../assets/images/1.jpg" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/images/2.jpg" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/images/3.jpg" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/images/4.jpg" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/images/5.jpg" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/images/6.jpg" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/images/7.jpg" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/images/8.jpg" alt=""></mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="js_ondiv1">
			<div>
				<div class="js_od1i js_od1i1">
					<i class="iconfont icon-weibiaoti-"></i>
				</div>
				<p>私人FM</p>
			</div>
			<div>
				<div class="js_od1i js_od1i2">
					<i class="myiconfont">{{time}}</i>
				</div>
				<p>每日歌曲推荐</p>
			</div>
			<div>
				<div class="js_od1i js_od1i3">
					<i class="iconfont icon-shuju"></i>
				</div>
				<p>云音乐热歌榜</p>
			</div>			
		</div>

		<div class="js_ondiv2">
			<div class="js_ondiv21">
				<h3><i class="iconfont icon-icon--"></i>推荐歌单</h3>
				<router-link to="/musicmenu" class="js_od2a">更多&gt;</router-link>
			</div>
			<div class="js_ondiv22" v-for="(v,i) in imgsrc">
				<div>
					<span class="js_od22t">
						<i class="iconfont icon-erji"></i>
						{{v.imgnum}}万
					</span>
					<img :src="v.imgs" alt="">
				</div>
				<p class="js_od22p">{{v.imgcon}}</p>
			</div>
		</div>
		<div class="js_ondiv2">
			<div class="js_ondiv21">
				<h3><i class="iconfont icon-yinle-"></i>独家放送</h3>
				<router-link to="/musicmenu" class="js_od2a">更多&gt;</router-link>
			</div>
			<div class="js_ondiv22" v-for="(v,i) in imgsrc">
				<div>
					<span class="js_od22t">
						<i class="iconfont icon-erji"></i>
						{{v.imgnum}}万
					</span>
					<img :src="v.imgs1" alt="">
				</div>
				<p class="js_od22p">{{v.imgcon}}</p>
			</div>
		</div>
		<mt-spinner type="fading-circle" color="#ce3d3e"  :size="30" class="js_lazy"></mt-spinner>

	</div>
</template>
	<script>

		export default{
			data(){
				return{
					time:new Date().getDate(),
					imgsrc:[
						{
							imgs:require('../../assets/images/menu1.jpg'),
							imgs1:require('../../assets/images/menu11.jpg'),
							imgcon:"谁的青春被藏在那个夏天",
							imgnum:237
						},
						{
							imgs:require('../../assets/images/menu2.jpg'),
							imgs1:require('../../assets/images/menu22.jpg'),
							imgcon:"「华语」浮生一切，从此都框印在窗外,带你再次归来",
							imgnum:25
						},
						{
							imgs:require('../../assets/images/menu3.jpg'),
							imgs1:require('../../assets/images/menu33.jpg'),
							imgcon:"那些，不会随着时间褪色的【华语经典】,在这里",
							imgnum:56
						},
						{
							imgs:require('../../assets/images/menu4.jpg'),
							imgs1:require('../../assets/images/menu44.jpg'),
							imgcon:"我还是欠你一句好好的告别",
							imgnum:97
						},
						{
							imgs:require('../../assets/images/menu5.jpg'),
							imgs1:require('../../assets/images/menu55.jpg'),
							imgcon:"时间偷走如果，只留下结果",
							imgnum:213
						},
						{
							imgs:require('../../assets/images/menu6.jpg'),
							imgs1:require('../../assets/images/menu66.jpg'),
							imgcon:"用我一生换你十年天真无邪",
							imgnum:108
						}
					]
				}
			},
			methods: {
			  handleChange(index) {
			    
			  }
			}			
		}
	</script>
<style>
	.js_only{
		margin-top:97px;
		margin-bottom:60px;
		width:100%;
		position:relative;
	}
	.mint-swipe{
		width: 100%;
		

	}
	.mint-swipe-indicator{
		width:6px;
		height:6px;
	}
	.mint-swipe-items-wrap{
		width: 100%;
		padding-bottom:46%;
	}
	.mint-swipe-items-wrap img{
		width: 100%;
	}
	mint-swipe-indicator .is-active{
		background:#ce3d3e!important;
	}
	.mint-swipe-indicator{
		opacity:0.5;
		background:#fff;
	}
	.mint-swipe-indicator.is-active {
	    background: red;
	}
	.js_ondiv1{
		font-size:12px;
		text-align:center;
		display:flex;
		padding:0px 5% 2%;;
		border-bottom:1px solid #e3e5e6;
	}
	.js_ondiv1>div{
		flex:1;
		padding:10px 0px;
	}
	.js_od1i i{
		border:1px solid #ce3d3e;
		border-radius:50%;
		font-size:23px;
		line-height:30px;
		height:30px;
		width:30px;
		margin:0px auto 5px;
		display:block;
		padding:5px;
		color:#ce3d3e;
	}
	.js_od1i1 i{
		line-height:35px;
		font-weight:bold;
		font-size:25px;
	}
	.js_od1i3 i{
		font-size:23px;
		line-height:35px;
	}
	.js_ondiv2{
		width:100%;
		font-size:12px;
		padding:0px 3% 0px;
		overflow:hidden;
	}
	.js_ondiv21{
		width:100%;
		position:relative;
	}
	.js_ondiv21 h3{
		margin:2% 0px 1.5%;
		color:#333333;
	}
	.js_ondiv21 h3 i{
		color:#ce3d3e;
		margin-right:1%;
		font-weight:normal;
	}
	.js_ondiv21 a{
		color:#707070;
		position:absolute;
		right:5%;
		top:0px;
	}
	.js_ondiv22{
		float:left;
		width:30%;
		margin-right:2%;
		position:relative;
		padding-bottom:5%;
		overflow:hidden;
	}
	.js_ondiv22 img{
		width:100%;
	}
	.js_od22t{
		position:absolute;
		right:0%;
		width:100%;
		text-align:right;
		padding:0px 5px;
		font-size:12px;
		font-size:10px;
		background:#000;
		color:#fff;
		opacity:0.3;
	}
	.js_od22p{
		line-height:18px;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		height:36px;
		width:100%;
		-webkit-box-orient: vertical;
	}
	.js_lazy{
		margin:10px auto 30px;
		width:30px;
		display:block;
	}
</style>