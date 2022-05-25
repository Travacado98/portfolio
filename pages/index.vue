<template>
  <div>
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
