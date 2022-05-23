
// window.onscroll = scrollHeader();

// var navbar = document.getElementsByClassName("nav");
// var sticky = navbar.offsetTop;

// const scrollHeader = () => {
//     if (window.pageYOffset >= sticky) {
//       navbar[0].classList.add("sticky")
//     } else {
//       navbar[0].classList.remove("sticky");
//     }
// }

window.onscroll = function() {scrollHeader()};

var navbar = document.getElementsByClassName("nav");
var sticky = navbar[0].offsetTop;

function scrollHeader() {
  if (window.pageYOffset >= sticky) {
    navbar[0].classList.add("sticky")
  } else {
    navbar[0].classList.remove("sticky");
  }
}