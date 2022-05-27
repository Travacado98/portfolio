<template>
  <footer>
    <container>
      <h4>Copyright Travis Smith, {{ year }}. All rights reserved.</h4>
      <div class="social-icons">
        <a href="https://github.com/Travacado98" target="_blank">
          <i class="fa-brands fa-github-square" />
        </a>
        <a href="https://linkedin.com/in/travis-smith-315134240" target="_blank">
          <i class="fa-brands fa-linkedin" />
        </a>
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
footer {
  margin-top: auto;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
.social-icons {
  display: flex;
  gap: 10px;
  font-size: 40px;

  @media (max-width:600px) {
    font-size: 32px;
  }

  a {
    color: inherit;
    cursor: pointer;
    transition: color 0.1s ease-in;

    &:visited {
      color: inherit;
    }

    &:hover {
      color: var(--color-primary)
    }
  }
}
</style>
