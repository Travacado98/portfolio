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
        { title: 'To Do List', langs: ['html', 'css', 'js'], link: 'https://todolist-4e182.web.app/', image: 'todo1.png' },
        { title: 'Expense List', langs: ['html', 'css', 'js', 'vue'], link: 'https://expense-tracker-95ecd.web.app/', image: 'expense1.png' },
        { title: 'Project #3', langs: ['html', 'css', 'js'], link: 'https://youtube.com', image: 'todo1.png' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
