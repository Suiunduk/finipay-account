<template>
  <div class="container">
    <header class="mt-5">
      <h3>Главная страница</h3>
    </header>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      content: "",
    };
  },
  mounted() {
    // UserService.getPublicContent().then(
    //   (response) => {
    //     this.content = response.data;
    //   },
    //   (error) => {
    //     this.content =
    //       (error.response &&
    //         error.response.data &&
    //         error.response.data.message) ||
    //       error.message ||
    //       error.toString();
    //   }
    // );
  },
};
</script>
