function hide() {
    document.getElementById("test").style.display = "block";
}
myInput2.onfocus = function () {
    document.getElementById("message2").style.display = "block";
    if (myInput2.value == myInput.value && myInput2.value != '') {
      reValidate.classList.remove("invalid");
      reValidate.classList.add("valid");
      reValidate.innerText = "password sama";
    } else {
      reValidate.classList.remove("valid");
      reValidate.classList.add("invalid")
      reValidate.innerText = "password tidak sama";
    }
  }
  