function openNav() {
    document.getElementById("mySidenav").style.width = "400px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
/*
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 20) {
      document.getElementById("nav-bar").style.display = "none";
    } else {
      document.getElementById("nav-bar").style.display = "initial";
    }
  }*/











var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header-items").style.top = "0";
  } else {
    document.getElementById("header-items").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}