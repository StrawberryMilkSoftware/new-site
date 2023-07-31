document.getElementById("button").addEventListener("click") => function(e){
  e.preventDefault()

  while(true) {
  url = document.getElementById('hookurl').value;
  title = document.getElementById('titletext').value;
  
  const request = new XMLHttpRequest();
  request.open("POST", url);
  request.setRequestHeader('Content-type', 'application/json');

  const params = {
    username: "strawberryHook",
    avatar_url: "",
    content: title + "\n\nSpammed by strawberryHook"
  }
  request.send(JSON.stringify(params));

  }
  
  
}
