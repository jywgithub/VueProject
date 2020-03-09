//1.导入vue-router包
import VueRouter from 'vue-router'

//2.手动安装VueRouter
Vue.use(VueRouter)

//3.创建路由对象
var router = new VueRouter({
	routes:[]
});
//把router路由对象 暴露出去
export default  router
