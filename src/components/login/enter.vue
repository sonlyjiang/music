<template>
	<div class="phone">
		<div class="">
		<h3 class="p_h3"><i class="iconfont icon-arrow-left jiant" @click="back()"></i>手机号登录</h3>

		</div>
		<div class="js_loginin">
			<div>
				<i class="iconfont icon-tel js_lfon js_lfon1"></i>+86
				<input type="text" placeholder="请输入手机号">
			</div>
			<div>
				<i class="iconfont icon-icon- js_lfon"></i>
				<input type="password" placeholder="请输入密码">
			</div>
			<span class="tijiao">登录</span>
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