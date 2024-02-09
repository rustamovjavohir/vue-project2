<template>
  <div>
    <h1>Home</h1>

  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
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
