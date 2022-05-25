<template>
  <header :class="{ scrolling }">
    <container>
      <img class="logo" src="~/assets/images/logo.svg" alt="Travis Smith's logo">

      <nav>
        <ul>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <light-dark-toggle />
          </li>
        </ul>
      </nav>
    </container>
  </header>
</template>

<script>
export default {
  data() {
    return {
      scrolling: false,
      ticking: false,
    };
  },

  mounted() {
    document.addEventListener('scroll', (e) => {
      const lastKnownScrollPosition = window.scrollY;

      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.handleScrollPosition(lastKnownScrollPosition);
          this.ticking = false;
        });

        this.ticking = true;
      }
    });
  },

  methods: {
    handleScrollPosition(scrollPos) {
      this.scrolling = scrollPos > 20;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  max-height: var(--header-height);
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--color-bg);
  transition: all 0.2s ease-in-out;

  &.scrolling {
    background-color: var(--color-neutral);
    box-shadow: var(--shadow);
    --header-height: 60px;
  }
}
.logo {
  display: flex;
  justify-content: flex-start;
}
ul {
  display: flex;
  list-style: none;
  gap: 20px;
  margin: 0;
}
li {
  line-height: 1;
}
a {
  text-decoration: none;
  color: inherit;

  &:visited {
    color: inherit;
  }
  &:hover {
    border-bottom: solid 2px var(--color-primary);
  }
}
.container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
