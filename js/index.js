const goToAbout = function (e) {
  document.getElementById("about").scrollIntoView();
};
const goToServices = function (e) {
  document.getElementById("services").scrollIntoView();
};
const goToTech = function (e) {
  document.getElementById("technology").scrollIntoView();
};
const goToHow = function (e) {
  document.getElementById("how").scrollIntoView();
};
const goToContact = function (e) {
  document.getElementById("contact").scrollIntoView();
};
const goToJoin = function (e) {
  document.getElementById("join").scrollIntoView();
};
document.querySelector(".navToggle").addEventListener(
  "click",
  function (e) {
    document.querySelector(".navToggle").classList.toggle("open");
  },
  false
);

window.onscroll = function () {
  let mybutton = document.getElementById("scrollTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
