		var router = new VueRouter({ // 路由要挂载在vue实例上
			routes:[
				{path:'/',component:zhuye,
				children:[
					{path:"/",component:indexTpl,name:"index"},
					{path:"/car",component:carTpl,name:"car"},
					{path:"/custom",component:customTpl,name:"custom",
						beforeEnter:function(to,from,next){
							/* 判断用户是否登录*/
							if(localStorage.getItem('username')){
								next();
							}else{
								next({
									path:"/login",
									query: {redirect: to.fullPath}
								});
							}
						}
					}
				]
				},
				{path:'/seat',component:seatTpl,name:'seat'},
				{path:'/search',component:searchTpl,name:"search"},
				{path:"/list",component:listTpl,name:"list"},
				{path:"/guanggao",component:guanggaoTpl},
				{path:"/swiper",component:swiperTpl},
				{path:"/recommend",component:recommendTpl},
				{path:"/login",component:loginTpl},
				{path:"/store",component:storeMes,
				children:[
					{path:'/store/',component:store},
					{path:'/store/1',component:store,name:"1"},
					{path:'/store/2',component:children2,name:"2"},
					{path:'/store/3',component:children3,name:"3"},
					{path:'/store/4',component:children4,name:"4"},
					{path:'/store/5',component:children5,name:"5"},
					{path:'/store/6',component:children6,name:"6"}
				]}
			]
		});
		new Vue({
			el: "#app",
			data: {
			},
			router
		})