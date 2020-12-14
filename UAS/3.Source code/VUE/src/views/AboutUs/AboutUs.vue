<template>
  <div>
    <NavBar />
    <Quote />
    <About />
    <Footer />
  </div>
</template>

<script>
import About from "@/components/AboutUs/About.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import Quote from "@/components/Quote.vue";

export default {
  title: "About Us",
  components: {
    About,
    NavBar,
    Footer,
    Quote
  }
};
</script>

<style scoped>
</style>