<template>
  <main class="form-signin w-50 m-auto mt-5">
    <form>
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
      <Input
        :label="'Email address'"
        :type="'email'"
        :placeholder="'name@example.com'"
      />
      <Input :label="'Password'" :type="'password'" :placeholder="'Password'" />
      <Button type="submit">Login</Button>
    </form>
  </main>
</template>
<script>
export default {};
</script>
<style></style>
