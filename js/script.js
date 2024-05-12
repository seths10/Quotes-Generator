let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");
let xBtn = document.querySelector("#Xbtn");
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

xBtn.addEventListener('click', postQuote);
copyBtn.addEventListener('click', copyQuote);

// Download Image
const downloadImage = () => {
  const quoteText = document.querySelector(".quote").innerText;
  const writer = document.querySelector(".writer").innerText.substring(1).toLowerCase();

  // Create canvas element
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  
  // Set canvas dimensions
  canvas.width = 500; // Adjust as needed
  canvas.height = 200; // Adjust as needed
  
  // Set text style
  context.font = "16px 'Helvetica Neue'";
  context.fillStyle = "black";
  context.textAlign = "center";
  context.textBaseline = "middle";

  // Split quote into lines
  const words = quoteText.split(" ");
  let lines = [];
  let line = "";
  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + " ";
    const metrics = context.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > canvas.width && i > 0) {
      lines.push(line);
      line = words[i] + " ";
    } else {
      line = testLine;
    }
  }
  lines.push(line);

  // Draw text onto canvas
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillText(lines.join("\n"), canvas.width / 2, canvas.height / 2);

  // Convert canvas to data URL
  const dataURL = canvas.toDataURL();

  // Create anchor element to download image
  const link = document.createElement("a");
  link.download = `${writer}-quote.png`;
  link.href = dataURL;
  link.click();
};
  
// Post Quote on X (Twitter)
function postQuote() {
  const xUrl = `https://twitter.com/intent/tweet?text=${quote.innerText} ${writer.innerText}`;
  window.open(xUrl, "_blank");
}

// change mode
mode.addEventListener("click", () => {
  let element = document.body;
  element.classList.toggle("dark");

  const xLogo = document.getElementById("x-logo");
  if (element.classList.contains("dark")){
    xLogo.src = "./icons/x-twitter-light-mode.svg";
  } else {
    xLogo.src = "./icons/x-twitter-dark-mode.svg";
  }

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
