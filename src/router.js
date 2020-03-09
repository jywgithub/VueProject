import Vue from 'vue'
//1.导入vue-router包
import VueRouter from 'vue-router'

//导入响应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'

//2.手动安装VueRouter
Vue.use(VueRouter)

//3.创建路由对象
var router = new VueRouter({
	routes:[
		{path:'/',redirect:'/home'},
		{path:'/home',component :HomeContainer},
		{path:'/member',component :MemberContainer},
		{path:'/search',component :SearchContainer},
		{path:'/shopcar',component :ShopcarContainer}
	],
	linkActiveClass:'mui-active'//覆盖默认的路由高亮的类,默认的类是router-link-active
});
//把router路由对象 暴露出去
export default  router
