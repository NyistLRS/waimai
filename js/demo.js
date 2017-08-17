		var router = new VueRouter({ // 路由要挂载在vue实例上
			mdoe: history,
			routes:[
				{path:'/',component:temp1}
			]
		});
		new Vue({
			el: "#app",
			data: {
			},
			router
		})