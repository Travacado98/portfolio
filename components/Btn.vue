<template>
  <component :is="as" v-bind="$attrs" v-on="$listeners">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    as: {
      type: String,
      default: 'button',
    },
  },
};
</script>

<style lang="scss" scoped>
button,
a {
  // outline: none;
  border: none;
  height: 60px;
  padding: 0 30px;
  border-radius: var(--border-radius);
  background-color: var(--color-primary);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  font-weight: 700;
}
</style>
