$(document).ready(function() {

  function randomQuote() {
  $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "json",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        $("#random_quote").html(response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>");
      }
  });
};

$(function() {
  randomQuote();
});

var baseURL = "https://api.unsplash.com/";
var appID = "4df1f42354643ea43ff6e9475ed6ba4f2984f470baadac55b85df0a37a1e4bbd";

var getRandomFoto = function(){
  $.ajax({
    url: `${baseURL}photos/random`,
    data: {
      client_id: appID,
      w:1280,
      query: 'landscape'
    }
  })
  .done(function(res){
    console.log(res);
    var url = res.urls.regular;


    $("#random_image").attr('src', res.urls.regular);
  })
};

getRandomFoto();

var img;  // Declare variable 'img'.

function setup() {
  createCanvas(500, 500);
  img = loadImage();  // Load the image
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
  // Displays the image at point (0, height/2) at half size
};





}); // end of ready
