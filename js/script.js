
let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");
let twitterBtn = document.querySelector("#Tbtn");
let mode = document.getElementById("mode");
let buttons = document.querySelectorAll(".allBtn");
let copyBtn = document.querySelector('#Cbtn');

btn.addEventListener('click', function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[random].text;
  writer.innerHTML = '-' + quotes[random].author;
  copyBtn.style.backgroundColor = '#fb7413';
  copyBtn.innerHTML = "Copy to Clipboard";
});


twitterBtn.addEventListener('click', tweetQuote);
copyBtn.addEventListener('click', copyQuote);


// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.innerText} ${writer.innerText}`;
  window.open(twitterUrl, "_blank");
}


// change mode
mode.addEventListener("click", () => {
  let element = document.body;
  element.classList.toggle("dark");

  let buttons = document.querySelectorAll(".allBtn");
  let modeText = document.querySelector("#modeText");

  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].style.backgroundColor !== "white") {
      buttons[i].style.backgroundColor = "white";
      buttons[i].style.color = "#222";
      modeText.innerHTML = "Dark Mode";
      mode.style.borderColor = "black";
    } else {
      buttons[i].style.backgroundColor = "hsl(25, 97%, 53%)";
      buttons[i].style.color = "#fff";
      modeText.innerHTML = "Light Mode";
      mode.style.borderColor = "white";
    }
  }
});

// Copy to Clipboard button
function copyQuote() {
  // Get the quote

  //Show popup notification
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 2000);

  var copiedQuote = quote.innerHTML;

  // Copy quote to clipboard
  navigator.clipboard.writeText(copiedQuote);
}