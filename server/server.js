// whatever is in '' needs to be written the same as in npm packages.
const express = require('express');
const bodyParser = require('body-parser');


//Needed to be able to use express
const app = express();

//Gets the body-parser(Middleware) to work
    //'.use' will be "used" with pretty much all Middleware.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



//This gets the server(Express) to work
const PORT = 3001
    app.listen(PORT, () => {
        console.log("I'm listening on port " + PORT);
    });
