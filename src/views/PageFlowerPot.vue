<template>
  <div
    id="flower-pot"
    class="app-page"
  >
    <catalog :testCategory="testCategory" />
  </div>
</template>
<script>
import catalog from "@/components/catalog.vue";
export default {
  name: "page-flower-pot",
  data() {
    return {
      testCategory: "gorshki",
    };
  },
  components: {
    catalog,
  },
};
</script>
