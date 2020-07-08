<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <p>
        <strong>{{ user.displayName }} </strong> <small>{{ user.email }} </small>
        <br>
        {{ user.uid }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  computed: {
    user() {
      return this.$store.getters.user;
    }
  }
};
</script>