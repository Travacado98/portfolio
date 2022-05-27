<template>
  <i :class="`fa-solid ${iconSrc}`" @click="toggleDarkMode" />
</template>

<script>

export default {
  data () {
    const darkMode = localStorage.getItem('tsdarkmode');

    return {
      darkMode: darkMode === 'true',
    };
  },
  computed: {
    iconSrc () {
      return this.darkMode ? 'fa-sun' : 'fa-moon';
    },
  },
  methods: {
    toggleDarkMode () {
      this.darkMode = !this.darkMode;
      if (this.darkMode) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
      localStorage.setItem('tsdarkmode', this.darkMode);
    },
  },
};
</script>
<style lang="scss" scoped>
i {
  cursor: pointer;
  transition: color 0.1s ease-in;

  &:hover {
    color: var(--color-primary)
  }
}
</style>
