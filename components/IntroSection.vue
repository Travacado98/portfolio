<template>
  <section>
    <container>
      <div class="text-wrapper">
        <h1>
          Hi, my name is <span class="primary-text">Travis Smith</span>.
          <br>
          I am a <span class="primary-text">self-taught</span> software developer with a focus on <span class="primary-text">front-end</span> web development.
        </h1>
        <btn as="a" href="/TravisSmithResume.pdf" target="_blank">
          View Resume
        </btn>
      </div>
      <div>
        <img src="~/assets/images/me.png" alt="Photo of Travis Smith">
      </div>
    </container>
  </section>
</template>

<style lang="scss" scoped>
img {
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  width: 100%;
  max-width: 600px;

  @media (max-width: 600px) {
    max-width: 100px;
  }
}
section {
  padding: 80px 0;

  @media (max-width: 600px) {
    padding: 40px 0;
  }
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
}
.text-wrapper {
  max-width: 600px;
}
</style>
