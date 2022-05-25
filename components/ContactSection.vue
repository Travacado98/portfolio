<template>
  <section id="contact">
    <container>
      <h2>Contact</h2>
      <form action="">
        <text-input label="Name" />
        <text-input for="email" label="Email" />
        <text-input for="message" label="Message" type="textarea" />
        <btn type="submit" @click.prevent="send">
          Submit
        </btn>
      </form>
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
</style>
