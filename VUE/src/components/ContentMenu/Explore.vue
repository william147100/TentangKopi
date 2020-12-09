<template>
  <div class="content-end">
    <h1 class="title">Discover other things</h1>
    <div class="card-deck text-center">
      <a href>
        <div class="card">
          <img
            src="https://www.baristainstitute.com/sites/default/files/styles/1x_width_100_wysiwyg/public/images/honey%20nicaragua.jpg?itok=Wx-0qeYB"
            alt
          />
          <h1>Honey</h1>
          <a href>Read article</a>
        </div>
      </a>
      <a href>
        <div class="card">
          <img
            src="https://images.crateandbarrel.com/is/image/Crate/AeropressCoffeeMakerROF16/$web_pdp_main_carousel_low$/190411134729/aerobie-aeropress-coffee-and-espresso-maker.jpg"
            alt
          />
          <h1>Aeropress</h1>
          <a href>Read article</a>
        </div>
      </a>
      <a href>
        <div class="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1UIAFhm9MQ52WXeVa5ek6SWvYM_Gn0Ejicw&usqp=CAU"
            alt
          />
          <h1>V60</h1>
          <a href>Read article</a>
        </div>
      </a>
      <a href>
        <div class="card">
          <img
            src="https://majalah.ottencoffee.co.id/wp-content/uploads/2018/09/french-press-pouring.jpg"
            alt
          />
          <h1>French Press</h1>
          <a href>Read article</a>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Explore",
  props: {
    msg: String
  }
};
</script>

<style>
.content-end {
  margin-top: 30px;
  margin-bottom: 40px;
}
.content-end .title {
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 30px;
}
.content-end .card {
  border-style: none;
}
.content-end .card h1 {
  font-size: 15px;
  margin-top: 15px;
  margin-bottom: 20px;
}
.content-end .card img {
  height: 150px;
  width: 250px;
}
.content-end .card a {
  color: rgb(59, 59, 59);
}
</style>