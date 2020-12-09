<template>
  <div>
    <NavBar />
    <Top />
    <List />
    <Explore />
    <Footer />
  </div>
</template>

<script>
import Explore from "@/components/ContentMenu/Explore.vue";
import Footer from "@/components/ContentMenu/Footer.vue";
import List from "@/components/ContentMenu/List.vue";
import NavBar from "@/components/ContentMenu/NavBar.vue";
import Top from "@/components/ContentMenu/Top.vue";

export default {
  title: "Menu",
  components: {
    Explore,
    Footer,
    List,
    NavBar,
    Top
  }
};
</script>

<style>
</style>