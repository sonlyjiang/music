
<template>
	<div class="js_musicplay">
		<div class="js_mbgcolor">
			<img :src=musicpic alt="">
			<div class="js_colorfilter"></div>
		</div>
		<div class="js_mconall">
			<div class="js_mphead">
				<span class="js_goback" @click="back()">
					<i class="iconfont icon-arrow-left"></i>
				</span>
				<div class="js_musich1">
					<h3 class="js_mhead1">{{musictitle}}</h3>
					<p class="js_msinger1">{{singer}}</p>
				</div>
				<span class="js_share">
					<i class="iconfont icon-icon"></i>
				</span>
			</div>
			<div class="js_musicbg">
				<div class="js_mbgtop">
					<img src="../../assets/images/styli2.png" alt="">
				</div>
				<div :class="{'js_mturn':true,'js_mturn1':goturn}">
					<div class="js_mtimg">
						<img :src=musicpic alt="">
					</div>
					<div class="js_tdisk">
						<img src="../../assets/images/disk.png" alt="">
					</div>
					
				</div>
			</div>
			<div class="js_mcontrol">
				<div class="js_mcoth">
					<ul>
						<li>
							<i class="iconfont icon-aixin-copy"></i>
						</li>
						<li>
							<i class="iconfont icon-xiazai"></i>
						</li>
						<li>
							<i class="iconfont icon-pinglun2"></i>
						</li>
						<li>
							<router-link to="/comment">
								<i class="iconfont icon-more1170511easyiconnet"></i>
							</router-link>
							
						</li>
					</ul>
				</div>
				<div class="js_mnext">
					<ul>
						<li>
							<i class="iconfont icon-xunhuan"></i>
						</li>
						<li>
							<i class="iconfont icon-shangyishou"></i>
						</li>
						<li @click="bt()" class="bffon">
							<i :class="{'iconfont':true, 'icon-play_icon':true,'bffont':!bftf}"></i>
							<i :class="{'iconfont':true, 'icon-bofang1':true,'bffont':bftf}"></i>
						</li>
						<li>
							<i class="iconfont icon-xiayishou"></i>
						</li>
						<li>
							<i class="iconfont icon-sanheng"></i>
						</li>
					</ul>
				</div>
			</div>
		</div>	
		{{music()}}

	</div>
	
</template>

	<script>
		export default{
			data(){
				return {
					goturn:false,
					bftf:true,
					musicpic:'./src/assets/images/disk1.jpg',
					musicmenu:[],
					musicid:0,
					musictitle:'',
					singer:'',
					num:0,
				}
			},
			methods:{
				back(){
					this.$router.go(-1);
				},
				bt(){
					this.bftf=!this.bftf;
					this.goturn=!this.goturn;
					this.$store.state.bftf=this.bftf;

				},
				music(){
					

				}
			},
			mounted(){
			    this.$http.get('./src/assets/data/music.json', {
			    params: {
			      user: 12345,
			      pass:123
			    }
			  })
			  .then((response)=>{
			    
			    this.musicmenu=response.data.result.data;
			    console.log(this.musicmenu.menu[0].title);

			    this.musicid=this.$store.state.musicid;
				console.log('this.musicid'+this.musicid);
				this.musicpic=this.musicmenu[this.musicid].imgsrc;
				this.musictitle=this.musicmenu[this.musicid].title;
				this.singer=this.musicmenu[this.musicid].singer;
				this.bftf=!this.$store.state.bftf;
				this.goturn=!this.bftf;

			  })
			  .catch(function (error) {
			    console.log(error);
			  })
			   
			  }
		}
	</script>


<style>
	.js_musicplay{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0px;
		left: 0px;
		z-index: 3;
	}
	.js_mbgcolor{
		width: 150%;
		height: 150%;
		position: absolute;
		top: -20%;
		left: -20%;
		z-index: -1;
		overflow: hidden;
	}
	.js_colorfilter{
		width: 100%;
		height: 100%;
		background: #fff;
		opacity: 0.1;
		position:absolute;
		top:0px;
		left:0px;
	}
	.js_mbgcolor img{
		width: 100%;
	    height: 100%;
	    filter: blur(50px);
	}
	.js_mconall{
		color:#fff;
	}
	.js_mphead{
		width: 100%;
		height: 50px;
		position: relative;
	}
	.js_goback{
		position: absolute;
		
		left:5%;
		line-height: 60px;
	}
	.js_goback i{
		font-size: 30px;
	}
	.js_musich1{
		width: 100%;
		height: 50px;
		border-bottom: 1px solid #FFFAF0;
		padding-left: 18%;
		line-height:30px;
	}
	.js_musich1 p{
		line-height:20px;
		color:#FFFAFA;
	}
	.js_msinger1{
		font-size:16px;
	}
	.js_share{
		position:absolute;
		right:5%;
		top:0px;
		line-height:50px;
		
	}
	.js_share i{
		font-size:20px;
	}
	.js_musicbg{
		position:relative;
		width:428px;
		height:428px;
		overflow:hidden;
		
		left:50%;
		margin-left:-214px;

	}
	
	.js_mbgtop{
		position:absolute;
		width:80%;
		height:0px;
		padding-bottom:100%;
		top:-171.2px;
		
		z-index:2;
		left:50%;
		margin-left:-45%;
		text-align:center;
	}
	.js_mbgtop img{
		width:100%;
	}
	.js_mturn{
		width:80%;
		height:0px;
		padding-bottom:80%;
		position:relative;
		margin:85px auto 0px;
		text-align:center;
		overflow:hidden;
	}
	.js_mturn1{
		animation: go 15s infinite linear;
	}
	@keyframes go{
		0%{
			transform: rotate(0deg);
		}
		100%{
			transform: rotate(360deg);
		}
	}
	.js_mturn img{
		
	}
	.js_mtimg{
		width:100%;
		overflow:hidden;
		border-radius:50%;
		margin-top:12%;
	}
	.js_mtimg img{
		width:70%;
	}
	.js_tdisk{
		width:100%;
		position:absolute;
		top:0px;
		left:0px;

	}
	.js_tdisk img{
		width:100%;
		
	}
	.js_mcontrol{
		position: absolute;
		bottom: 10px;
		left: 0px;
		width:100%;
	}
	.js_mcontrol i{
		color: #fff;
		font-size:25px;
	}
	.js_mcoth{
		width:100%;
		height:40px;

	}
	.js_mcoth ul{
		display:flex;
		padding:0px 12%;
	}
	.js_mcoth ul li{
		flex:1;
		text-align:center;
		
	}
	.js_mnext{
		line-height:60px;
	}
	.js_mnext i{

	}
	.js_mnext ul{
		display:flex;
	}
	.js_mnext ul li{
		flex:1;
		text-align:center;
	}
	.bffont{
		display:none;
	}
	.bffon i{
		font-size:35px;
	}
</style>