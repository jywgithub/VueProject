//入口文件
import Vue from 'vue'

/*//1.1 导入路由的包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter);
*/

//1.3导入自己的router.js路由模块
import router from './router.js'

//2.1 导入vue-resource
import VueResource from 'vue-resource'
//2.2 安装 VueResource
Vue.use(VueResource)

//按需导入Mint-UI中的组件
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)

//导入轮播组件
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


//导入MUI的样式
import './lib/mui/dist/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//导入App 根组件	
import app from './App.vue'

var vm = new Vue({
	el :'#app',
	render:c => c(app),
	router //挂载路由对象到VM实例
})
