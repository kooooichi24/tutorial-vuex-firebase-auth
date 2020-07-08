<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <Authentication />
  </div>
</template>

<script>
import Authentication from '@/components/Authentication';

export default {
  name: 'Navigation',
  components: {
    Authentication,
  },
};
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
