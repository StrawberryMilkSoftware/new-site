var i = 0;
var txt = "unleash your computer's greatness."; /* The text */
var speed = 25; /* The speed/duration of the effect in milliseconds */

function typeText() {
    if (i < txt.length) {
        document.getElementById("maintitle").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeText, speed);
      }
}
