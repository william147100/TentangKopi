<template>
  <div>
    <NavBar />
    <Title />
    <Gallery />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Gallery/Footer.vue";
import Gallery from "@/components/Gallery/Gallery.vue";
import NavBar from "@/components/Gallery/NavBar.vue";
import Title from "@/components/Gallery/Title.vue";

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

<style>
</style>