<template>
  <main class="form-signin w-50 m-auto mt-5">
    <form>
      <h1 class="h3 mb-3 fw-normal">Register</h1>
      <ValidationError
        v-if="ValidationErrors"
        :ValidationErrors="ValidationErrors"
      />
      <Input
        :label="'Firt name'"
        :type="'text'"
        :placeholder="'First name'"
        v-model="username"
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
        >Register</Button
      >
    </form>
  </main>
</template>
<script>
import ValidationError from "@/components/ValidationError.vue";
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  components: {
    ValidationError,
  },
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading;
    },
    ValidationErrors() {
      return this.$store.state.auth.errors;
    },
  },
  methods: {
    submitHandler(e) {
      e.preventDefault();
      const data = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch("register", data)
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
