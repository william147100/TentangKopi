<template>
  <div class="container">
    <div class="headlight">
      <h1 class="mb-4 headlight-header">What's Popular?</h1>
      <div class="row">
        <div class="col">
          <div class="image-box">
            <a href="honey.html">
              <img
                src="https://www.baristainstitute.com/sites/default/files/styles/1x_width_100_wysiwyg/public/images/natural%20kenia.jpg?itok=Y-z-rjOE"
                alt
              />
            </a>
          </div>
        </div>
        <div class="col">
          <h1>Natural Process</h1>
          <p>
            By
            <a href>Kristian</a>
          </p>
          <p>Date : 20-10-2020</p>
          <hr />
          <div class="headlight-body">
            <p>
              Also known as the dry process, natural processing is most old school way to process coffee.
              After picking the coffee cherries from the coffee trees, they are spread out in thin layers to dry in the sun. The drying stations can be a little different depending on the farm or region; some use brick patios, others special raised beds (=tables) which enable air to flow around the cherries, thus more even drying. To avoid mould, fermentation or rotting, the cherries are turned regularly. Once the cherries are properly dry, the skin and dried fruit flesh are removed mechanically and the green coffee is stored and “rested” before exporting it.
            </p>
            <a href="honey.html">Read the full article</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.gallery {
  padding: 100px;
}
.headlight {
  margin-bottom: 30px;
}
.headlight .headlight-header {
  font-size: 20px;
  text-transform: uppercase;
}
.headlight .headlight-body {
  font-size: 15px;
}
.image-box {
  position: relative;
  margin: auto;
  overflow: hidden;
}
.image-box img {
  transition: all 0.8s;
  display: block;
  height: auto;
  transform: scale(1);
}

.image-box:hover img {
  transform: scale(1.05);
}
</style>