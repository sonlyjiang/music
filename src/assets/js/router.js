import '../font/iconfont.css';
import '../font/iconfont.js';
import '../css/login.css';

import '../css/animate.css';
import vueRouter from 'vue-router';
import login from "../../components/login/login.vue";
import index from "../../components/index/index.vue";
// import otherlogin from "../../components/login/otherlogin.vue";
import enter from "../../components/login/enter.vue";
import enroll from "../../components/login/enroll.vue";
import only from "../../components/index/only.vue";
import musicmenu from "../../components/index/musicmenu.vue";
import chart from "../../components/index/chart.vue";
import station from "../../components/index/station.vue";
import search from "../../components/search/search.vue";
import music from "../../components/localmusic/music.vue";
import local from "../../components/localmusic/local.vue";
import musicplaying from "../../components/musicplaying/musicplaying.vue";
export default new vueRouter({
	routes:[
		{
			path:'/login',component:login,
		},
		{
			path:'/enter',component:enter
		},
		{
			path:'/enroll',component:enroll
		},
		{
			path:'/index',
			component:index,
			redirect:'/only',
			children:[
				{
					path:'/only',component:only
				},
				{
					path:'/musicmenu',component:musicmenu
				},
				{
					path:'/station',component:station
				},
				{
					path:'/chart',component:chart
				}
			]
		},
		{
			path:'/search',component:search
		},
		{
			path:'/music',component:music
		},
		{
			path:'/local',component:local
		},
		{
			path:'/musicplaying',component:musicplaying
		},
		// {
		// 	path:'/',redirect:only
		// },
		{
			path:'/',component:login
		},
	]
})
