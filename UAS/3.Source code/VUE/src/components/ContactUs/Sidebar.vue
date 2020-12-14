<template>
  <nav
    class="w3-sidebar w3-bar-block w3-collapse w3-white w3-animate-left w3-card"
    style="z-index:3;width:320px;"
    id="mySidebar"
  >
    <a href="Website Ilmu Kopi.html" class="w3-bar-item w3-button w3-border-bottom w3-large">
      <i class="fas fa-home"></i>Home
    </a>
    <a
      href="sejarah.html"
      class="w3-bar-item w3-button w3-border-bottom w3-large w3-hover-light-grey"
    >
      <i class="fas fa-history"></i>Sejarah
    </a>
    <a
      href="About Us.html"
      class="w3-bar-item w3-button w3-hover-black w3-border-bottom w3-large w3-hover-black"
      style="color: black;"
    >
      <i class="far fa-address-card"></i>About US
    </a>
    <a
      href="isiweb/kamuskopi/kamuskopi.html"
      class="w3-bar-item w3-button w3-border-bottom w3-large w3-hover-light-grey"
    >Kamus</a>
    <a
      href="javascript:void(0)"
      onclick="w3_close()"
      title="Close Sidemenu"
      class="w3-bar-item w3-button w3-hide-large w3-large"
    >
      Close
      <i class="fa fa-remove"></i>
    </a>
    <a
      href="javascript:void(0)"
      class="w3-bar-item w3-button w3-dark-grey w3-button w3-hover-black w3-left-align"
      onclick="document.getElementById('id01').style.display='block'"
    >
      New Message
      <i class="w3-padding fa fa-pencil"></i>
    </a>
    <a id="myBtn" onclick="myFunc('Demo1')" href="javascript:void(0)" class="w3-bar-item w3-button">
      <i class="fa fa-inbox w3-margin-right"></i>Contact (5)
      <i class="w3-margin-left fa fa-caret-down"></i>
    </a>
    <div id="Demo1" class="w3-hide w3-animate-left">
      <a
        href="javascript:void(0)"
        class="w3-bar-item w3-button w3-border-bottom test w3-hover-light-grey"
        onclick="openMail('Taddo');w3_close();"
        id="firstTab"
      >
        <div class="w3-container">
          <img
            class="w3-round w3-margin-right"
            src="https://github.com/william147100/TentangKopi/blob/main/Image/WhatsApp%20Image%202020-09-16%20at%2022.46.51.jpeg?raw=true"
            style="width:15%;"
          />
          <span class="w3-opacity w3-large">Taddo Tamiko</span>
          <h6>Contact US!</h6>
        </div>
      </a>
      <a
        href="javascript:void(0)"
        class="w3-bar-item w3-button w3-border-bottom test w3-hover-light-grey"
        onclick="openMail('Willaim');w3_close();"
      >
        <div class="w3-container">
          <img
            class="w3-round w3-margin-right"
            src="https://github.com/william147100/TentangKopi/blob/main/Image/S__55296004.jpg?raw=true"
            style="width:15%;"
          />
          <span class="w3-opacity w3-large">Willaim Wijaksana</span>
          <p>Text Me! :)</p>
        </div>
      </a>
      <a
        href="javascript:void(0)"
        class="w3-bar-item w3-button w3-border-bottom test w3-hover-light-grey"
        onclick="openMail('Leonard');w3_close();"
      >
        <div class="w3-container">
          <img
            class="w3-round w3-margin-right"
            src="https://github.com/william147100/TentangKopi/blob/main/Image/16623.jpg?raw=true"
            style="width:15%;"
          />
          <span class="w3-opacity w3-large">Leonard Tanuwijaya</span>
          <p>Hello! Nice To Meet You</p>
        </div>
      </a>
      <a
        href="javascript:void(0)"
        class="w3-bar-item w3-button w3-border-bottom test w3-hover-light-grey"
        onclick="openMail('Hansen');w3_close();"
      >
        <div class="w3-container">
          <img
            class="w3-round w3-margin-right"
            src="https://github.com/william147100/TentangKopi/blob/main/Image/155338.jpg?raw=true"
            style="width:15%;"
          />
          <span class="w3-opacity w3-large">Ricky Hansen Kurnia</span>
          <p>Welcome!</p>
        </div>
      </a>
      <a
        href="javascript:void(0)"
        class="w3-bar-item w3-button w3-border-bottom test w3-hover-light-grey"
        onclick="openMail('Kristian');w3_close();"
      >
        <div class="w3-container">
          <img
            class="w3-round w3-margin-right"
            src="https://github.com/william147100/TentangKopi/blob/main/Image/27482_0.jpg?raw=true"
            style="width:15%;"
          />
          <span class="w3-opacity w3-large">Kristian Davidson Runtu</span>
          <p>Hello Coffee World!</p>
        </div>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SideaBar",
  props: {
    msg: String
  }
};

var openInbox = document.getElementById("myBtn");
openInbox.click();
/*
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

function myFunc(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-red";
  } else {
    x.className = x.className.replace(" w3-show", "");
    x.previousElementSibling.className = x.previousElementSibling.className.replace(
      " w3-red",
      ""
    );
  }
}
*/
openMail("Taddo");
function openMail(personName) {
  var i;
  var x = document.getElementsByClassName("person");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x = document.getElementsByClassName("test");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" w3-light-grey", "");
  }
  document.getElementById(personName).style.display = "block";
  event.currentTarget.className += " w3-light-grey";
}
var openTab = document.getElementById("firstTab");
openTab.click();
</script>

<style scoped>
.navbar {
  overflow: hidden;
  background-color: #333;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.navbar a:hover {
  background: #f1f1f1;
  color: black;
}

.navbar a.active {
  background-color: #4caf50;
  color: white;
}
</style>