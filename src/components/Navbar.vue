<template>
  <nav class="main-nav" v-if="isRole1">
    <div class="container">
      <ul class="main-nav__list">
        <li class="main-nav__item">
          <router-link class="main-nav__link" to="/">
            Главная
          </router-link>
        </li>
        <li class="main-nav__item">
          <router-link class="main-nav__link" to="/dashboard">
            Дашборд
          </router-link>
        </li>
        <li class="main-nav__item">
          <router-link class="main-nav__link" to="/reports">
            Отчеты
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
/* eslint-disable*/
export default {
  name: "Navbar",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    isRole1() {
      if (this.currentUser && this.currentUser['role']) {
        return this.currentUser['role'].includes('role1');
      }

      return false;
    },

  },
}
</script>

<style scoped>

</style>
