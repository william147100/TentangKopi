<template>
  <div class="SignUp">
    <SignUp />
    <div class="col">
      <label class="label">
        <h1 class="h3">Daftar sekarang!</h1>
        <p>Ayo mulai petualangan kopimu sekarang</p>
      </label>
    </div>
  </div>
</template>

<script>
import SignUp from "@/components/Auth/SignUp.vue";

export default {
  title: "Register",
  components: {
    SignUp
  }
};
</script>

<style scoped>
.SignUp {
  background-image: url("../../assets/img/background.jpg");
  background-size: cover;
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: left;
}
.label {
  color: whitesmoke;
  font-family: "open sans", sans-serif;
}
</style>