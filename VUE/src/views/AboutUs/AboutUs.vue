<template>
  <div>
    <NavBar />
    <About />
  </div>
</template>

<script>
import About from "@/components/AboutUs/About.vue";
import NavBar from "@/components/AboutUs/NavBar.vue";
export default {
  title: "About Us",
  components: {
    About,
    NavBar
  }
};
</script>

<style scoped>
</style>