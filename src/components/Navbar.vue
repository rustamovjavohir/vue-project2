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
      <template v-if="isLoggedIn">
        <RouterLink
          :to="{ name: 'home' }"
          class="me-3 py-2 text-dark text-decoration-none"
        >
          {{ user.username }}
        </RouterLink>
        <a
          href="#"
          class="me-3 py-2 text-dark text-decoration-none"
          @click="logout"
          >Logout</a
        >
      </template>
      <template v-if="isAnonymous">
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
      </template>
    </nav>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import { RouterLink } from "vue-router";
import { logo } from "../constants";
import { gettersTypes } from "@/modules/types";
import store from "@/store";
export default {
  data() {
    return {
      logo,
    };
  },
  components: { RouterLink },
  // computed: {
  //   ...mapState({
  //     user: (state) => state.auth.user,
  //     isLoggedIn: (state) => state.auth.isLoggedIn,
  //   }),
  computed: {
    ...mapGetters({
      user: gettersTypes.currentUser,
      isLoggedIn: gettersTypes.isLoggenIn,
      isAnonymous: gettersTypes.isAnonymous,
    }),
    // user() {
    //   return this.$store.getters[gettersTypes.currentUser];
    // },
  },
  methods: {
    toHomeHandler() {
      return this.$router.push({ name: "home" });
    },
    logout() {
      return this.$store.dispatch("logout");
    },
  },
};
</script>
<style></style>
