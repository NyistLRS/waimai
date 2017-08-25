		var router = new VueRouter({ // 路由要挂载在vue实例上
			routes:[
				{path:'/',component:temp1,
				children:[
					{path:"/",component:child1,name:"index"},
					{path:"/car",component:carTpl,name:"car"},
					{path:"/custom",component:child3,name:"custom"}
				]
				},
				{path:'/seat',component:temp2,name:'seat'},
				{path:'/search',component:searchTpl,name:"search"},
				{path:"/list",component:listTpl,name:"list"},
				{path:"/gg",component:ggTpl},
				{path:"/fj",component:fjTpl},
				{path:"/swiper",component:swiperTpl},
				{path:"/recommend",component:recommendTpl},
				{path:"/login",component:loginTpl},
				{path:"/store",component:storeMes,
				children:[
					{path:'/store/',component:store},
					{path:'/store/1',component:store,name:"川菜"},
					{path:'/store/2',component:children2,name:"粤菜"},
					{path:'/store/3',component:children3,name:"湘菜"},
					{path:'/store/4',component:children4,name:"客家菜"},
					{path:'/store/5',component:children5,name:"东北菜"},
					{path:'/store/6',component:children6,name:"赣菜"}
				]},
				{path:'/car',component:carTpl,name:"car"}
			]
		});
		new Vue({
			el: "#app",
			data: {
			},
			router
		})