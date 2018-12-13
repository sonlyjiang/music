<template>
	<div class="js_lo">
		
		<div class="js_logo rubberBand"><img src="../../assets/images/logo.png"></div>
		<div class="js_en">
			<router-link to="/enter" class="en">手机号登录</router-link>
			<router-link to="enroll" class="en">注册</router-link>
			<router-link to="/index" class="yke">游客身份进入网易云 &gt;</router-link>

		</div>
		<div class="pp">
			<span class="hxian left"></span>
			<span class="hxian right"></span>
			<p class="wzi">其他登录方式</p>
			<div class="ologin">
				
				<ul>
					<li>
						<router-link to="/weixin">
							<img src="../../assets/images/weixin.png" alt="">
						</router-link>
					</li>
					<li>
						<router-link to="/qq">
							<img src="../../assets/images/qq.png" alt="">
						</router-link>
					</li>
					<li>
						<router-link to="/weibo">
							<img src="../../assets/images/weibo.png" alt="">
						</router-link>
					</li>
					<li>
						<router-link to="/wangyi">
							<img src="../../assets/images/wangyi.png" alt="">
						</router-link>
					</li>
				</ul>
			</div>
		</div>

		<div class="loginbg">
			<img src="../../assets/images/4.gif">
			<img src="../../assets/images/4.gif">
			<img src="../../assets/images/4.gif">
			<img src="../../assets/images/4.gif">
		</div>

    


			
	
	</div>
</template>

	<style scoped>
		.loginbg{
			width:100%;
			height:100%;
			position:absolute;
			z-index:-1;
			background:#fff;
		}
		.loginbg img{
			width:100%;
			height:33.4%;
			display:block;
			
		}
		.js_lo{
			width:100%;
			height:100%;
			position:fixed;
			z-index:100;
			left:0px;
			top:0px;
			
		}
		.js_logo{
			width:30%;
			position:absolute;
			top:10%;
			left:50%;
			margin-left:-15%;
		}
		.js_logo img{
			width:100%;
		}
		.js_en{
			color:#e20000;
			position:absolute;
			left:10%;
			top:35%;
			width:100%;
			text-align:center;
		}
		.js_en .en{
			display:block;
			width:80%;
			padding:10px 0px;
			text-align:center;
			border-radius:25px;
			border:1px solid #e20000;
			box-sizing:border-box;
			color:#e20000;
			margin-bottom:5%;
			cursor:pointer;
		}
		.yke{
			width:80%;
			color:#4c4c4c;
			display:block
		}
		.pp{
			position:absolute;
			bottom:0%;
			left:0px;
			width:100%;
			color:#4c4c4c;
			font-size:14px;
		}
		
		.pp .hxian{
			width: 20%;
			height: 1px;
			background:#c4c4c4;
			display:block;
		}
		.pp .wzi{
			text-align:center;
			width:100%;
			margin-top:-10px;
		}
		.left{
			float:left;
			margin-left:10%
		}
		.right{
			float:right;
			margin-right:10%
		}
		.ologin ul{
			display:flex;
			padding:0px 15%;
		}
		.ologin li{
			flex:1;
			margin:5%;
			text-align:center;
			padding:5px;
			
		}
		.ologin li img{
			width:100%;
			border:1px solid #c4c4c4;
			border-radius:50%;
			padding:5px;
		}






	</style>


