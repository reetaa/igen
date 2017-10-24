# igen - Inspiration Generator

## She Hacks 2017
14 Oct 2017

**Team: Weijia and Reeta**

This app will let you find a role model to look up and get everyday motivational posters.
It's a node project with bot for inspirational posters - promoting female achievers.

## How to run and test it out?
- Download the repo and enter the `server` directory and run `npm install`
- Download the [Microsoft Bot Framework Emulator](https://github.com/Microsoft/BotFramework-Emulator/releases/tag/v3.5.31)
- Install the required dependencies for utilising [Canvas API](https://www.npmjs.com/package/canvas) in Node.js. For examples, if you are using a Mac, run `brew install pkg-config cairo libpng jpeg giflib` under the `server` directory and then `npm install canvas`. 
- Now run `node app.js` and go back to emulator and click connect, when it succeeds, type anything to view the bot response.   


## Why we joined `She Hacks`?

To get mentorship, to learn, to network, to be inspired, to inspire with the app we create.

We are unable to find female role models around us.
In IT industry, amazing women exist but not visible.

## What are we making?
- Open Source app
- Proactive inspirational posters
- Integrated with the slack/skype/service of your choice
- Get motivated
  - example case: `Girl Geek` team adds a channel to their slack dedicated for inspirations

## How did it come along?
- Microsoft bot framework - `Botbuilder`
- `Node.js`
- `Canvas`
- `Unplashed API` - image
- `Forismatic API` - quotes
- `Axios` - ajax for node
- `Restify`
Motivations shouldn’t cost money so this app is open sourced.

## MVP?
- bot that provides motivational posters
- 2 APIs integrated in node.js
The node server.fetches: `image response`. `text response`.
`node.js` draws `canvas` with layer of image and the quote.
Started as front end project and completed doing node bot. Biggest learning experience.

## What next?
- expect app to be used practically once it can be `integrate with other apps`
- met amazing people and mentors so looking into learning `VR` and `NLP`
- also will look at `smart bots`
- take part more to `learn and improve`

## MIT License

Copyright (c) 2017 Weijia and Reeta

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
