<template>
  <div
    id="flower"
    class="app-page"
  >
    <catalog :testCategory="testCategory" />
  </div>
</template>
<script>
import catalog from "@/components/catalog.vue";

export default {
  name: "page-flower",
  data() {
    return {
      testCategory: "rasteniia",
    };
  },
  components: {
    catalog,
  },
};
</script>
