<template>
  <div class="form-floating mb-3">
    <textarea
      :type="type"
      class="form-control"
      :id="label"
      :placeholder="placeholder"
      @input="updateInput"
      :value="modelValue"
    ></textarea>
    <label :for="label">{{ label }}</label>
  </div>
</template>
<script>
export default {
  name: "TextArea",
  props: {
    label: String,
    type: String,
    placeholder: String,
    modelValue: [String, Number],
  },
  methods: {
    updateInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>
<style></style>
