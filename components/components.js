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
	template : '<div class="listView"><div v-for="item in list" class="listBox"><router-link to="/list"><div class="nav-list"><img :src="item.img"><span>{{item.label}}</span></div></router-link></div></div>',
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
var guanggao = Vue.component('guanggao-view',{
	data(){
		return {
			img1Url :'./img/2.jpg',
			img2Url :'./img/3.jpg',
			img3Url :'./img/4.jpg'
		}
	},
	template:'<div class="gg"><div class="gg-item"><router-link to="/guanggao"><div class="gg-img"><img :src="img1Url"></div></router-link><div class="gg-name">兑换商城</div></div><div class="gg-item"><router-link to="/guanggao"><div class="gg-img"><img :src="img2Url"></div></router-link><div class="gg-name">广告1</div></div><div class="gg-item"><router-link to="/guanggao"><div class="gg-img"><img :src="img3Url"></div></router-link><div class="gg-name">广告2</div></div></div>'
});
/* 组件 ： 附近商家*/
var fjsj = Vue.component('fjsj-view',{
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
	template:'<div class="fj"><mt-header title="附近的商家" v-if="showHeader"></mt-header><div v-for="(item,index) in samll" class="fj-store"><router-link :to="{name:\'1\',query: {name: routeUrl}}"><div class="fj-store-item"><div class="store-img"><img :src="item.img"></div>'
			 +'<section class="store-detail">'
			 +'<header class="store-title"><span class="store-name">{{item.name}}</span><span>销量:{{item.sales}}</span><div class="store-range">{{item.range}}m</div></header>'
			 +'<div class="store-mess">{{item.detail}}</div>'
			 +'</section><span class="icon iconfont icon-more"></span></div></router-link></div></div>',
	computed : {
		routeUrl : function(){  // 返回上一个路由地址
			return this.$route.fullPath.replace("/"," ").trim();
		}
	}
});
/* 组件 : 首页内容模板*/
var indexTpl = Vue.component('index-view',{
	data(){
		return {
			imgUrl :'./img/1.jpg'
		}
	},
	template:'<div class="index"><mt-header fixed title="首页"></mt-header>'
			 +'<section class="toolbar"><div class="seat" @click="selectSeat()">深圳<i></i></div><div class="top-search"><div class="search-box"><i class="icon iconfont icon-search"></i><input type="text" placeholder="搜索" @click="dojump()"></div></div><div class="mess" @click="tongzhi()">公告</div></section>'
			 +'<section class="sroll-index cancel-scroll-bar" @touchmove.stop><swiper-view></swiper-view>'
			 +'<list-view></list-view>'
			 +'<div class="banner"><img :src="imgUrl" alt="图片"></div>'
			 +'<guanggao-view></guanggao-view>'
			 +'<fjsj-view :isHeader="true"></fjsj-view>'
			 +'</section></div>',
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
var carTpl = Vue.component('car-view',{
	data (){
		return {
			value:[],
			size:"1",
			priceCount:0,
			price:0,
			list :[{"name":"麦兜旗舰店","sp":[{"spName":"夏季休闲裤","price":"100","num":"1","img":"./img/sp1.jpg"},{"spName":"冬装羽绒服","price":"200","num":"2","img":"./img/sp2.jpg"}]},{"name":"嘟嘟旗舰店","sp":[{"spName":"香奈儿香水","price":"200","num":"1","img":"./img/sp3.jpg"},{"spName":"行楷字帖,大师临摹","price":"38","num":"3","img":"./img/sp2.jpg"}]}],
			options : [{value: 'A'}],
           selectValue:[],
           checkName :[]
		}
	},
	template : '<div class="padding40"><mt-header fixed title="购物车"><mt-button slot="right">编辑</mt-button></mt-header>'
			   +'<section class="sp-conetnt cancel-scroll-bar" @touchmove.stop><div v-for="(item,key) in list">'
			   +'<div class="sd-sp-list sd">'
			   +'<mt-checklist class="sd-checkbox " v-model="value" :options="[item]" @click.native.prevent="getPrice(item)"></mt-checklist><div class="sd-name">{{item.name}}</div></div>'
			   +'<div class="sd-sp-list sp-detail" v-for="(item1,key1) in item.sp"><mt-checklist class="sd-checkbox " v-model="value" :options="[item1.spName]" @click.native.prevent="getPrice(item1.spName)"></mt-checklist>'
			   +'<div class="sd-name"><div class="sp-detail-img"><img :src="item1.img"></div><div class="sp-mes">{{item1.spName}}</div><div class="sp-size"><div class="red-font">{{item1.price |formatPrice}}</div><div>{{item1.num}}</div></div></div></div>'
			   +'</div></section>'
			   +'<section class="sp-count"><div class="sd-sp-list"><mt-checklist class="sd-checkbox " v-model="value" :options="[\'all\']" @click.native.prevent="getPrice(\'all\')"></mt-checklist>'
			   +'<div class="sd-name"><span>全选</span>'
			   +'<div class="count-mes"><div></div><div class="price-count">合计：<span class="priceCountNum">{{price|formatPrice}}</span></div><div class="oper-count"><mt-button type="danger"  size="small">结算({{size}})</mt-button></div></div></div></div></section></div>'
			   +'</div>',
    filters :{  // 自定义过滤器  把金钱转换
    	formatPrice : function(val){
    		return '¥' + parseFloat(val).toFixed(2);
    	}
    },
    methods:{
    	getPrice : function(val){
    		this.price = 0;
    		var popName = '';
    		if(this.value.indexOf(val) < 0){
    			this.value.push(val);
    			if(typeof val == "object" ){  // 把列表下的加进数组
	    			for(var key in val){
	    				if(key == "sp"){
	    					for(var i in val.sp){
	    						if(this.value.indexOf(val.sp[i].spName) < 0){
	    							this.value.push(val.sp[i].spName);
	    						}
							}
	    				}
	    			}
    			}
    		}else{
    			this.value.splice(this.value.indexOf(val),1);
    			if(typeof val == "object" ){  // 把列表下的加进数组
	    			for(var key in val){
	    				if(key == "sp"){
	    					for(var i in val.sp){
	    						this.value.splice(this.value.indexOf(val.sp[i].spName),1);
							}
	    				}
	    			}
    			}else{   // 不是对象，就 是选择按钮
    				for(var item in this.value){
    					if(typeof this.value[item] == "object"){
    						for(var i in this.value[item].sp){
    							if(this.value.indexOf(this.value[item].sp[i].spName) > 0){
    								popName = this.value[item];
    								break;
    							}
							}
    						this.value.splice(popName,1);
    					}
    				}
    			}
    		}
    		for(var key2 in this.list){
				for(var i in this.list[key2].sp){
					if(this.value.indexOf(this.list[key2].sp[i].spName) >= 0){
						this.price += parseFloat(this.list[key2].sp[i].price)*parseFloat(this.list[key2].sp[i].num);
					}
				}
			}
    	}
    },
    watch :{
    	value :function(newValue,oldValue){
    		if(newValue == 'all'){// 全选
    			return this.value = this.checkName,this.price =this.priceCount;
    		}
    		if(newValue.length != this.checkName.length){
    			if(newValue.indexOf("all") >= 0){
    				console.log(newValue);
    				 return this.value = newValue.join(',').replace('all',' ').trim().split(',');
    			}
    		}
    		if(oldValue.indexOf("all") >=0 && newValue.indexOf("all") < 0){ // 取消全选
    			return this.value = [],this.price=0;
    		}
    	}
    },
    created :function(){
    	var price =0;
    	for(var key in this.list){
			this.checkName.push(this.list[key].name);
			for(var i in this.list[key].sp){
				this.checkName.push(this.list[key].sp[i].spName);
				 price = parseFloat(this.list[key].sp[i].price)*parseFloat(this.list[key].sp[i].num);
				this.priceCount += price;
			}
		}
    	this.checkName.push("all");
    }
});
/* 组件 ： 个人信息页面*/
var customTpl = Vue.component('custom-view',{
	data (){
		return {
			customImg:"./img/custom.jpg",
			username:""
		}
	},
	template : '<div class="hyzx"><mt-header fixed title="会员中心"><mt-button slot="right" @click.native="loginOut">退出登录</mt-button></mt-header>'
				+'<div class="grmes"><div class="custom-img"><img :src="customImg"></div><div class="custom-mes"><span class="custom-name">{{username}}</span><i class="icon iconfont icon-more"></i></div></div>'
				+'<div class="f-mes">'
				+'<div class="f-item"><ul><li><i class="icon iconfont icon-favoritesfilling"></i></li><li>福心</li><li>2</li></ul></div>'
				+'<div class="f-item"><ul><li><i class="icon iconfont icon-onepage48"></i></li><li>可用福分</li><li>199.99</li></ul></div>'
				+'<div class="f-item"><ul><li><i class="icon iconfont icon-creditlevelfilling"></i></li><li>昨日福分值</li><li>4</li></ul></div><i class="icon iconfont icon-more f-mes-more"></i></div>'
				+'<div class="sc"><div class="sc-item"><ul><li>3</li><li>商品收藏</li></ul></div>'
				+'<div class="sc-item"><ul><li>5</li><li>店铺收藏</li></ul></div><div class="sc-item"></div></div>'
				+'<router-link to="/login"><mt-cell title="我的订单" is-link><img slot="icon" src="./img/wddd.png" width="24" height="24"></mt-cell></router-link>'
				+'<router-link to="/recommend"><mt-cell title="我的推荐" is-link><img slot="icon" src="./img/wdtj.png" width="24" height="24"></mt-cell></router-link>'
				+'<mt-cell title="兑换商城" is-link><img slot="icon" src="./img/dhsc.png" width="24" height="24"></mt-cell>'
				+'</div>',
	methods:{
		callme : function(){
			this.$toast('好难啊')
			//this.$messagebox('提示', '操作成功');
		},
		messbox :function(){
			this.$messagebox('提示', '操作成功');
		},
		loginOut : function(){
//			sessionStorage.clear();
			localStorage.removeItem("username");
			this.$router.push({path:"./login",query: {redirect: this.$route.fullPath}});
		}
	},
	created: function(){
//		this.username = sessionStorage.username;
		this.username = localStorage.username;
	}
});
/* 组件 :主页*/
var zhuye ={
	data(){
		return {
			selected:"index",
			active:"tab-container1",
			tab :null
		}
	},
	template:'<div class="main"><div class="content"><router-view></router-view></div>'
			+'<mt-tabbar v-model="selected">'
				+'<mt-tab-item v-for="item in tab" @click.native="indexSwap(item.id)" :id="item.id">'
					+'<img slot="icon" :src="item.imgUrl">{{item.label}}'
				+'</mt-tab-item>'
			+'</mt-tabbar></div>',
	methods:{
		indexSwap : function(val){
			this.$router.push({name:val});
		}
	},
	created : function(){
		this.selected = this.$route.name;
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
	props:['pageTitle','routerName'],
	data() {
		return {
			name:"/"+(this.routerName==undefined?"":this.routerName)
		}
	},
	template:'<mt-header fixed :title="pageTitle">'
				+'<router-link :to="name" slot="left">'
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
	template :'<mt-index-list @touchmove.stop>'
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
/* 组件 : 推荐列表 */
var recommendList = Vue.component('recommed-list',{
	data(){
		return {
			recommendList :[{"imgUrl":"./img/user1.jpg","recdNmae":"张三","datetime":"2017-07-01"},{"imgUrl":"./img/user2.jpg","recdNmae":"张三","datetime":"2017-07-01"}]	
		}
	},
	template : '<section class="recommend-list">'
			   +'<div class="recommend-list-item" v-for="(item,key) in recommendList"><div class="recommnd-img"><img :src="item.imgUrl"></div><div class="recommend-mes"><div class="recdName">{{item.recdNmae}}</div><div class="datetime">{{item.datetime}}</div></div></div>'
			   +'</section>'
})
/* 选择城市页面 */
var seatTpl = {
	data() {
		return {
			title:"选择城市",
			position:"深圳市-广东省"
		}
	},
	template :'<div class="seat-view">'
			  +'<my-header :pageTitle="title"></my-header>'
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
/* 菜单部分路由 */
var listTpl = {
	data (){
		return {
			title:"京东超市"	
		}
	},
	template :'<div class="feilei"><my-header :pageTitle="title"></my-header>'
			  +'<mt-search></mt-search>'
			  +'<fjsj-view :isHeader="false"></fjsj-view>'
			  +'</div>'
}
var guanggaoTpl = {
	template : '<div>广告路由</div>'
}
/* 轮播图路由 */
var swiperTpl = {
	data(){
		return {
			value:[],
			options:[{
					label:"选项A",
					value:"A"
				},
				{
					label:"选项B",
					value:"B"
				},
				{
					label:"选项C",
					value :"C"
				}
			]
		}
	},
	template : '<div><mt-checklist title="复选框标题" v-model="value" :options="options"></mt-checklist></div>'
}
/* 我的推荐页面 */
var recommendTpl = {
	data (){
		return{
			title:"我的推荐",
			routerName:"custom"
		}
	},
	template :'<section class="recommend">'
			  +'<my-header :pageTitle="title" :routerName="routerName"></my-header>'
			  +'<section class="self-mes">'
			  +'<div class="self-mes-item"><div>我的邀请码</div><div>12345z<i class="icon iconfont icon-more"></i></div></div>'
			  +'<div class="self-mes-item"><div>我的推荐</div><div>100</div></div>'
			  +'<div class="self-mes-item"><div>今日消费</div><div>30000.00(元)</div></div>'
			  +'</section>'
			  +'<mt-cell title="推荐列表"></mt-cell>'
			  +'<recommed-list></recommed-list>'
			  +'</section>'
	
}
/* 登录页面 */
var loginTpl = {
	data (){
		return {
			pagetitle:"登录",
			bannerImg:"./img/login.jpg",
			popupVisible:false,
			loginType:"",
			phone:"",
			pas:"",
			visibleItemCount:3,
			selectTypeValue :"",
			slots: [{flex:1,values: ['大众会员','黄金会员', '白金会员', '钻石会员', '超级会员'],className: 'slot1',defaultIndex:0}]
		}
	},
	template :'<section class="login-view">'
			 +'<my-header :pageTitle="pagetitle"></my-header>'
			 +'<div class="login-banner"><img :src="bannerImg"></div>'
			 +'<form><div class="login-mes"><div class="login-label">登录类型</div><div class="login-input"><input type="text" v-model="loginType" placeholder="会员" @click.prevent.stop="changeType(loginType)"/></div></div>'
			 +'<div class="login-mes"><div class="login-label">手机号码</div><div class="login-input"><input type="text" v-model="phone"/></div></div>'
			 +'<div class="login-mes"><div class="login-label">密码</div><div class="login-input"><input type="password" v-model="pas "/></div></div>'
			 +'<mt-popup v-if="popupVisible" v-model="popupVisible" position="bottom" class="mint-popup-4">'
			 +'<div class="height40"><div class="type-oper" @click="cacelModal">取消</div><div class="center"></div><div class="type-oper success" @click="selectType">完成</div></div>'
			 +'<mt-picker :slots="slots" @change="onValuesChange" :visible-item-count="visibleItemCount"></mt-picker></mt-popup>'
			 +'<div class="btn"><mt-button size="small" @click.native="redirect">登录</mt-button></div>'
			 +'</form>'
			 +'<div class="other-oper"><div class="other-oper-item re"><mt-button size="small">注册</mt-button></div><div class="other-oper-item"><mt-button size="small">忘记密码</mt-button></div></div>'
			 +'</section>',
	 methods:{
	 	changeType : function(val){
	 		this.popupVisible = true;
	 	},
	 	onValuesChange : function(picker,values){
	 		if (values[0] == undefined) {
	 			if(this.loginType == ''){
	 				picker.values[0]=this.slots[0].values[0];
	 			}else{
	 				picker.values[0] = this.loginType;
	 			}
      		}
	 		this.selectTypeValue = values[0];
	 	},
	 	selectType :function(){
	 		console.log(this.selectTypeValue);
	 		this.popupVisible =false;
	 		this.loginType = this.selectTypeValue;
	 	},
	 	cacelModal : function(){
	 		this.popupVisible = false;
	 	},
	 	redirect :function(){  // 登录后重定向个人信息页面
//	 		sessionStorage.username = this.phone;
	 		localStorage.username = this.phone;
	 		this.$router.push(this.$route.query.redirect);
	 	}
	 }
}
/* 商店*/
var storeMes = {
	data (){
		return {
			title:"Lexus深圳湾店",
			storeImg:'./img/swiper3.jpg',
			seatText:"深圳市福田区莲花街道深南大道特区报社印刷大楼晶城广场一楼之112号、130号",
			distance:400,
			selected:"1",
			prevRouter:"list",
			sort:[{label:"川菜",id:"1"},{label:"粤菜",id:"2"},{label:"湘菜",id:"3"},{label:"客家菜",id:"4"},{label:"东北菜",id:"5"},{label:"赣菜",id:"6"}]
		}
	},
	template :'<div class="store paddingTop40">'
			  +'<my-header :pageTitle="title" :routerName="prevRouter"></my-header>'
			  +'<section class="store-content"><div class="storeImg"><img :src="storeImg"></div>'
			  +'<div class="storeDetail"><div class="store-summary">商家简介:</div><div class="summary-mess">这个地处深圳深圳湾，人流量大</div></div>'
			  +'<div class="store-seat"><div class="seat-text"><div class="seat-text-detail">地址:<span>{{seatText}}</span></div><div class="distance">距离您{{distance}}m</div></div>'
			  +'<div class="seat-map"><i class="icon iconfont icon-map"></i></div>'
			  +'<div class="seat-phone"><i class="icon iconfont icon-phone"></i></div></div>'
			  +'<mt-navbar v-model="selected">'
			  +'<mt-tab-item :id="item.id" v-for="(item,key) in sort" @click.native="swapRoute(item.id)">{{item.label}}</mt-tab-item>'
			  +'</mt-navbar>'
			  +'<router-view></router-view>'
			  +'</section></div>',
	methods:{
		swapRoute : function(val){
			this.$router.push({name:val});  // 路由跳转
		}
	},
	created : function(){  // 记录路由信息，好让返回
		this.prevRouter = this.$route.query.name;
		this.selected = this.$route.fullPath.substring(this.$route.fullPath.lastIndexOf("/")+1,this.$route.fullPath.lastIndexOf("?"));
	}
}
var store = Vue.component('menu-list',{
	data(){
		return {
			menu:[{id:"1",menuImg:"./img/menu1.jpg",foodName:"香干回锅肉",foodSummary:"如果你无法简洁的表达你的想法，那只能说明你还不够了解它。",price:8,count:0},
				  {id:"2",menuImg:"./img/menu2.jpg",foodName:"辣子鸡丁",foodSummary:"如果你无法简洁的表达你的想法，那只能说明你还不够了解它。",price:25,count:0},
				  {id:"3",menuImg:"./img/menu2.jpg",foodName:"辣子鸡丁",foodSummary:"如果你无法简洁的表达你的想法，那只能说明你还不够了解它。",price:18,count:0},
				  {id:"3",menuImg:"./img/menu2.jpg",foodName:"辣子鸡丁",foodSummary:"如果你无法简洁的表达你的想法，那只能说明你还不够了解它。",price:18,count:0},
				  {id:"4",menuImg:"./img/menu2.jpg",foodName:"辣子鸡丁",foodSummary:"如果你无法简洁的表达你的想法，那只能说明你还不够了解它。",price:36,count:0}],
			style:{
				height:""
			},
			cloneMenu :[],
			isActive :false,
			isSub:false,
			popupVisible:false,
			countSize:0,
			selectSp:[],
			countP:0
		}
	},
	template:'<div><section class="menu" :style="style">'
			 +'<div class="menu-list" v-for="(item,key) in menu">'
			 +'<div class="menu-img"><img :src="item.menuImg"></div>'
			 +'<div class="menu-summary"><h2 class="menu-title">{{item.foodName}}</h2><div class="summay">{{item.foodSummary}}</div><div style="color:#fe4d3d">{{item.price|formatPrice}}</div></div>'
			 +'<div class="menu-oper"><i class="icon iconfont icon-subtract subtract" @click="subtract(item)" v-if="item.count>0"></i>{{item.count|conetnt}}<i class="icon iconfont icon-add" @click="add(item)"></i></div>'
			 +'</div></section>'
			 +'<div class="car-bottom"><div @click="car" class="icon iconfont icon-cart cart" :class="{active:isActive}"><i v-if="isActive">{{countSize}}</i></div>'
			 +'<div class="select-sp" :class="{noutActive:!isActive}"><span v-if="!isActive">购物车空空如也~</span>'
			 +'<div class="count-price" v-if="isActive">{{countPrice|formatPrice}}</div><div class="sd-summary" v-if="isActive">配送费以订单为准</div></div>'
			 +'<div class="countBtn" :class="{countBtnActive:isSub}"><span v-if="isActive&&countP>=15">去结算</span><span v-if="!isActive&&countPrice==0" class="ps-price">¥15起送</span><span v-if="isActive&&!isSub" class="ps-price">还差¥{{minus}}</span></div></div>'
			 +'<mt-popup v-model="popupVisible" position="bottom" class="sp-list">'
			 +'<header class="gwc-header"><div class="box-free">餐盒费2元</div><div class="clear-car" @click="clearCar"><i class="icon iconfont icon-delete"></i>清空购物车</div></header>'
			 +'<section class="sp-list-box"><div v-for="(item,key) in selectSp" class="modal-sp-list" v-if="item.count>0">'
			 +'<div class="modal-menu-summary">{{item.foodName}}'
			 +'<div class="modal-sp-oper"><i class="icon iconfont icon-subtract subtract" @click="subtract(item)"></i>{{item.count|conetnt}}<i class="icon iconfont icon-add" @click="add(item)"></i></div>'
			 +'<div class="modal-sp-count">{{item.count*item.price|formatPrice}}</div>'
			 +'</div><div class="modal-sp-mes">含{{item.count}}份原价商品</div></div>'
			 +'</section></mt-popup>'
			 +'</div>',
	 filters :{
	 	conetnt : function(val){
	 		if(val == 0){
	 			return '';
	 		}else{
	 			return val;
	 		}
	 	},
	 	formatPrice : function(val){
    		return '¥' + parseFloat(val).toFixed(2);
    	}
	 },
	 mounted : function(){
	 	this.cloneMenu = JSON.parse(JSON.stringify(this.menu));
	 	return this.style.height = document.body.clientHeight - this.$el.offsetTop - 55 + "px";  //计算menu的高度
	 },
	 methods:{
	 	add : function(obj){
	 		this.countSize++;
	 		if(this.selectSp.indexOf(obj)<0){
	 			this.selectSp.push(obj);
	 		}
	 		obj.count ++;
//	 		var clone = JSON.parse(JSON.stringify(obj));
//	 		this.selectSp.push(clone);
	 	},
	 	subtract:function(obj){
	 		if(this.countSize > 0){
	 			this.countSize--;
	 		}
	 		if(obj.count > 0){
	 			obj.count --;
	 		}
	 		if(this.countSize<=0){
	 			this.popupVisible =false;
	 		}
	 	},
	 	car : function(){
	 		if(this.countSize > 0){
	 			this.popupVisible = true;
	 		}
	 	},
	 	clearCar:function(){
	 		this.selectSp = [];
	 		this.countSize =0;
	 		this.popupVisible =false;
	 		this.menu = JSON.parse(JSON.stringify(this.cloneMenu));
	 	}
	 },
	 watch:{
	 	countSize : function(val){
	 		if(val != 0){
	 			this.isActive =true;
	 		}else{
	 			this.isActive =false;
	 		}
	 	},
	 	countP : function(val){
	 		if(val >= 15){
	 			this.isSub =true;
	 		}else{
	 			this.isSub =false;
	 		}
	 	}
	 },
	 computed : {
	 	countPrice : function(){
	 		var count = 0;
	 		for(var key in this.menu){
	 			count += this.menu[key].count * this.menu[key].price;
	 		}
	 		this.countP = count;
	 		return count;
	 	},
	 	minus : function(){
	 		if(this.countP<15){
	 			return 15 - this.countP;
	 		}
	 	},
	 }
	 
})
/* 分类路由 */
var children2 = {
	template :'<div>粤菜</div>'
}
var children3 = {
	template :'<div>湘菜</div>'
}
var children4 = {
	template :'<div>客家菜</div>'
}
var children5 = {
	template :'<div>东北菜</div>'
}
var children6 = {
	template :'<div>赣菜</div>'
}