<template>
  <div>
    <div class="bgimagebwh">
      <div class="learn">
        <div class="bg col-6"></div>
        <div class="col col-5">
          <h2 class="myH2">Tentang Kopi</h2>
          <p class="p mt-2 mb-4">
            Kami adalah kumpulan orang pecinta kopi yang ingin memberikan pengetahuan tentang kopi kepada semua
            orang
          </p>
          <a href="about" class="p btn btn-outline-dark" style="font-size: large;">
            Ketahui lebih
            lanjut
          </a>
        </div>
      </div>
    </div>

    <div class="box">
      <div class="container card-deck text-center">
        <div class="row">
          <a href="sejarah" class="card">
            <img src="../../assets/img/HomePage/history.png" alt="test" class="card-img-top icon" />
            <div class="card-body d-flex flex-column">
              <h1 class="mt-4 mb-4">Belajar Sejarah</h1>
              <h5 class="card-title">Awal mulanya</h5>
              <p class="card-text">Berawal dari 2018 dimana coffe shop sedang marak-maraknya.</p>
            </div>
          </a>
          <a href="menu" class="card">
            <img src="../../assets/img/HomePage/proses.png" alt class="card-img-top icon" />
            <div class="card-body d-flex flex-column">
              <h1 class="mt-4 mb-4">Belajar Proses</h1>
              <h5 class="card-title">Proses buah kopi menjadi biji kopi</h5>
              <p
                class="card-text"
              >Mungkin terdapat banyak macam,Kami akan menjelaskan 5 yang terkenal.</p>
            </div>
          </a>
          <a href="menu" class="card">
            <img src="../../assets/img/HomePage/kopi.png" alt class="card-img-top icon" />
            <div class="card-body d-flex flex-column">
              <h1 class="mt-4 mb-4">Belajar Penyeduhan</h1>
              <h5 class="card-title">Belajar menyeduh kopi dengan berbagai metode:</h5>
              <p class="card-text"></p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "content",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.learn {
  padding: 70px;
  display: flex;
  align-items: center;
}
.learn .p {
  font-size: 15px;
  text-align: left;
  font-family: "Roboto Slab", serif;
  margin-left: 20px;
}
.learn .bg {
  height: 400px;
  box-shadow: 25px 25px 50px 0 #eeeeee inset, -25px -25px 50px 0 #eeeeee inset;
  background-image: url(https://i2.wp.com/www.coday.id/wp-content/uploads/2019/06/Biaya-Kursus-Barista-di-Jogja.jpg?fit=626%2C417&ssl=1);
}
.myH2 {
  margin-left: 20px;
  font-size: 5rem;
  color: black;
  font-family: "Roboto Slab", serif;
}
.myP {
  text-align: justify;
  padding-left: 15%;
  padding-right: 15%;
  font-size: 20px;
}
.box {
  padding: 25px;
  background-color: #382112;
  background-image: url(https://image.freepik.com/free-photo/close-up-background-coffee-beans_23-2148349677.jpg);
  background-blend-mode: overlay;
  background-repeat: repeat;
  background-size: 100%;
}
.box a,
a:hover,
a:active,
a:focus {
  color: white;
  text-decoration: none;
}

.box .card-width {
  width: 100%;
}

.box-part {
  background-color: #393e46;
  border-radius: 0;
  padding: 30px 5px;
  margin: 30px 5px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
}

.kotakawal {
  background: #393e46;
  border-radius: 0;
  margin: 10px 60px;
  padding: 30px;
}

.kotakgambar {
  background: white;
  border-radius: 0;
  margin: 0px 0px;
  padding: 0px;
}

.fontkotak {
  font-size: 16px;
  color: whitesmoke;
  text-align: left;
}

.box .container {
  padding: 70px;
  margin: auto;
  color: #eeeeee;
}
.box .container .card {
  height: 400px;
  background-color: #393e46;
  box-shadow: 25px 25px 100px 0 black;
  transition: all 0.2s ease-in-out;
}
.box .container .card:hover {
  transform: scale(1.1);
}
.box .container .icon {
  max-width: 75px;
  max-height: 75px;
  margin: auto;
  margin-top: 50px;
}
.text {
  margin: 20px 20px;
  color: white;
}

.fa {
  color: #4183d7;
}

.isicard {
  font-family: Arial, Helvetica, sans-serif;
}
.card {
  font-size: 10px;
  background-color: #eeeeee;
}
.card a {
  text-decoration: none;
  color: whitesmoke;
}
</style>