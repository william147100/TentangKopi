<template>
  <div class="SignIn">
    <SignIn />
  </div>
</template>

<script>
import SignIn from "@/components/Auth/SignIn.vue";

export default {
  title: "Sign In",
  components: {
    SignIn
  }
};
</script>

<style scoped>
.SignIn {
  background-image: url("../../assets/img/background.jpg");
  background-size: cover;
  height: 100vh;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
}
</style>>
