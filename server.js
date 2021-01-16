const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// prevent cors error
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// http://127.0.0.1:8080/
app.use("/", express.static(path.join(__dirname, "build")));

// http://127.0.0.1:8080/
app.use("/", express.static(path.join(__dirname, "public")));

// http://127.0.0.1:8080/storybook/
// app.use("/storybook", express.static(path.join(__dirname, "storybook-static")));

app.get("/api", (req, res, next) => {
  res.json({ message: "api connnected" });
});

app.get("/", (req, res, next) => {
  res.json({ message: "it's root page" });
});

app.listen(port, () => {
  console.log(`Server is running at http://127.0.0.1:${port}`);
});
