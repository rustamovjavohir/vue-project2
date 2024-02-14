<template>
  <div v-if="article">
    <div class="row">
      <div class="col-12">
        <p class="fs-2">{{ article.title }}</p>
      </div>
      <div class="col-lg-8 col-md-12 mt-3">
        <p class="oppocity-75">Description:</p>
        <p class="font-monospace">{{ article.description }}</p>
      </div>
      <div class="col-6 col-lg-2 mt-3">
        <p class="oppocity-75">Created at:</p>
        <p class="font-monospace">
          {{ new Date(article.createdAt).toLocaleDateString("ru") }}
        </p>
      </div>
      <div class="col-6 col-lg-2 mt-3">
        <p class="oppocity-75">Updated at:</p>
        <p class="font-monospace">
          {{ new Date(article.updatedAt).toLocaleDateString("ru") }}
        </p>
      </div>
      <div class="col-lg-4 mt-3">
        <div class="d-flex align-items-center gap-3">
          <div
            class="d-flex justify-content-center align-items-center bg-primary"
            style="width: 50px; height: 50px; border-radius: 100%"
          >
            <span class="text-light text-uppercase fw-bold fs-3">{{
              article.author.username[0]
            }}</span>
          </div>
          <div>
            {{ article.author.username }}
          </div>
        </div>
        <p class="font-monospace mt-2">{{ article.author.bio }}</p>
      </div>
      <div class="col-lg-8 mt-3">
        <p class="font-monospace">{{ article.body }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      article: (state) => state.articles.article,
    }),
  },
};
</script>
<style></style>
