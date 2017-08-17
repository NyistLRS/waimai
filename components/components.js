/*  首页   */
var swiper = Vue.component('swiper-view',{
	template:'<div class="my-swiper"><mt-swipe :auto="4000">'
			  	+'<mt-swipe-item class="slide1">1</mt-swipe-item>'
			  	+'<mt-swipe-item class="slide2">2</mt-swipe-item>'
			  	+'<mt-swipe-item class="slide3">3</mt-swipe-item>'
			+'</mt-swipe></div>'
});
var list = Vue.component('list-view',{
	template : '<div class="listView"></div>'
});
var gg = Vue.component('gg-view',{
	data(){
		return {
			img1Url :'./img/2.jpg',
			img2Url :'./img/3.jpg',
			img3Url :'./img/4.jpg'
		}
	},
	template:'<div class="gg"><div class="gg-item"><div class="gg-img"><img :src="img1Url"></div><div class="gg-name">兑换商城</div></div><div class="gg-item"><div class="gg-img"><img :src="img2Url"></div><div>广告1</div></div><div class="gg-item"><div class="gg-img"><img :src="img3Url"></div><div>广告2</div></div></div>'
});
var fj = Vue.component('fj-view',{
	data(){
		return {
			samll :[
			{img:"./img/sd1.png",name:'Lexus深圳湾店',detail:"这个店的东西很好吃",sales:"1000",range:"400"},
			{img:"./img/sd2.jpeg",name:'Lexus深圳湾店',detail:"这店的服务很到位",sales:"1000",range:"400"}
			]
		}
	},
	template:'<div class="fj"><mt-header title="附件的商家"></mt-header><div class="fj-store" v-for="item in samll"><div class="store-img"><img :src="item.img"></div>'
			 +'<section class="store-detail">'
			 +'<header class="store-title"><span class="store-name">{{item.name}}</span><span>销量:{{item.sales}}</span><div class="store-range">{{item.range}}m</div></header>'
			 +'<div class="store-mess">{{item.detail}}</div>'
			 +'</section><span class="icon iconfont icon-more"></span></div></div>'
});
var child1 = Vue.component('index-view',{
	data(){
		return {
			imgUrl :'./img/1.jpg'
		}
	},
	template:'<div class="index"><mt-header fixed title="首页"></mt-header>'
			 +'<section class="toolbar"><div class="seat">深圳<i></i></div><div class="top-search"><mt-search></mt-search></div><div class="mess">公告</div></section>'
			 +'<swiper-view></swiper-view>'
			 +'<list-view></list-view>'
			 +'<div class="banner"><img :src="imgUrl" alt="图片"></div>'
			 +'<gg-view></gg-view>'
			 +'<fj-view></fj-view>'
			 +'</div>'
});
var child2 = Vue.component('car-view',{
	template : '<div>这个是购物车<div class="icon iconfont icon-back"></div></div>'
});
var child3 = Vue.component('me-view',{
	template : '<div><mt-button type="default" @click="callme">default</mt-button><mt-button type="default" @click="messbox">default</mt-button></div>',
	methods:{
		callme : function(){
			this.$toast('好难啊')
			//this.$messagebox('提示', '操作成功');
		},
		messbox :function(){
			this.$messagebox('提示', '操作成功');
		}
	}
});
var temp1 ={
	data(){
		return {
			selected:"index",
			active:"tab-container1"
		}
	},
	template:'<div><mt-tab-container v-model="active">'
				+'<mt-tab-container-item id="tab-container1"><index-view></index-view>'
				+'</mt-tab-container-item>'
				+'<mt-tab-container-item id="tab-container2"><car-view></car-view>'
				+'</mt-tab-container-item>'
				+'<mt-tab-container-item id="tab-container3"><me-view></me-view>'
				+'</mt-tab-container-item>'
			+'</mt-tab-container>'
			+'<mt-tabbar v-model="selected">'
				+'<mt-tab-item id="index">'
					+'<img slot="icon"> 首页'
				+'</mt-tab-item>'
				+'<mt-tab-item id="car">'
					+'<img slot="icon" > 购物车'
				+'</mt-tab-item>'
				+'<mt-tab-item id="me">'
					+'<img slot="icon" > 我的'
				+'</mt-tab-item>'
			+'</mt-tabbar></div>',
	watch:{
		selected : function(val){
			console.log(val);
			if(val == 'index'){
				return this.active = 'tab-container1';
			}
			if(val == 'car'){
				return this.active = 'tab-container2';
			}
			if(val == 'me'){
				return this.active = 'tab-container3';
			}
		}
	},
	
}
