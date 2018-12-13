<template>
	<div class="js_localone phone">
		<div class="">
		<h3 class="p_h3"><i class="iconfont icon-arrow-left jiant" @click="back()"></i>本地歌单</h3>

		</div>
		
	</div>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1);
			}
		}
	}
</script>
	<style>
		.js_localone{
			position:fixed;
			top:0px;
			z-index:6;
			height:60px;
		}
	</style>