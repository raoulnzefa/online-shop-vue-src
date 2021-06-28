<template>
  <div id="app">

    <div class="header">
      <div class="header__logo-search">
        <router-link
          to="/"
          class="header__logo"
        >
          <p>Logo</p>
        </router-link>

        <div
          class="header__search form-search"
          v-if="shouldShowSidebar"
        >
          <input
            class="form-search__input"
            type="text"
            v-model="searchVal"
            @searchValTestt='searchValTestt'
          >
          <img
            class="clear-input"
            src="@/assets/images/icon/icon-close.svg"
            alt="Close icon"
            @click="clearInput"
          >

        </div>

        <router-link
          class="header__cart header-cart"
          to="/cart"
        >

          <img
            src="@/assets/images/icon/cart.svg"
            alt="Cart icon"
          >

          <span
            class="header-cart__price"
            v-if="cart.length"
          >
            <span class="header-cart__count">{{quantityOutput}}</span>
            {{priceOutput}} &#8381;
          </span>
          <span
            v-else
            class="header-cart__null"
          >Корзина</span>

        </router-link>
      </div>
      <div class="header__nav">
        <div class="header__wrapper">
          <router-link
            class="nav-item"
            to="/"
          >Все</router-link>
          <router-link
            class="nav-item"
            to="/rasteniya"
          >Растения</router-link>
          <router-link
            class="nav-item"
            to="/kashpo"
          >Кашпо</router-link>
        </div>
      </div>
    </div>
    <div class="wrapper-page">
      <router-view />
    </div>
  </div>
</template>

  
<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      searchVal: "",
    };
  },
  methods: {
    ...mapActions(["SEARCH_VALUE_ACTION"]),
    clearInput() {
      this.searchVal = "";
    },
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["CART_TOTAL", "QUANTITY_TOTAL"]),
    quantityOutput() {
      return this.QUANTITY_TOTAL;
    },
    priceOutput() {
      return this.CART_TOTAL;
    },

    searchValTestt() {
      return this.SEARCH_VALUE_ACTION(this.searchVal);
    },
    shouldShowSidebar() {
      return this.$route.meta.renderInput !== false;
    },
  },
};
</script>
