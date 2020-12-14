<template>
  <div>
    <NavBar />
    <Title />
    <Gallery />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Gallery from "@/components/Gallery/Gallery.vue";
import NavBar from "@/components/NavBar.vue";
import Title from "@/components/Quote.vue";

export default {
  title: "Gallery",
  components: {
    Footer,
    Gallery,
    NavBar,
    Title
  }
};
</script>

<style scoped>
</style>