<template>
	<div>
		<!--轮播图区域-->
		<mt-swipe>
			<mt-swipe-item v-for="item in lunbotuList" :key="item.url">
				<img :src="item.url" alt="" />
			</mt-swipe-item>
		</mt-swipe>
		<!--六宫格区域-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img :src="img" />
                    <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img :src="img" />
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img :src="img" />
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img :src="img" />
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img :src="img" />
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img :src="img" />
                    <div class="mui-media-body">联系我们</div></a></li>
          
        </ul> 
		
		
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	import img from '../../images/hcy.jpg'
	export default {
		data(){
			return {
				lunbotuList :[],//保存轮播图的数组
				img: img,
			}
		},
		created(){
			this.getSwipeData();
		},
		methods:{
			getSwipeData(){
				this.$http.get('http://www.liulongbin.top:3005/api/getprodlist').then(result =>{
					console.log(result.body)//http://vue.studyit.io/api/getlunbo
					if(result.body.status === 0){
						this.lunbotuList = result.body.message;
					}else{
						Toast('获取数据失败')
					}
					
				})
			}
		}
	}
	
	
</script>

<style lang="scss" scoped>
	.mint-swipe{
		height:100px;
		
		.mint-swipe-item{
			&:nth-child(1){
				background: red;
			}
			&:nth-child(2){
				background: green;
			}
			&:nth-child(3){
				background: blue;
			}
			&:nth-child(4){
				background: yellow;
			}
			img{
				width: 100%;
			}
		}
	}
	.mui-grid-view.mui-grid-9{
		background: #fff;
		border: none;
		
		.mui-media{
			border: 0;
		}
		img{
		width: 60px;
		height: 60px;
	}
	}
	
</style>
<!--vue-resource-->