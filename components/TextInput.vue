<template>
  <div class="text-input">
    <label>{{ label }}</label>
    <textarea v-if="type === 'textarea'" v-bind="$attrs" v-on="$listeners" />
    <input v-else :type="type" v-bind="$attrs" v-on="$listeners">
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    label: String,
  },
};
</script>

<style lang="scss" scoped>
.text-input {
  display: flex;
  flex-direction: column;
}

input,
textarea {
  border: none;
  background-color: #ebebeb;
  border-radius: 5px;
  margin-bottom: 20px;
}
input {
  height: 50px;
  padding: 0 10px;
}
textarea {
  min-height: 250px;
  padding: 10px;
}
</style>
