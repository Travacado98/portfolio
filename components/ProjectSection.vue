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
        {
          title: 'Game of Thrones Wiki',
          description: 'This is a dynamic wiki page that uses a public Game of Thrones API for its backend. It is a React SPA built using React hooks and Bootstrap.',
          langs: ['react', 'boot', 'html', 'css', 'js'],
          link: 'https://todolist-4e182.web.app/',
          image: 'todo1.png',
          source: 'https://github.com/Travacado98/asoiaf-react',
        },
        {
          title: 'Expense Tracker',
          description: 'This is a responsive Vue SPA that uses Firebase Firestore to keep track of a list of user expenses and calculate a running total.',
          langs: ['vue', 'html', 'css', 'sass', 'js'],
          link: 'https://expense-tracker-95ecd.web.app/',
          image: 'expense1.png',
          source: 'https://github.com/Travacado98/expense-tracker-vue',
        },
        {
          title: 'To-Do List',
          description: 'This is a responsive to-do list app made with plain JavaScript. The app’s data is persistent for the user by saving it to localStorage.',
          langs: ['html', 'css', 'sass', 'js'],
          link: 'https://todolist-4e182.web.app/',
          image: 'todo1.png',
          source: 'https://github.com/Travacado98/to-do-list',
        },
        {
          title: 'Milky Way Marketing Website',
          description: 'This is a multi-page static site featuring various unique page layouts, multiple contact forms, and is responsive across all screen sizes.',
          langs: ['html', 'css', 'sass'],
          link: 'https://milk-store-1f23c.web.app/',
          image: 'milkyway1.png',
          source: 'https://github.com/Travacado98/my-first-site',
        },
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
