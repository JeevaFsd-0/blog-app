const path = require("path");
const express = require("express");
const userRoute = require("./routes/user");
const connectDb = require("./config/db");
const app = express();

connectDb();

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.use("/user", userRoute);

app.listen(4000, () => {
  console.log(`Server is up and running`);
});