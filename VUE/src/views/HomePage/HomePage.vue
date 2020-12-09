<template>
  <div class="zval">
    <NavBar />
    <Quote />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/HomePage/NavBar.vue";
import Footer from "@/components/HomePage/Footer.vue";
import Quote from "@/components/HomePage/Quote.vue";

export default {
  title: "Tentang Kopi",
  components: {
    NavBar,
    Footer,
    Quote
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}
a {
  text-decoration: none;
  color: #0b0135;
  border-bottom: 2px solid #0b0135;
}
.zval {
  z-index: 50;
}
</style>