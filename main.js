// Update the tweet-quote link
function updateTweetQuote() {
 const tweetQuoteLink = document.getElementById('tweet-quote');
 const quote = document.getElementById('quote').textContent;
 const author = document.getElementById('author').textContent;

 // Make sure the quote and author are not empty before updating the href attribute
 if (quote && author) {
    tweetQuoteLink.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote + ' - ' + author)}`;
 } else {
    // Display a console warning if the quote or author is empty
    console.warn('The quote or author is empty. The "tweet-quote" link will not be updated.');
 }
}

// Call the updateTweetQuote function whenever a new quote is displayed
document.getElementById('new-quote').addEventListener('click', function() {
 // Fetch a new quote from the API and update the display
 fetch('https://quote-api.glitch.me/random')
    .then(response => response.json())
    .then(data => {
      document.getElementById('quote').textContent = data.quote;
      document.getElementById('author').textContent = data.author;
      updateTweetQuote(); // Update the tweet-quote link after fetching a new quote
    });
});
