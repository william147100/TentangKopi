<template>
  <div>
    <NavBar />
    <Sidebar />
    <Content />
  </div>
</template>

<script>
import Content from "@/components/Dashboard/Content.vue";
import NavBar from "@/components/Dashboard/NavBar.vue";
import Sidebar from "@/components/Dashboard/SideBar.vue";

export default {
  title: "Dashboard",
  components: {
    Content,
    NavBar,
    Sidebar
  }
};
</script>

<style>
</style>