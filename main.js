let express = require("express");
let nodemon = require("nodemon");
let socket = require("socket.io");
// app setup
let app = express();

nodemon.restart();

//server setup

let server = app.listen(4000, () => {
    console.log("project is running on localhost:4000")
});

app.get('/', (res, req) => {
    req.sendFile(__dirname + "/public/index.html");
})

//socket setup

let io = socket(server);
io.on("connection", (socket) => {
    socket.on("chat", (data) => {
        io.sockets.emit("chat", data)
    })
})