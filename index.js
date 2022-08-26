import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const usuario = {
  username: "bobesponja",
  avatar:
    "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
};

const tweet = {
  username: "bobesponja",
  tweet: "eu amo o hub",
};

app.get("/", (req, res) => {
  console.log("ta indo");
  res.send("ola servidor");
});

app.listen(5000, () => console.log("Listening on port 5000"));
