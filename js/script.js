let btn = document.querySelector('#Qbtn');
let quote = document.querySelector('.quote');
let writer = document.querySelector('.writer');
let twitterBtn = document.querySelector('#Tbtn');
let copyBtn = document.querySelector('#Cbtn');

btn.addEventListener('click', function () {
	let random = Math.floor(Math.random() * quotes.length);
	quote.innerHTML = quotes[random].text;
	writer.innerHTML = '-' + quotes[random].author;
});

twitterBtn.addEventListener('click', tweetQuote);

copyBtn.addEventListener('click', copyQuote);

// Tweet Quote
function tweetQuote() {
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.innerText} ${writer.innerText}`;
	window.open(twitterUrl, '_blank');
}

// Copy to Clipboard button
function copyQuote() {
	// Get the quote
	var copiedQuote = quote.innerHTML;

	// Copy quote to clipboard
	navigator.clipboard.writeText(copiedQuote);
}