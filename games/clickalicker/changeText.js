// Array of texts to cycle through
const texts = [
    "updates coming soon... 😉",
    "never refresh another person's computer. EVER.",
    "say it 5 times fast",
    "clickalickaclickalickaclickalicker",
    "worst game ever",
    "smsoftware > microsoft",
    "smsoftware > google",
    "lickaclicker",
    "concurrent playerbase: 5",
    "e um e appy ear o my eye 👁",
    "just play unblocked games instead",
    "by strawbery milk software",
    "by chocolate milk software",
    "<3",
    ",#",
    "go to sleep bro",
    "192.168.73.12",
    "hi preston 💀",
    "this game causes violence",
    "i promise updates coming...",
    "clickalicker 1 is TRASH",
    "unscwsslcejbb<,g1htic",
    "II > 2",
    "deleting score...",
    "clickalicker > valorant",
    "clickalicker > fortnite",
    "clickalicker > all the games W",
    "how many clickalicks could a clickalicker click until the clickalicker licks its own clicks?"
  ];

  const changingTextElement = document.getElementById("topText");
  let currentIndex = 0;

  function changeText() {
    changingTextElement.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
  }

  // Initial call
  changeText();

  // Call changeText function every 5000 milliseconds (5 seconds)
  setInterval(changeText, 5000);