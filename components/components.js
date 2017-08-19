/*  组件 ：轮播图   */
var swiper = Vue.component('swiper-view',{
	data(){
		return {
			swiper1:"./img/swiper1.jpg",
			swiper2:"./img/swiper2.jpg",
			swiper3:"./img/swiper3.jpg"
		}
	},
	template:'<div class="my-swiper"><mt-swipe :auto="4000">'
			  	+'<mt-swipe-item class="slide1"><router-link to="/swiper"><img :src="swiper1"></router-link ></mt-swipe-item>'
			  	+'<mt-swipe-item class="slide2"><router-link to="/swiper"><img :src="swiper2"></router-link ></mt-swipe-item>'
			  	+'<mt-swipe-item class="slide3"><router-link to="/swiper"><img :src="swiper3"></router-link ></mt-swipe-item>'
			+'</mt-swipe></div>'
});
/* 组件 ：导航*/
var list = Vue.component('list-view',{
	data(){
		return {
			list :null
		}
	},
	template : '<div class="listView"><div v-for="item in list" class="listBox"><router-link to="/list"><div class="menu-list"><img :src="item.img"><span>{{item.label}}</span></div></router-link></div></div>',
	created : function(){
		var _this = this;
		axios.get("./data/list.json")
			 .then(function(response){
			 	_this.list = response.data;
			 	console.log(response.data);
			 })
			 .catch(function(){
			 	console.log(response);
			 });
	}
});
/* 组件: 广告*/
var gg = Vue.component('gg-view',{
	data(){
		return {
			img1Url :'./img/2.jpg',
			img2Url :'./img/3.jpg',
			img3Url :'./img/4.jpg'
		}
	},
	template:'<div class="gg"><router-link to="/gg"><div class="gg-item"><div class="gg-img"><img :src="img1Url"></div><div class="gg-name">兑换商城</div></div></router-link><router-link to="/gg"><div class="gg-item"><div class="gg-img"><img :src="img2Url"></div><div class="gg-name">广告1</div></div></router-link><router-link to="/gg"><div class="gg-item"><div class="gg-img"><img :src="img3Url"></div><div class="gg-name">广告2</div></div></router-link></div>'
});
/* 组件 ： 附近商家*/
var fj = Vue.component('fj-view',{
	props :['isHeader'],
	data(){
		return {
			samll :[
			{img:"./img/sd1.png",name:'Lexus深圳湾店',detail:"这个店的东西很好吃",sales:"1000",range:"400"},
			{img:"./img/sd2.jpeg",name:'Lexus深圳湾店',detail:"这店的服务很到位",sales:"1000",range:"400"}
			],
			showHeader:this.isHeader
		}
	},
	template:'<div class="fj"><mt-header title="附近的商家" v-if="showHeader"></mt-header><div v-for="item in samll" fj-store><router-link to="/fj"><div class="fj-store-item"><div class="store-img"><img :src="item.img"></div>'
			 +'<section class="store-detail">'
			 +'<header class="store-title"><span class="store-name">{{item.name}}</span><span>销量:{{item.sales}}</span><div class="store-range">{{item.range}}m</div></header>'
			 +'<div class="store-mess">{{item.detail}}</div>'
			 +'</section><span class="icon iconfont icon-more"></span></div></router-link></div></div>'
});
/* 组件 : 首页*/
var child1 = Vue.component('index-view',{
	data(){
		return {
			imgUrl :'./img/1.jpg'
		}
	},
	template:'<div class="index"><mt-header fixed title="首页"></mt-header>'
			 +'<section class="toolbar"><div class="seat" @click="selectSeat()">深圳<i></i></div><div class="top-search"><div class="search-box"><i class="icon iconfont icon-search"></i><input type="text" placeholder="搜索" @click="dojump()"></div></div><div class="mess" @click="tongzhi()">公告</div></section>'
			 +'<swiper-view></swiper-view>'
			 +'<list-view></list-view>'
			 +'<div class="banner"><img :src="imgUrl" alt="图片"></div>'
			 +'<gg-view></gg-view>'
			 +'<fj-view :isHeader="true"></fj-view>'
			 +'</div>',
	 methods : {
	 	selectSeat : function(){
	 		this.$router.push({name:"seat"});
	 	},
	 	dojump : function(){
	 		this.$router.push({name:"search"});
	 	},
	 	tongzhi : function(){
	 		
	 	}
	 }
});
/* 组件 ：购物车页面*/
var child2 = Vue.component('car-view',{
	data (){
		return {
			"list" :[{"name":"麦兜旗舰店","sp":[{"spName":"夏季休闲裤","price":"100","num":"1"},{"spName":"冬装羽绒服","price":"200","num":"2"}]},{"name":"嘟嘟旗舰店","sp":[{"spName":"香奈儿香水","price":"200","num":"1"},{"spName":"行楷字帖,大师临摹","price":"38","num":"3"}]}],
			options : [{  
            label: '选项A',  
            value: 'A',  
            disabled: true  //可以禁用选项  
            },  
            {  
            label: '选项B',  
            value: 'B',  
            disabled: true  
            },  
            {  
            label: '选项C',  
            value: 'C'  
            },  
            {  
            label: '选项D',  
            value: 'D'  
            }]  
		}
	},
	template : '<div><mt-header fixed title="购物车"><mt-button slot="right">编辑</mt-button></mt-header>'
			   +'<div>'
			   +'</div>'
			   +'</div>'
});
/* 组件 ： 个人信息页面*/
var child3 = Vue.component('me-view',{
	data (){
		return {
			customImg:"./img/custom.jpg"
		}
	},
	template : '<div class="hyzx"><mt-header fixed title="会员中心"></mt-header>'
				+'<div class="grmes"><div class="custom-img"><img :src="customImg"></div><div class="custom-mes"><span class="custom-name">罗荣盛</span><i class="icon iconfont icon-more"></i></div></div>'
				+'<div class="f-mes">'
				+'<div class="f-item"><ul><li><i class="icon iconfont icon-favoritesfilling"></i></li><li>福心</li><li>2</li></ul></div>'
				+'<div class="f-item"><ul><li><i class="icon iconfont icon-onepage48"></i></li><li>可用福分</li><li>199.99</li></ul></div>'
				+'<div class="f-item"><ul><li><i class="icon iconfont icon-creditlevelfilling"></i></li><li>昨日福分值</li><li>4</li></ul></div><i class="icon iconfont icon-more f-mes-more"></i></div>'
				+'<div class="sc"><div class="sc-item"><ul><li>3</li><li>商品收藏</li></ul></div>'
				+'<div class="sc-item"><ul><li>5</li><li>店铺收藏</li></ul></div><div class="sc-item"></div></div>'
				+'<mt-cell title="我的订单" is-link><img slot="icon" src="./img/wddd.png" width="24" height="24"></mt-cell>'
				+'<mt-cell title="我的推荐" is-link><img slot="icon" src="./img/wdtj.png" width="24" height="24"></mt-cell>'
				+'<mt-cell title="兑换商城" is-link><img slot="icon" src="./img/dhsc.png" width="24" height="24"></mt-cell>'
				+'</div>',
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
/* 组件 :index*/
var temp1 ={
	data(){
		return {
			selected:"index",
			active:"tab-container1",
			tab :null
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
				+'<mt-tab-item v-for="item in tab" :id="item.id">'
					+'<img slot="icon" :src="item.imgUrl">{{item.label}}'
				+'</mt-tab-item>'
				/*+'<mt-tab-item id="index">'
					+'<img slot="icon"> 首页'
				+'</mt-tab-item>'
				+'<mt-tab-item id="car">'
					+'<img slot="icon" > 购物车'
				+'</mt-tab-item>'
				+'<mt-tab-item id="me">'
					+'<img slot="icon" > 我的'
				+'</mt-tab-item>'*/
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
	created : function(){
		var _this =this;
		axios.get('./data/tab.json')
		.then(function(response){
			_this.tab = response.data;
		})
		.catch(function(response){
			
		});
	}
}
/* 通用组件：头部*/
var header = Vue.component('my-header',{
	props:['pagrTitle'],
	data() {
		return {
		}
	},
	template:'<mt-header fixed :title="pagrTitle">'
				+'<router-link to="/" slot="left">'
			    	+'<mt-button icon="back">返回</mt-button>'
			  	+'</router-link>'
			  +'</mt-header>'
});
/* 选择城市列表 */
var city = Vue.component('city-list',{
	data (){
		return {
			city :null
		}
	},
	template :'<mt-index-list>'
				  +'<mt-index-section v-for="(item,value) in city" :index="value">'
				    +'<mt-cell v-for="cityChild in item" :title="cityChild.cityName"></mt-cell>'
				  +'</mt-index-section>'
				+'</mt-index-list>',
	created : function(){
		var _this = this;
		axios.get('./data/city.json')
		.then(function(response){
			return _this.city = response.data;
		})
		.catch(function(response){
			
		});
	}
});
/* 选择城市页面 */
var temp2 = {
	data() {
		return {
			title:"选择城市",
			position:"深圳市-广东省"
		}
	},
	template :'<div class="seat-view">'
			  +'<my-header :pagrTitle="title"></my-header>'
			  +'<div class="position">猜您的位置是:<span>{{position}}</span></div>'
			  +'<city-list></city-list>'
			  +'</div>',
	created : function(){
	}
}
/* 搜索页面 */
var searchTpl ={
	template:'<div>搜索页面</div>'
}
var listTpl = {
	data (){
		return {
			title:"京东超市"	
		}
	},
	template :'<div class="feilei"><my-header :pagrTitle="title"></my-header>'
			  +'<mt-search></mt-search>'
			  +'<fj-view :isHeader="false"></fj-view>'
			  +'</div>'
}
var ggTpl = {
	template : '<div>广告路由</div>'
}
var fjTpl ={
	template : '<div>附件商家路由</div>'
}
var swiperTpl = {
	template : '<div>录播图路由</div>'
}
