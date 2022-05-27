<template>
  <component :is="as" class="btn" :class="{ secondary }" v-bind="$attrs" v-on="$listeners">
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
    secondary: Boolean,
  },
};
</script>

<style lang="scss" scoped>
button,
a {
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
  transition: background-color 0.1s ease-in;

  &:hover {
    background-color: var(--color-primary-hover);
  }
  @media (max-width: 600px) {
    height: 50px;
    padding: 0 20px;

  }
  &.secondary {
    background-color: var(--color-secondary);
    color: var(--color-text);

    &:hover {
      background-color: var(--color-secondary-hover);
    }
  }
}
</style>
