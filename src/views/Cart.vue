<template>
  <div id="cart">
    <h1>Корзина</h1>
    <div v-if="cart.length">
      <div
        class="cart-item"
        v-for="(item, index) in cart"
        :key="item.id"
      >
        <div class="cart-item__image">
          <img
            :src="require('../assets/images/' + item.category + '/'+ item.image)"
            alt="Image"
          >
          <p class=""> {{item.name}} </p>
        </div>
        <p class="cart-item__price">{{item.price}} &#8381;</p>
        <div class="cart-item__quantity">
          <div
            class="decrement"
            @click="quantityDecrement(index)"
          > <span>&#8722;</span> </div>
          <div class="quantity">{{item.quantity}}</div>
          <div
            class="increment"
            @click="quantityIncrement(index)"
          ><span>&#43;</span></div>
        </div>
        <p class="cart-item__sum">{{item.price * item.quantity}} &#8381;</p>

        <img
          class="deleted-product"
          src="@/assets/images/icon/icon-close.svg"
          alt="Close icon"
          @click="deleteProduct(index)"
        >

      </div>

      <div class="cart__total">
        <p> Итого: {{cartTotal}} &#8381; </p>
      </div>
    </div>
    <p
      class="cart__null"
      v-else
    >Ваша корзина пуста.</p>

  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "cart",
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "QUANTITY_INCREMENT",
      "QUANTITY_DECREMENT",
    ]),

    deleteProduct(index) {
      this.DELETE_FROM_CART(index);
    },
    quantityDecrement(index) {
      this.QUANTITY_DECREMENT(index);
    },
    quantityIncrement(index) {
      this.QUANTITY_INCREMENT(index);
    },
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["CART_TOTAL"]),

    cartTotal() {
      return this.CART_TOTAL;
    },
  },
};
</script>
