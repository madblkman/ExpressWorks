// STYLISH CSS
// Exercise 5 of 8
//
// Style your HTML from previous example with some Stylus middleware.
//
// Your solution must listen on the port number supplied by process.argv[2].
//
// The path containing the HTML and Stylus files is provided in process.argv[3]
// (they are in the same directory). You can create your own folder and use these:
//
// The main.styl file:
//
//    p
//      color red
//
// The index.html file:
//
//    <html>
//      <head>
//        <title>expressworks</title>
//        <link rel="stylesheet" type="text/css" href="/main.css"/>
//      </head>
//      <body>
//        <p>I am red!</p>
//      </body>
//    </html>

// ---------------------

const express = require('express'),
      stylus = require('stylus');

var app = express(),
    port = process.argv[2],
    path = process.argv[3];

app.use(stylus.middleware(path));
app.use(express.static(path)).listen(port);

console.log(path);
