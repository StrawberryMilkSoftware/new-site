const letters = "abcdefghijklmnopqrstuvwxyz";

let interval = null;

function randomText() {  
  
  let elementtitle = document.getElementById("smilk");
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    elementtitle.innerText = elementtitle.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return elementtitle.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= elementtitle.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration ++;
  }, 30);
}