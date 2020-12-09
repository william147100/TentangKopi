<template>
  <div>
    <NavBar />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Content/Footer.vue";
import NavBar from "@/components/Content/NavBar.vue";

export default {
  title: "Content",
  components: {
    Footer,
    NavBar
  }
};
</script>

<style>
</style>