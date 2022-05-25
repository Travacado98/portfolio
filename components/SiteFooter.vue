<template>
  <footer>
    <container>
      <h4>Copyright Travis Smith, {{ year }}. All rights reserved.</h4>
      <div class="social-icons">
        <a href="https://github.com/Travacado98" target="_blank">
          <i class="fa-brands fa-github-square" />
        </a>
        <!-- <a href="" target="_blank">
          <i class="fa-brands fa-linkedin"></i>
        </a> -->
        <a href="https://twitter.com/twscodes" target="_blank">
          <i class="fa-brands fa-twitter-square" />
        </a>
      </div>
    </container>
  </footer>
</template>

<script>
export default {
  data() {
    const today = new Date();
    const year = today.getFullYear();
    return {
      year,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.social-icons {
  display: flex;
  gap: 10px;
  font-size: 40px;

  a {
    color: inherit;

    &:visited {
      color: inherit;
    }
  }
}
</style>
