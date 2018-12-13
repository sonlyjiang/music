<template>
	<div>
		<section class="js_intitle">

			<ul>
				<li :class="{'js_cbor':tf==1}" @click="change(1)">
					<router-link to="/only">个性推荐</router-link>
				</li>
				<li :class="{'js_cbor':tf==2}" @click="change(2)">
					<router-link to="/musicmenu">歌单</router-link>
				</li>
				<li :class="{'js_cbor':tf==3}" @click="change(3)">
					<router-link to="/station">主播电台</router-link>
				</li>
				<li :class="{'js_cbor':tf==4}" @click="change(4)">
					<router-link to="/chart">排行榜</router-link>
				</li>
			</ul>
			
			
			
			
		</section>
		<router-view></router-view>		
	</div>
</template>

<script>
export default {
	data () {
    return {
      tf:1
    }
  },
  methods:{
    change(n){
      this.tf=n;
      console.log(this.tf);
    }
  }
}
</script>

<style>
	.js_intitle{
		position:fixed;
		top:60px;
		height:35px;
		line-height:35px;
		width:100%;
		left:0px;
		z-index:3;
		background:#fff;
	}
	.js_intitle ul{
		display: flex;
		font-size:14px;
	}
	.js_intitle li{
		flex: 1;
		
		text-align:center;
	}
	.js_intitle li a{
		color: #676767;
		display:block;
		
		border-bottom: 2px solid #fff;
	}
	.js_intitle .js_cbor a{
		color: #ce3d3e;
		border-bottom: 2px solid #ce3d3e;
	}

</style>