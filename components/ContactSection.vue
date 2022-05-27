<template>
  <section id="contact">
    <container>
      <h2>Contact</h2>
      <div>
        <a href="mailto:twscodes@gmail.com">twscodes@gmail.com</a>
        <a href="tel:6238267393">(623) 826-7393</a>
      </div>
    </container>
  </section>
</template>

<script>
export default {
  data: () => ({
    email: '',
    message: '',
  }),
  methods: {
    send() {
      this.$mail.send({
        from: this.email,
        subject: 'Contact form message',
        text: this.message,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
form {
  display: flex;
  flex-direction: column;
  width: 500px;
}
section {
  padding: 40px 0;
}
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
a {
  color: inherit;
  cursor: pointer;
  transition: color 0.1s ease-in;
  text-decoration: none;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: var(--color-primary);
    text-decoration: underline;
  }
}
</style>
