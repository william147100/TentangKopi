<template>
  <div class="container">
    <hr />
    <div>
      <h1 class="content-title text-center">OTHER PROCESSES</h1>
      <div class="row">
        <div class="col-lg-4 mb-4">
          <div class="card">
            <img
              src="https://images.crateandbarrel.com/is/image/Crate/AeropressCoffeeMakerROF16/$web_pdp_main_carousel_low$/190411134729/aerobie-aeropress-coffee-and-espresso-maker.jpg"
              alt
              class="card-img-top"
              style="width:350px;height:240px;"
            />
            <div class="card-body">
              <h5 class="card-title">Honey</h5>
              <p class="card-text">Belajar seduh dengan Aeropress!</p>
              <a href="honey.html" class="btn btn-outline-success btn-sm">Read More</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-4">
          <div class="card">
            <img
              src="https://www.homegrounds.co/wp-content/uploads/2019/09/siphon.jpg"
              alt
              style="width:350px;height:240px;"
              class="card-img-top"
            />
            <div class="card-body">
              <h5 class="card-title">Hybrid</h5>
              <p class="card-text">Belajar seduh dengan Siphon!</p>
              <a href="hybrid.html" class="btn btn-outline-success btn-sm">Read More</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-4">
          <div class="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1UIAFhm9MQ52WXeVa5ek6SWvYM_Gn0Ejicw&usqp=CAU"
              alt
              class="card-img-top"
            />
            <div class="card-body">
              <h5 class="card-title">Natural</h5>
              <p class="card-text">Belajar seduh dengan V60!</p>
              <a href="natural.html" class="btn btn-outline-success btn-sm">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 mb-4">
        <div class="card">
          <img
            src="https://grosche.ca/wp-content/uploads/2015/10/milano-white-header_01.jpg"
            alt
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">Washed</h5>
            <p class="card-text">Belajar seduh Moka pot!</p>
            <a href="washed.html" class="btn btn-outline-success btn-sm">Read More</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-4">
        <div class="card">
          <img
            src="https://majalah.ottencoffee.co.id/wp-content/uploads/2018/09/french-press-pouring.jpg"
            alt
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">Wine</h5>
            <p class="card-text">Belajar seduh dengan French press!</p>
            <a href="wine.html" class="btn btn-outline-success btn-sm">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "list",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.content-title {
  font-size: 15px;
  margin-top: 30px;
  margin-bottom: 40px;
}
</style>