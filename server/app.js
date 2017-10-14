let restify = require('restify');
let builder = require('botbuilder');
let axios = require('axios');
let Canvas = require('canvas');


function quoteImage(imageData, quote) {
  // let Image = Canvas.Image
  let canvas = new Canvas(500, 500)
  let ctx = canvas.getContext('2d');

  // ctx.font = '30px Impact';
  // ctx.rotate(.1);
  // ctx.fillText(quote, 50, 100);
  //
  // let te = ctx.measureText('Awesome!');
  // ctx.strokeStyle = 'rgba(0,0,0,0.5)';
  // ctx.beginPath();
  // ctx.lineTo(50, 102);
  // ctx.lineTo(50 + te.width, 102);
  // ctx.stroke();

  let img = new Canvas.Image;
  img.onload = function() {
    ctx.drawImage(img, 0, 0); // Or at whatever offset you like

    ctx.font = '30px Impact';
    ctx.rotate(.1);
    ctx.fillText(quote, 50, 100);

    let te = ctx.measureText('Awesome!');
    ctx.strokeStyle = 'rgba(0,0,0,0.5)';
    ctx.beginPath();
    ctx.lineTo(50, 102);
    ctx.lineTo(50 + te.width, 102);
    ctx.stroke();
  };
  img.src = imageData;
  // ctx.drawImage(imageData);

  // console.log("1. ---------------");
  // console.log(canvas.toDataURL());
  return canvas.toDataURL();

};



// Setup Restify Server
let server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function() {
  console.log('%s listening to %s', server.name, server.url);
});

// Create chat connector for communicating with the Bot Framework Service
let connector = new builder.ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD
});

let baseURL = "https://api.unsplash.com/";
let appID = "4df1f42354643ea43ff6e9475ed6ba4f2984f470baadac55b85df0a37a1e4bbd";


let getRandomFoto = function(session) {
  return axios.get(`${baseURL}photos/random`, {
    params: {
      client_id: appID,
      w: 1280,
      query: 'landscape'
    }
  }).then(function(res) {
    return axios.get(res.data.urls.regular, {
      responseType: 'arraybuffer'
    }).then(function(response) {
      return new Buffer(response.data, 'binary').toString('base64');
    });

    // let card = createHeroCard(session, canvas.toDataURL());
    // console.log(res.data.urls.regular);
    // let msg = new builder.Message(session).addAttachment(card);
    // session.send(msg);
    // $("#random_image").attr('src', res.urls.regular);
  });
};

let getRandomQuote = function() {

  return axios.get("https://api.forismatic.com/api/1.0/", {
    params: {
      method: 'getQuote',
      format: 'json',
      lang: 'en',
      jsonp: '?'
    }
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
let bot = new builder.UniversalBot(connector, function(session) {
  let msg = new builder.Message(session);
  // let card = createHeroCard(session, url);
  let p1 = getRandomFoto();
  let p2 = getRandomQuote();
  // attach the card to the reply message

  Promise.all([p1, p2]).then(values => {
    const imageBase64 = values[0];
    const quoteText = values[1].data.quoteText || "You can do it!";

    console.log('===============');
    // console.log(imageBase64);
    console.log(quoteText);
    console.log('===============');

    //
    //
    let Image = Canvas.Image
    let canvas = new Canvas(500, 500)
    let ctx = canvas.getContext('2d');

    let img = new Image();
    console.log(img)
    img.onload = function() {
      console.log('loading image=============');
      ctx.drawImage(img, 0, 0); // Or at whatever offset you like

      ctx.font = '30px Impact';
      ctx.rotate(.1);
      ctx.fillText(quoteText, 50, 100);

      let te = ctx.measureText('Awesome!');
      ctx.strokeStyle = 'rgba(0,0,0,0.5)';
      ctx.beginPath();
      ctx.lineTo(50, 102);
      ctx.lineTo(50 + te.width, 102);
      ctx.stroke();


      let card = createHeroCard(session, canvas.toDataURL());

      let msg = new builder.Message(session).addAttachment(card);
      console.log('card==========');
      session.send(msg);
    };

    img.onerror = function(e) {
      console.log('========== EEERRRRORRR');
      console.log(e);
    };

    img.src = "data:image/png;base64," + imageBase64;
    console.log('==========');
    // console.log(img)
    console.log("set the image source already");

    // let value = quoteImage(values[0], values[1].data.quoteText);

    // let card = createHeroCard(session, value);
    //
    // let msg = new builder.Message(session).addAttachment(card);
    // session.send(msg);

  });
});
