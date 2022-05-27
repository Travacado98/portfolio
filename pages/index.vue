<template>
  <div class="site-wrapper">
    <site-header />

    <intro-section />
    <project-section />
    <contact-section />

    <site-footer />
  </div>
</template>

<script>
export default {
  mounted() {
    const darkMode = localStorage.getItem('tsdarkmode');
    if (darkMode === 'true') {
      document.body.classList.add('dark');
    }
  },
};
</script>

<style lang="scss" scoped>
.site-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: var(--header-height);
}
</style>
