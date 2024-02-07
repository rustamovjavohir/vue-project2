<template>
  <div>
    <ul class="list-group">
      <li
        v-for="errorMessage in errorMessages"
        :key="errorMessage"
        class="list-group-item list-group-item-danger mb-1"
      >
        {{ errorMessage }}
      </li>
    </ul>
  </div>
</template>
<script>
import { errorMessages } from "vue/compiler-sfc";

export default {
  name: "ValidationError",
  props: {
    ValidationErrors: {
      type: Object,
      required: true,
    },
  },
  computed: {
    errorMessages() {
      // return [
      //   "email is a required field",
      //   "password must be at least 8 characters",
      //   "username is a required field",
      // ];
      return Object.keys(this.ValidationErrors).map((name) => {
        const msg = this.ValidationErrors[name].join(", ");
        return `${name} ${msg}`;
      });
    },
  },
};
</script>
<style></style>
