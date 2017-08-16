var temp1 ={
	props:['active','selected'],
	data () {
            return {
                myselected: this.selected
            }
       },
	template:'<div><mt-tab-container v-model="active">'
				+'<mt-tab-container-item id="tab-container1">1'
				+'</mt-tab-container-item>'
				+'<mt-tab-container-item id="tab-container2">2'
				+'</mt-tab-container-item>'
				+'<mt-tab-container-item id="tab-container3">3'
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
	wacth:{
		selected : function(val){
			console.log(val);
			this.myselected =val;
/*					if(val == 'index'){
						return this.active = 'tab-container1';
					}
					if(val == 'car'){
						return this.active = 'tab-container2';
					}
					if(val == 'me'){
						return this.active = 'tab-container3';
					}*/
		},
		myselected : function(val){
			this.$emit("services-change",val);
		}
	}
}