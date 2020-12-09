<template>
  <div class="home">
    <h1 class="display" style="color:whitesmoke;">
      "A bad day with coffee and sebat is better than a good day
      without IT"
    </h1>
  </div>
</template>

<script>
export default {
  name: "quote",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100vh;
  background-image: url("../../assets/img/HomePage/homepagebg.png");
  background-position: center top;
  background-size: cover;
}
.display {
  padding-top: 250px;
  padding-left: 100px;
  text-align: left;
  width: 100%;
  max-width: 600px;
  font-size: 40px;
  font-weight: lighter;
  font-family: Arial, Helvetica, sans-serif;
  color: whitesmoke;
}
</style>