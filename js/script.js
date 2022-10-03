let btn = document.querySelector('#Qbtn');
let quote = document.querySelector('.quote');
let writer = document.querySelector('.writer');
let twitterBtn = document.querySelector('#Tbtn');

btn.addEventListener('click', function () {
	let random = Math.floor(Math.random() * quotes.length);
	quote.innerHTML = quotes[random].text;
	writer.innerHTML = '-' + quotes[random].author;
});

twitterBtn.addEventListener('click', tweetQuote());

// Tweet Quote
function tweetQuote() {
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.innerText} ${writer.innerText}`;
	window.open(twitterUrl, '_blank');
}
