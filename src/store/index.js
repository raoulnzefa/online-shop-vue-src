import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import products from "@/api";
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    searchVal: '',
    products: products,
    cart: []
  },
  mutations: {
    // API_PRODUCTS(state, products) {
    //   state.products = products;
    // },

    ADDED_PRODUCT(state, product) {
     
      if (state.cart.length) {
        let containsProductBoolean = false;
        state.cart.map(function (item) {
          
          if (item.id === product.id) {
            containsProductBoolean = true;
            item.quantity++;
          }
        })  
        if (!containsProductBoolean) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    DELETE_PRODUCT(state, index) {
      state.cart.splice(index, 1)
    },
    INCREMENT(state, index) {
      state.cart[index].quantity++;
    },
    DECREMENT(state, index) {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }
    },
    SEARCH_VALUE_COMMIT(state, value) {
      state.searchVal = value;
    }

  },
  actions: {
    // GET_API({commit}) {
    //  return axios
    //     .get('http://localhost:3000/products')
    //     .then(products => {
    //       commit('API_PRODUCTS', products.data);
    //       return products;
    //     })
    //    .catch(error => console.log(error));
    // },


    ADD_TO_CART({ commit }, product) {
      commit('ADDED_PRODUCT', product)
    }, 
    DELETE_FROM_CART({ commit }, index) {
      commit('DELETE_PRODUCT', index)
    },
    QUANTITY_INCREMENT({ commit }, index) {
      commit('INCREMENT', index)
    },
    QUANTITY_DECREMENT({ commit }, index) {
      commit('DECREMENT', index)
    },
   
    SEARCH_VALUE_ACTION({ commit }, value) {
      commit('SEARCH_VALUE_COMMIT', value)
    }
    
  },
  getters: {
  
    IS_CATEGORY: state => category => {
      return state.products.filter(product => product.category === category);
    },

    CART_TOTAL: state => {
      let total = [];

      state.cart.forEach((item) => {
        total.push(item.quantity * item.price);
      });

      return total.reduce((result, el) => result + el, 0);
    },

    QUANTITY_TOTAL: state => {
      return state.cart.reduce((result, el) => result + el.quantity, 0);
    },

    SEARCH_VALUE: state => {
      return state.searchVal;
    }

  }
})

export default store;
