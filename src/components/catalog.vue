<template>
  <div class="catalog">

    <div class="catalog__products">

      <p
        class="catalog__null"
        v-if="!searchProduct.length"
      >Ничего не найдено!</p>
      <div
        class="catalog__item"
        v-for="product in searchProduct"
        :key="product.id"
      >

        <img
          class="catalog__image"
          :src="require('../assets/images/' + product.category + '/'+ product.image)"
          alt="Image"
        >
        <p class="catalog__product"> {{product.name}} </p>
        <p class="catalog__price">{{product.price}} &#8381;</p>
        <button
          class="btn buy"
          @click="addToCart(product)"
          :disabled="!product.available"
        >Купить</button>

      </div>
    </div>
    <div class="catalog__filter">

      <div
        class="checkbox-item"
        v-for="(item, index) in setValueCheckbox"
        :key="index"
      >

        <label class="check">
          <input
            type="checkbox"
            :value="item"
            v-model="sorted"
            class="check__input"
          >
          <span class="check__box"></span>
          {{item}}
        </label>
      </div>

    </div>
  </div>

</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  name: "catalog",
  props: ["testCategory"],
  data() {
    return {
      sorted: [],
      valueCheckbox: new Set(),
    };
  },
  methods: {
    // ...mapActions(["GET_API", "ADD_TO_CART"]),
    ...mapActions(["ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  computed: {
    ...mapGetters(["IS_CATEGORY", "SEARCH_VALUE"]),
    ...mapState(["products", "cart"]),

    filterCategory() {
      if (this.testCategory === "all") {
        return this.products;
      }
      return this.IS_CATEGORY(this.testCategory);
    },

    filterCategoryCheck() {
      if (this.sorted.length) {
        return this.filterCategory.filter((elCateg) =>
          this.sorted.includes(elCateg.subcategory)
        );
      }
      return this.filterCategory;
    },

    setValueCheckbox() {
      this.filterCategory.forEach((item) => {
        this.valueCheckbox.add(item.subcategory);
      });
      return this.valueCheckbox;
    },

    searchProduct() {
      return this.filterCategoryCheck.filter((item) => {
        return item.name
          .toLowerCase()
          .includes(this.SEARCH_VALUE.toLowerCase());
      });
    },
  },
  mounted() {
    // this.GET_API();
  },
};
</script>
