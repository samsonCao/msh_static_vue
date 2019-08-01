import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export const store= new Vuex.Store({
	state:{
		goodsList: []
	},
	getters:{
		sum:state=>{
			let total=0;
            return total
		}
	},
	mutations:{
		addGoods:(state,data)=>{
			state.goodsList.push(data);
		}
	}
})
