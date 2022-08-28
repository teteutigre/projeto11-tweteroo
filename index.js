import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const usuarios = [];
const tweets = [];

// SIGN-UP
app.get("/sign-up", (req, res) => {
  res.send(usuarios);
});

app.post("/sign-up", (req, res) => {
  const user = req.body;

  usuarios.push(user);

  res.send("ok");
});

//Tweets
app.get("/tweets", (req, res) => {
  if (tweets.length > 10) {
    tweets.pop();
  }
  res.send(tweets);
});

app.post("/tweets", (req, res) => {
  const tweet = req.body;
  const { avatar } = usuarios[usuarios.length - 1];

  tweet.avatar = avatar;
  tweets.unshift(tweet);

  res.send("OK");
});

app.listen(5000, () => console.log("Listening on port 5000"));
