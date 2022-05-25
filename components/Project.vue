<template>
  <div class="project" :class="{ flip }">
    <img v-if="project.image" class="project-image" :src="require(`~/assets/images/${project.image}`)" alt="">
    <div>
      <h3>{{ project.title }}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        voluptates autem dignissimos veritatis consectetur quasi a voluptate
        repellat? Officia, dignissimos culpa? Quis maiores accusamus ipsam
        libero adipisci minus atque commodi?
      </p>
      <div class="lang-icons">
        <i
          v-for="lang in project.langs"
          :key="lang"
          :class="images[lang]"
        /></i>
      </div>
      <btn as="a" :href="project.link" target="_blank">
        View Project
      </btn>
    </div>
  </div>
</template>

<script>
const IMAGE_MAP = {
  html: 'fa-brands fa-html5',
  css: 'fa-brands fa-css3',
  js: 'fa-brands fa-js',
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
  }
}
.project-image {
  max-height: 500px;
  box-shadow: var(--shadow);
  border-radius: var(--border-radius);
}
.lang-icons {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  font-size: 32px;
}
</style>
