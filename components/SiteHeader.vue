<template>
  <header :class="{ scrolling }">
    <container>
      <img class="logo" src="~/assets/images/logo.png" alt="Travis Smith's logo">

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

    .logo {
      max-height: 40px;
    }
  }
}
.logo {
  display: flex;
  justify-content: flex-start;
  max-height: 50px;
  transition: all 0.2s ease-in-out;
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
  position: relative;
  transition: all 0.15s ease-in;
  font-weight: 600;

  &:after {
    content: '';
    display: block;
    width: 100%;
    max-width: 0;
    height: 3px;
    border-radius: 5px;
    background-color: var(--color-primary);
    position: absolute;
    bottom: -5px;
    left: 0;
    opacity: 0;
    transition: all 0.15s ease-in;
  }

  &:visited {
    color: inherit;
  }
  &:hover {
    color: var(--color-primary);
    &::after {
      max-width: 100%;
      opacity: 1;
    }
  }
}
.container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
