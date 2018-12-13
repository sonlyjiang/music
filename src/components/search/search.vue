<template>
	<div class="js_sea">
		<div class="js_seatitle">
			<i class="iconfont icon-arrow-left jiant" @click="back()"></i>
			<input type="text" placeholder="搜索音乐、歌手、歌词、用户" class="js_seainp" v-model="seaval" autofocus>
			<span :class="{'close':clotf,'js_close':true}" @click="close()">×</span>
			<i class="iconfont icon-sousuo js_ssuo" @click="ssuo()"></i>
			{{seatf()}}
		</div>
		<router-link to="/singer" class="js_singer">
		<i class="iconfont icon-ren3 js_singerman"></i><span class="js_span">歌手分类&nbsp;&nbsp;&gt;</span>
		</router-link>
		<h3 class="js_hotsea">热门搜索</h3>
		<ul class="js_rems">
			<li v-for="(v,i) in hotlist">{{v}}</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				hotlist:["陈奕迅","周杰伦新歌","毒液","年少有为","热门歌曲","华语新单","欧美电音"],
				clotf:true,
				seaval:""
			}
		},
		methods:{
			back(){
				this.$router.go(-1);
			},
			seatf(){
				if(this.seaval==""){
					this.clotf=true
				}else{
					this.clotf=false
				}
			},
			close(){
				this.seaval="";
			},
			ssuo(){

			}

		}
	}
</script>

<style>
	.js_sea{
		position: fixed;
		top:0px;
		left:0px;
		z-index: 6;
		width:100%;
		background:#fff;

	}
	.js_seatitle{
		background:#ce3d3e;
		position: relative;
		color:#fff;
		height:50px;
		line-height:50px;
		font-size:14px;
	}
	.js_seatitle i{
		font-size:20px;
		padding-top:10px;
	}
	.js_seainp{
		border:none;
		outline:none;
		border-bottom:1px solid #fff;
		width:65%;
		height:30px;
		background:#ce3d3e;
		color:#fff;
		padding-left:10px;
	}
	input::-webkit-input-placeholder {
        
        color: #dd7778;
         font-size: 12px;
    }
    .close{
    	display:none;
    }
    .js_close{
    	position:absolute;
    	right:28%;
    	font-size:30px;
    }
    .js_seatitle .js_ssuo{
    	position:absolute;
    	right:16%;
    	top:50%;
    	margin-top:-30px;
    	font-size:25px;
    }
    .js_singer{
    	text-align:center;
    	display:block;
    	width:95%;
    	margin:0px auto;
    	border:1px solid #d7d8dd;
    	border-radius:3px;
    	line-height:35px;
    	height:35px;
    	font-size:14px;
    	color:#666;
    	margin-top:15px;

    }
    
    .js_singer .js_singerman{
    	font-size:20px;
    	
    	margin-right:5px;
    	
    }
    .js_singer .js_span{
    	margin-top:-5px;
    }
    .js_hotsea{
    	font-weight:normal;
    	font-size:12px;
    	color:#8d8d8e;
    	height:40px;
    	line-height:40px;
    	margin:0px 2.5%;
    }
    .js_rems{
    	margin:0px 2.5%;
    	color:#393a3a;
    	font-size:14px;

    }
    .js_rems li{
    	border:1px solid #d0d1d2;
    	float:left;
    	margin:0px 10px 10px;
    	line-height:30px;
    	padding:0px 9px;

    }
</style>