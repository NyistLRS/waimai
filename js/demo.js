		var router = new VueRouter({ // 路由要挂载在vue实例上
			mdoe: history,
			routes:[
				{path:'/',component:temp1}
			]
		});
		new Vue({
			el: "#app",
			data: {
				value: "搜索",
				active:"tab-container1",
				selected:"index"
			},
			methods:{
				servicesChange (val) {
                	this.selected = val;
            	}
			},
			router
		})