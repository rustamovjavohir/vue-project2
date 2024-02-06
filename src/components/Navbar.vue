<template>
  <div
    class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom"
  >
    <a
      class="d-flex align-items-center text-dark text-decoration-none"
      @click="toHomeHandler"
      style="cursor: pointer"
    >
      <img src="../assets/logo/Dashboard.png" class="w-25" alt="logo" />
      <span class="fs-4">Dashboard</span>
    </a>

    <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
      <RouterLink
        :to="{ name: 'login' }"
        class="me-3 py-2 text-dark text-decoration-none"
      >
        Login
      </RouterLink>
      <RouterLink
        :to="{ name: 'register' }"
        class="me-3 py-2 text-dark text-decoration-none"
      >
        Register
      </RouterLink>
    </nav>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";
import { logo } from "../constants";
export default {
  data() {
    return {
      logo,
    };
  },
  components: { RouterLink },
  methods: {
    toHomeHandler() {
      return this.$router.push({ name: "home" });
    },
  },
};
</script>
<style></style>
