<template>
  <div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <ArticleCard
        v-for="article in data"
        :article="article"
        :key="article.id"
      />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import ArticleCard from "@/components/ArticleCard.vue";
export default {
  components: {
    ArticleCard,
  },
  methods: {},
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
      data: (state) => state.articles.data,
    }),
  },
  mounted() {
    this.$store.dispatch("articles");
  },
};
</script>
<style></style>
