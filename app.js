/* eslint-disable no-console */
/* eslint-disable max-len */

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import chatbot from 'chatbot';
import firebase from 'firebase';


export default class ChatBot extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // Something goes here
        }
    }

    componentDidMount() {
        // I'm missing something here... 
        axios.get('https://api.cognitive.microsoft.com/sts/v1.0')
            .then(res => {
                const // Something goes here 
                this.setState({ /* Something goes here too */ });
            });
    }

    render() {
        return (
            <div>
                <h1>{ /* Something goes here */ }</h1>
            </div>
        );
    }
}

ReactDOM.render(
    /* Something goes here I think it's */ <fetch ?? ="reactjs"/>,
    /* Something goes here maybe... */ document.getElementById()
);

/* ChatBot Code:

Yea, don't really know where to put this...

1. parameter: the pattern to listen for 
2. parameter: either "response" to respond or "rewrite" to rewrite the request 
3. parameter: either the response or the rewrite value, or undefined if nothing should happen 
4. parameter: a callback function that gets the matches of the pattern 
5. parameter: a description of that pattern, this is used to tell the user what he can say. Use quotes '' to mark phrases and [] to mark placeholders 

*/

// Names the chatbot
ChatBot.setBotName("Juan");

ChatBot.addPattern(
    "(?:my name is|I'm|I am) (.*)",
    "response",
    "Hi $1, thanks for talking to me today", 
    function(matches){
        ChatBot.setHumanName(matches[1]);
    },
    "Say 'My name is [name]' to be called by your name."
);        

ChatBot.addPattern("^hi$","response","Howdy my friend", undefined, "Say 'Hi' to be greeted.");
 
ChatBot.addPattern(
    "compute ([0-9]+) plus ([0-9]+)", 
    "response", 
    undefined, 
    function (matches) {
        ChatBot.addChatEntry("That would be "+(1*matches[1]+1*matches[2])+".","bot");
    },
    "Say 'compute [number] plus [number]' to make the bot your math monkey"
);
