<template>
  <footer>
    <div class="footer" id="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <h4>Tentang Kopi</h4>
          </div>
          <div class="col-lg-3 col-sm-2 col-xs-3">
            <h3>Need help?</h3>
            <ul>
              <li>
                <a href="contactus.html">Feel free to Contact us</a>
              </li>
              <br />
              <li>
                <p></p>
              </li>
              <li>
                <p></p>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-sm-2 col-xs-3">
            <ul>
              <li>
                <h5>
                  <a href="About Us.html" style="margin-top: 5em">ABOUT US</a>
                </h5>
              </li>
              <li>
                <h5>
                  <a href="sejarah.html">Asal-usul Tentang Kopi</a>
                </h5>
              </li>
              <li>
                <h5>
                  <a href="/Login/signin.html">Login</a>
                </h5>
              </li>
              <li>
                <h5>
                  <a href="/Homepage/isiweb/kamuskopi/kamuskopi.html">Kamuskopi</a>
                </h5>
              </li>
              <li>
                <h5>
                  <a href="#Top">Go up</a>
                </h5>
              </li>
            </ul>
          </div>

          <!--/.row-->
        </div>
        <!--/.container-->
      </div>
      <!--/.footer-->

      <div class="footer-bottom">
        <div class="container">
          <p
            class="pull-left copyright"
            style="text-align: center;"
          >Copyright © Tentang Kopi 2020. All right reserved.</p>
        </div>
      </div>
      <!--/.footer-bottom-->
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.footer {
  background: #222831;
  height: auto;
  padding-bottom: 30px;
  position: relative;
  width: 100%;
  border-bottom: 1px solid #cccccc;
  border-top: 1px solid #dddddd;
  font-family: "Montserrat", sans-serif;
}
.footer p {
  margin: 0;
}
.footer img {
  max-width: 100%;
}
.footer h3 {
  color: white;
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  padding: 40px 0 0px;
  text-transform: uppercase;
  margin-bottom: 15px;
}

.footer h4 {
  color: white;
  font-size: 3em;
  font-weight: 600;
  line-height: 38px;
  padding: 40px 0 10px;
  font-weight: lighter;
}

.footer ul {
  font-size: 13px;
  list-style-type: none;
  margin-left: 0;
  padding-left: 0;
  margin-top: 0px;
  color: #7f8c8d;
  padding: 0 0 8px 0;
}

.email {
  border-bottom: 3px solid #fff;
}
.footer ul li a {
  padding: 0 0 12px 0;
  display: block;
}
.footer a {
  color: white;
  font-weight: lighter;
}

.footer p {
  color: white;
  font-weight: lighter;
  font-size: 17px;
}

.footer a:hover {
  text-decoration: none;
  font-weight: bold;
}
.supportLi h4 {
  font-size: 20px;
  font-weight: lighter;
  line-height: normal;
  margin-bottom: 0 !important;
  padding-bottom: 0;
}

.bg-gray {
  background-image: -moz-linear-gradient(
    center bottom,
    #bbbbbb 0%,
    #f0f0f0 100%
  );
  box-shadow: 0 1px 0 #b4b3b3;
}

.footer a {
  color: whitesmoke;
}

.footer-bottom {
  margin-top: 2em;
  border-top: 1px solid #dddddd;
  padding-top: 20px;
  padding-bottom: 10px;
}
.footer-bottom p.pull-left {
  padding-top: 6px;
  font-size: 0.75em;
}
</style>