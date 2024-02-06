<template>
  <main class="form-signin w-50 m-auto mt-5">
    <form>
      <h1 class="h3 mb-3 fw-normal">Register</h1>
      <Input :label="'Firt name'" :type="'text'" :placeholder="'First name'" />
      <Input
        :label="'Email address'"
        :type="'email'"
        :placeholder="'name@example.com'"
      />
      <Input :label="'Password'" :type="'password'" :placeholder="'Password'" />

      <Button type="submit" :disabled="isLoading" @click="submitHandler"
        >Register</Button
      >
    </form>
  </main>
</template>
<script>
export default {
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading;
    },
  },
  methods: {
    submitHandler(e) {
      e.preventDefault();
      const data = {
        username: "user9",
        email: "em@gmai9.com",
        password: "password",
      };
      this.$store
        .dispatch("register", data)
        .then((response) => {
          console.log("User", response);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    },
  },
};
</script>
<style></style>
