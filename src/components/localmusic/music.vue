<template>
	<div class="js_localmusic">
		<div class="js_local">
			<ul>
				<li>
					<router-link to="/local">
						<i class="iconfont icon-tel"></i>
						<span>本地音乐<span class="js_font12">({{localnum}})</span></span>
					</router-link>
						
				</li>
				<li>
					<router-link to="/local">
						<i class="iconfont icon-play_icon"></i>
						<span>最近播放<span class="js_font12">({{localact}})</span></span>
					</router-link>
						
				</li>
				<li>
					<router-link to="/local">
						<i class="iconfont icon-xiazai"></i>
						<span>下载管理<span class="js_font12">({{localdown}})</span></span>
					</router-link>
						
				</li>
				<li>
					<router-link to="/local">
						<i class="iconfont icon-ren3"></i>
						<span>我的收藏<span class="js_font12">({{collection}})</span></span>
					</router-link>
						
				</li>
			</ul>
		</div>
	</div>
</template>
	<script>
		export default{
			data(){
				return {
					localnum:256,
					localact:100,
					localdown:230,
					collection:103,
				}
			}
		}
	</script>
<style>
	.js_localmusic{
		margin-top: 60px;
	}
	.js_local{
		margin-left:5%;
		line-height:40px;
		font-size:14px;
	}
	.js_local li{
		margin-top:5px;
	}
	.js_local li>span{
		border-bottom:1px solid #cecece;
		display:inline-block;
		width:85%;
	}
	.js_local .js_font12{
		font-size:12px;
		color:#666;
		margin-left:5px;
	}
	.js_local a{
		color:#000;
		display:block;
		wdith:100%;
	}
	.js_local i{
		color: #ce3d3e;
		margin-right:10px;
		font-size:20px;
	}
</style>

