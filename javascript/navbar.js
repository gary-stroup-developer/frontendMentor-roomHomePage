function myFunction() {
    var x = document.getElementById("myTopnav");
    x.className += " responsive";
    document.getElementById("test").style.display = "none";
  }

  function closeNav() {
    var x = document.getElementById("myTopnav");
    x.className = "topnav";
    document.getElementById("test").style.display = "block";
  }