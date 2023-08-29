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
    "how many clickalicks could a clickalicker click until the clickalicker licks its own clicks?",
    "why is splash text called splash text? i mean, it's not exactly splashing, it's simply appearing on the screen. what does this text have to do with water or other liquids? this is weird...",
    "sorry for that",
    "still deleting score...",
    "this game is now ok i guess",
    "why are you playing this game?",
    "clickalicker > cookie clicker!",
    "abcdefg",
    "hijk",
    "lmnop",
    "qrs",
    "tuv",
    "wx",
    "y and z",
    "resetting save file...",
    "destroying clickalicker II codebase..."
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