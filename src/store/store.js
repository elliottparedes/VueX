import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [
            {name: 'Product One', price: 100},
            {name: 'Product Two', price: 200},
            {name: 'Product Three', price: 300},
            {name: 'Product Four', price: 400},
        ] 
    },
    // think of getters as a computed property for stores
    getters: {
        saleProducts: state => {
            var saleProducts = state.products.map(product => {
                return {
                    name: '**'+ product.name + '**',
                    price: product.price / 2
                }
            })
            return saleProducts;
        }
    },
    mutations: {
        reducePrice: (state,payload)=> state.products.forEach(product => {
            product.price -= payload;
        }),
    },
    actions: {
        // context is the same as store but we can't use store directly
        // payload is the same as payload in components, or parameter 
        reducePrice: (context, payload) => {
            setTimeout(function(){
                context.commit('reducePrice', payload)
            }, 2000)
        }
    }
})