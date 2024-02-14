<template>
  <div>
    <Loader v-if="isLoading" class="text-center"></Loader>
    <ArticleDetail v-else />
  </div>
</template>
<script>
import ArticleDetail from "@/components/ArticleDetail.vue";
import { mapState } from "vuex";
export default {
  components: {
    ArticleDetail,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.articles.isLoading,
    }),
  },
  mounted() {
    // console.log(this.$route.params.slug);
    this.$store.dispatch("articleDetail", this.$route.params.slug);
  },
};
</script>
<style></style>
