var router = new VueRouter({ // 路由要挂载在vue实例上
			mdoe: history
		});
		new Vue({
			el: "#app",
			data: {
				value: "搜索",
				active:"tab-container1",
				selected:"index"
			},
			methods:{
			},
			watch:{
				selected : function(val){
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
			router
		})