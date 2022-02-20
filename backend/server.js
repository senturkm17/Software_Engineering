var MongoClient = require("mongodb").MongoClient; //database connection
var url =
  "mongodb+srv://dnzbykts:gameplayforscrum@cluster0.az2oi.mongodb.net/db?retryWrites=true&w=majority";

var bodyParser = require("body-parser");
const express = require("express");

const { createServer } = require("http");
const { Server } = require("socket.io");
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});
var multer = require("multer");
var upload = multer();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const cors = require('cors');
const corsOptions ={

    origin:['http://localhost:3000', /https:\/\/.*gameplay-for-scrum.netlify.app$/],
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
MongoClient.connect(url, (err, database) => {
  if (err) {
    return; // console.log(err);
  }
  db = database;

  // start the express web server listening on 8080
  app.listen(8080, () => {
    // console.log('listening on 8080');
  });
});

//render home.pug file with get request on /
app.get("/", function (req, res) {
  res.render("home");
});

app.set("view engine", "pug");
app.set("views", "./views");

//if a post request from the form
app.post("/generate_task", function (req, res) {
  tasks = []; //keep task descriptions to return
  already_selected = []; //keep the tasks which are already selected
  total = 0; //keep the number of selected tasks
  var numbers = {
    //dict structure to handle the number of selected tasks for each type
    clear: 0,
    complicated: 0,
    complex: 0,
  };
  player_no = 3; //take the player number
  var balancing = {
    //keep the values which must be for each typr
    clear: player_no * 2, //double of the player number
    complicated: player_no, //same with player number
    complex: player_no / 3, //one complex task for 3 players
  };
  limit = Math.floor(3 * player_no + player_no / 3); //take the limit of the tasks

  dbo = db.db("db");
  dbo
    .collection("tasks")
    .find({})
    .toArray(function (err, result) {
      //retreive tasks from database
      if (err) throw err;
      while (total < limit) {
        r = Math.floor(Math.random() * result.length); //generate a random number
        cand = result[r]; //assign candidate
        if (
          already_selected.includes(cand) == false &&
          numbers[cand.type] < balancing[cand.type]
        ) {
          tasks.push(cand.description);
          already_selected.push(cand);
          numbers[cand.type] = numbers[cand.type] + 1;
          total = total + 1;
        }
        // console.log(total + '/' + limit );              //show process on the console
      }
      res.json(result);
    });
});

io.on("connection", (socket) => {
  socket.on("put_token", (arg) => {
    socket.emit("print_task", arg);
    socket.broadcast.emit("print_task", arg);
  });

  socket.on("chat", (data) => {
    socket.emit("chat", data);
    socket.broadcast.emit("chat", data);
  });
  socket.on("token", (data) => {
    socket.emit("token", data);
    socket.broadcast.emit("token", data);
  });

  socket.on("task-sprint", (data) => {
    socket.emit("task-sprint", data);
    socket.broadcast.emit("task-sprint", data);
  });

  socket.on("task-backlog", (data) => {
    socket.emit("task-backlog", data);
    socket.broadcast.emit("task-backlog", data);
  });

  socket.on("task-progress", (data) => {
    socket.emit("task-progress", data);
    socket.broadcast.emit("task-progress", data);
  });

  socket.on("task-done", (data) => {
    socket.emit("task-done", data);
    socket.broadcast.emit("task-done", data);
  });

  socket.on("user", (data) => {
    socket.emit("user", data);
    socket.broadcast.emit("user", data);
  });
});




app.get("/chat", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

port = process.env.PORT || 4000;
httpServer.listen(port, function () {
  console.log("listening on: ", port);
});
