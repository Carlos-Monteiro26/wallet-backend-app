const express = require("express");
const db = require("./db");
const app = express();
const port = 3000;

const routesCategories = require("./routes/categories");
const routesUsers = require("./routes/users");
const routesFinances = require("./routes/finances");

app.use(express.json());

app.use("/categories", routesCategories);
app.use("/users", routesUsers);
app.use("/finances", routesFinances);

app.get("/", (req, res) => {
  res.send("Olá, essa é a aplicação Wallet App");
});

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
