<template>
  <div class="home app-page">
    <catalog :testCategory="testCategory" />
  </div>
</template>

<script>
import catalog from "@/components/catalog.vue";

export default {
  name: "Home",
  data() {
    return {
      testCategory: "all",
    };
  },
  components: {
    catalog,
  },
};
</script>
