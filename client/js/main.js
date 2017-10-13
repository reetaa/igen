$(document).ready(function() {

  function randomQuote() {
  $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "json",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        $("#random_quote").html("<p id='random_quote' class='lead text-center'>" +
          response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>");
        $("#tweet").attr("href", "https://twitter.com/home/?status=" + response.quoteText +
          ' (' + response.quoteAuthor + ')');
      }
  });
};

$(function() {
  randomQuote();
});

$.ajax({
  url: "https://api.unsplash.com/?client_id=4df1f42354643ea43ff6e9475ed6ba4f2984f470baadac55b85df0a37a1e4bbd",
  dataType: "json",
  // data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
  success: function( response ) {
    console.log(response);
    // $("#random_quote").html("<p id='random_quote' class='lead text-center'>" +
    //   response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>");
    // $("#tweet").attr("href", "https://twitter.com/home/?status=" + response.quoteText +
    //   ' (' + response.quoteAuthor + ')');
  }
});




}); // end of ready
