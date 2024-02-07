<template>
  <main class="form-signin w-50 m-auto mt-5">
    <form>
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
      <ValidationError
        v-if="ValidationErrors"
        :ValidationErrors="ValidationErrors"
      />
      <Input
        :label="'Email address'"
        :type="'email'"
        :placeholder="'name@example.com'"
        v-model="email"
      />
      <Input
        :label="'Password'"
        :type="'password'"
        :placeholder="'Password'"
        v-model="password"
      />
      <Button type="submit" :disabled="isLoading" @click="submitHandler"
        >Login</Button
      >
    </form>
  </main>
</template>
<script>
import { mapState } from "vuex";
import ValidationError from "@/components/ValidationError.vue";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {
    ValidationError,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.auth.isLoading,
      ValidationErrors: (state) => state.auth.errors,
    }),
  },
  methods: {
    submitHandler(e) {
      e.preventDefault();
      const data = {
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch("login", data)
        .then((response) => {
          console.log("User", response);
          this.$router.push({ name: "home" });
        })
        .catch((error) => {
          console.log("Error", error);
        });
    },
  },
};
</script>
<style></style>
