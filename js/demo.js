		var router = new VueRouter({ // 路由要挂载在vue实例上
			routes:[
				{path:'/',component:temp1},
				{path:'/seat',component:temp2,name:'seat'},
				{path:'/search',component:searchTpl,name:"search"}
			]
		});
		new Vue({
			el: "#app",
			data: {
			},
			router
		})