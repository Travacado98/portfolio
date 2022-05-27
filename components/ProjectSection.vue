<template>
  <section id="projects">
    <container>
      <h2>Projects</h2>
      <project
        v-for="(project, i) in projects"
        :key="project.title"
        :project="project"
        :flip="i % 2"
      />
    </container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { title: 'Game of Thrones Wiki', langs: ['react', 'boot', 'html', 'css', 'js'], link: 'https://todolist-4e182.web.app/', image: 'todo1.png', source: 'https://github.com/Travacado98/asoiaf-react' },
        { title: 'Expense Tracker', langs: ['vue', 'html', 'css', 'sass', 'js'], link: 'https://expense-tracker-95ecd.web.app/', image: 'expense1.png', source: 'https://github.com/Travacado98/expense-tracker-vue' },
        { title: 'To-Do List', langs: ['html', 'css', 'sass', 'js'], link: 'https://todolist-4e182.web.app/', image: 'todo1.png', source: 'https://github.com/Travacado98/to-do-list' },
        { title: 'Milky Way Marketing Website', langs: ['html', 'css', 'sass'], link: 'https://milk-store-1f23c.web.app/', image: 'todo1.png', source: 'https://github.com/Travacado98/my-first-site' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 0;
}
</style>
