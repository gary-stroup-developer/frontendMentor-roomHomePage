window.addEventListener("resize",responsive);

let nav = document.getElementById("myTopnav");

function responsive() {
  if(window.screen.width >= 850){
    nav.className = "topnav";
    document.getElementById("logo").style.display = "block";
  }
};

function myFunction() {
    nav.className += " responsive";
    document.getElementById("logo").style.display = "none";
  }

function closeNav() {
  var x = document.getElementById("myTopnav");
  nav.className = "topnav";
  document.getElementById("logo").style.display = "block";
}