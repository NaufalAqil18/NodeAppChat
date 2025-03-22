var express = require("express");
var bodyParser = require("body-parser");
var app = express(); //set reference variable
var http = require("http").Server(app);
var io = require("socket.io")(http);
var mongoose = require("mongoose");
var dbUrl = "mongodb://localhost:27017/belajar_nodejs";
mongoose.Promise = Promise;
var dbUrl = "mongodb://127.0.0.1:27017/belajar_nodejs";

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var Badword = mongoose.model("Badword", {
  kata: String,
});

var MessageSchema = new mongoose.Schema({
  nama: String,
  pesan: String,
});

// Middleware sebelum menyimpan pesan
MessageSchema.pre("save", async function (next) {
  let message = this;
  let badwords = await Badword.find({}); // Ambil daftar badwords dari database

  badwords.forEach((bw) => {
    let regex = new RegExp(`\\b${bw.kata}\\b`, "gi");
    if (regex.test(message.pesan)) {
      message.pesan = message.pesan.replace(regex, (match) =>
        "*".repeat(match.length)
      ); // Ganti dengan karakter *
    }
  });

  next();
});

var Message = mongoose.model("Message", MessageSchema);

app.get("/pesan", function (req, res) {
  Message.find({}).then((pesan) => {
    res.send(pesan);
  });
});

app.post("/pesan", async function (req, res) {
  try {
    var message = new Message(req.body);
    var savedMessage = await message.save();
    console.log("data tersimpan!");

    io.emit("pesan", savedMessage);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  } finally {
    console.log("pesan post dipanggil");
  }
});

io.on("connection", function (socket) {
  console.log("a user connected");
});

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("koneksi ke Mongodb berhasil!");
  })
  .catch((err) => {
    console.error(err);
  });

var server = http.listen(3000, function () {
  console.log("port server adalah", server.address().port);
});
