let restify = require('restify');
let builder = require('botbuilder');
let axios = require('axios');

// Setup Restify Server
let server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url);
});

// Create chat connector for communicating with the Bot Framework Service
let connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

let baseURL = "https://api.unsplash.com/";
let appID = "4df1f42354643ea43ff6e9475ed6ba4f2984f470baadac55b85df0a37a1e4bbd";

let getRandomFoto = function(session){
  axios.get(`${baseURL}photos/random`, {
    params: {
      client_id: appID,
      w: 1280,
      query: 'landscape'
    }
  }).then(function(res){
    let card = createHeroCard(session, res.data.urls.regular);
    console.log(res.data.urls.regular);
    let msg = new builder.Message(session).addAttachment(card);
    session.send(msg);
    // $("#random_image").attr('src', res.urls.regular);
  })
};


const image = 'https://sec.ch9.ms/ch9/7ff5/e07cfef0-aa3b-40bb-9baa-7c9ef8ff7ff5/buildreactionbotframework_960.jpg';

function createHeroCard(session, url) {
  return new builder.HeroCard(session)
    .images([
      builder.CardImage.create(session, url)
    ])
  }
// Listen for messages from users
server.post('/api/messages', connector.listen());

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
let bot = new builder.UniversalBot(connector, function (session) {
  let msg = new builder.Message(session);
  // let card = createHeroCard(session, url);
  getRandomFoto(session);
   // attach the card to the reply message


});
