function darkMode(){
  document.getElementById('body').style.backgroundColor = '#2b2b2b';
  var x = document.getElementsByClassName("button");
  for (var i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "white";
  }
}

function lightMode(){
  document.getElementById('body').style.backgroundColor = 'pink';
  var x = document.getElementsByClassName("button");
  for (var i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#e1befe";
  }
}