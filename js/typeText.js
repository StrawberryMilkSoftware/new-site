var i = 0;
var txt = 'CRITICAL ERROR DETECTED. ERROR CODE: 404. PROBLEMS WERE FOUND WITH THE PATH YOU ENTERED, AND A LINK WAS NOT FOUND. PLEASE RETURN TO THE HOME PAGE AT STRAWBERRYMILKSOFTWARE.COM'; /* The text */
var txt2 = 'ERROR DETECTED.';
var speed = 50; /* The speed/duration of the effect in milliseconds */

body = document.getElementById("bd");

body.addEventListener("animationend", function typeText() {
    if (i < txt.length) {
        document.getElementById("text").innerHTML += txt.charAt(i);
        document.getElementById("title").innerHTML += txt2.charAt(i);
        i++;
        setTimeout(typeText, speed);
      }
});