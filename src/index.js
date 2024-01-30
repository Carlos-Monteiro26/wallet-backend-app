const express = require("express");
const db = require("./db");
const app = express();
const port = 3000;

app.use(express.json());

const routesCategories = require("./routes/categories");

app.get("/", (req, res) => {
  res.send("Olá, essa é a aplicação Wallet App");
});

app.use("/categories", routesCategories);

app.listen(port, () => {
  db.connect()
    .then(() => {
      console.log("DB Connected");
    })
    .catch((error) => {
      throw new Error(error);
    });
  console.log(`Example app listening on port ${port}`);
});
