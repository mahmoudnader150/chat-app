const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, { cors: { origin: "*" } });

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views"); // Specify the directory where your views are stored

app.get('/', function (req, res) {
    res.render('home'); // Renders the 'home.ejs' file in the views directory
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});

io.on('connection', (socket) => {
    console.log("user connected", socket.id);

    socket.on('message', (data) => {
        console.log(data)
    })
});
