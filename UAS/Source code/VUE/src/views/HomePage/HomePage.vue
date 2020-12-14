<template>
  <div class="zval">
    <NavBar />
    <Quote />
    <Content />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import Quote from "@/components/Quote.vue";
import Content from "@/components/HomePage/Content.vue";

export default {
  title: "Tentang Kopi",
  components: {
    NavBar,
    Footer,
    Quote,
    Content
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