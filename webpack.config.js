const path = require('path');
//启动热更新的 第2步
const webpack = require('webpack');

//导入在内存中生成 HTML 页面的插件
//只要是插件，都一定要放在 plugins节点中去
//作用：
// 1.自动在内存中根据俄指定页面生成一个内存的页面 
// 2.自动把打包好的bundle.js追加到页面中
const htmlWebpackPlugin = require('html-webpack-plugin');

//webpack4还需要装该插件 
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports={
	entry:path.join(__dirname,'./src/main.js'),
	output:{
		path:path.join(__dirname,'./dist'),
		filename:'bundle.js'
	},
	devServer:{
		open:true,//自动打卡开浏览器
		port:3000,//设置启动时的运行端口
		/*contentBase:'src',//指定托管的根目录*/
		hot:true//启动热更新 的 第1步
	},
	plugins:[//配置插件的节点
		new webpack.HotModuleReplacementPlugin(),   //new 一个热更新的模块对象  //这是启用热更新的第3步
		new htmlWebpackPlugin({//创建一个在内存中生成的  HTML页面插件
			//指定模板页面，将来会根据指定页面路劲，去生成内存中的页面
			template:path.join(__dirname,'/src/index.html'),
			filename:'index.html'//指定生成的页面名称
		}),
		new VueLoaderPlugin()
	],
	module:{//这个节点，用于配置第三方的模块加载器
		rules:[//所以第三方模块的匹配规则
			{test:/\.css$/,use:['style-loader','css-loader']},//配置处理 .css 文件 的第三方 loader 规则
			{test:/\.less$/,use:['style-loader','css-loader','less-loader']},//配置处理.less文件的第三方loader规则
			{test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},//配置处理.scss文件的第三方loader规则
			{test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=34729&name=[hash:8]-[name].[ext]'},
			//处理图片路径的loader,limit 图片大于或等于limit值，就不会转为base64，
			{test:/\.(|eot|ttf|svg|woff|woff2)$/,use:'url-loader?limit=34729&name=[hash:8]-[name].[ext]'},//配置处理字体文件的第三方loader规则
			{test:/\.js$/,use:'babel-loader',exclude:/node_modules/},//配置babel来转化高级的es语法
			{test:/\.vue$/,use:'vue-loader'}//配置vue加载器
		]
	},
	resolve: {
		alias: { //修改vue被导入时候的包的路径
			//'vue$':'vue/dist/vue.js'
		}
	}
}