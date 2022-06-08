<template>
  <div class="project" :class="{ flip }">
    <img v-if="project.image" class="project-image" :src="require(`~/assets/images/${project.image}`)" alt="">
    <div>
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <div class="lang-icons">
        <i
          v-for="lang in project.langs"
          :key="lang"
          :class="images[lang]"
        />
      </div>
      <btn as="a" :href="project.link" target="_blank">
        View Project
      </btn>
      <btn as="a" :href="project.source" target="_blank" secondary>
        View Source
      </btn>
    </div>
  </div>
</template>

<script>
const IMAGE_MAP = {
  html: 'fa-brands fa-html5',
  css: 'fa-brands fa-css3',
  js: 'fa-brands fa-js',
  sass: 'fa-brands fa-sass',
  boot: 'fa-brands fa-bootstrap',
  react: 'fa-brands fa-react',
  nuxt: 'fa-brands fa-nuxtjs',
  vue: 'fa-brands fa-vuejs',
};

export default {
  props: {
    project: Object,
    flip: Boolean,
  },
  data() {
    return {
      images: IMAGE_MAP,
    };
  },
};
</script>

<style lang="scss" scoped>
.project {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
  padding: 40px 0;

  &.flip {
    flex-direction: row-reverse;

    @media (max-width: 900px) {
      flex-direction: column;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    padding: 30px 0;
  }
}
.project-image {
  max-width: 750px;
  width: 100%;
  box-shadow: var(--shadow);
  border-radius: var(--border-radius);

  @media (max-width: 1200px) {
    max-width: 500px;
  }
  @media (max-width: 900px) {
    max-width: 100%;
  }

}
.lang-icons {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  font-size: 32px;

  @media (max-width: 600px) {
    font-size: 24px;
  }
}
.btn {
  margin-right: 5px;
}

p {
  margin-bottom: 30px;
}
</style>
