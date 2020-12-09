<template>
  <div>
    <Sidebar />
    <Profile />
  </div>
</template>

<script>
import Profile from "@/components/ContactUs/Profile.vue";
import Sidebar from "@/components/ContactUs/Sidebar.vue";

export default {
  title: "Contact Us",
  components: {
    Profile,
    Sidebar
  }
};
</script>

<style>
</style>