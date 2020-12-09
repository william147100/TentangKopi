<template>
  <div>
    <NavBar />
    <Body />
    <Footer />
  </div>
</template>

<script>
import Body from "@/components/Sejarah/Body.vue";
import Footer from "@/components/Sejarah/Footer.vue";
import NavBar from "@/components/Sejarah/NavBar.vue";

export default {
  title: "Sejarah",
  components: {
    Body,
    Footer,
    NavBar
  }
};
</script>

<style>
</style>