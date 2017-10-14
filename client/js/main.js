axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function(response) {
  })
  .catch(function(error) {
  });

$(function() {
  randomQuote();
});

var baseURL = "https://api.unsplash.com/";
var appID = "4df1f42354643ea43ff6e9475ed6ba4f2984f470baadac55b85df0a37a1e4bbd";

var getRandomFoto = function() {
  $.ajax({
      url: `${baseURL}photos/random`,
      data: {
        client_id: appID,
        w: 1280,
        query: 'landscape'
      }
    })
    .done(function(res) {
      console.log(res);
      $("#random_image").attr('src', res.urls.regular);
    })
  };

  getRandomFoto();

});
