const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");
const queue = require("./queue");

const port = process.env.PORT || 3001;
const app = express();

const server = http.createServer(app);

const io = socketIO(server);

io.on("connection", socket => {
    console.log("Client Conectado");

    socket.on("disconnect", () => {
        console.log("Client desconectado");
    });
});

queue.consume('testing', message => {
    const response = JSON.parse(message.content.toString());

    io.emit('queue', response);
});

app.use(cors());
server.listen(port, () => console.log(`Listening on port ${port}`));