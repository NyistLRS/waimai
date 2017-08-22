		var router = new VueRouter({ // 路由要挂载在vue实例上
			routes:[
				{path:'/',component:temp1},
				{path:'/seat',component:temp2,name:'seat'},
				{path:'/search',component:searchTpl,name:"search"},
				{path:"/list",component:listTpl,name:"list"},
				{path:"/gg",component:ggTpl},
				{path:"/fj",component:fjTpl},
				{path:"/swiper",component:swiperTpl},
				{path:"/recommend",component:recommendTpl},
				{path:"/login",component:loginTpl},
				{path:"/store",component:storeMes}
			]
		});
		new Vue({
			el: "#app",
			data: {
			},
			router
		})