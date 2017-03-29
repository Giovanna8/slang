// whatever is in '' needs to be written the same as in npm packages.
const express = require('express');
const bodyParser = require('body-parser');
const { resolve } = require('path');

const firebase = require("firebase");

//Needed to be able to use express
const app = express();

/* The following gets the body-parser(Middleware) to work: 
  '.use' will be "used" with pretty much all Middleware. */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



/* Turns the response.sendFile (below) into an absloute path instead of a relative path (in other words, it makes express .get link to the file no matter what directory folder it is in) and makes it publicly(to the browser) available (so you don't get an error) */
app.get(express.static(resolve(__dirname, '../src/index.html')));


//Links(gets) server to index.html 
app.get('/', (request, response, next) => {
    response.sendFile(resolve(__dirname, '../src/index.html'))
})


//This gets the server(Express) to work
const PORT = 3001
    app.listen(PORT, () => {
        console.log("I'm listening on port " + PORT);
    });