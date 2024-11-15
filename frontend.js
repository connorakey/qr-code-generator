// This file is incharge of hosting the frontend on the web.
const { prototype } = require("events");
const express = require("express");
const path = require("path");

const app = express();
const PORT = require("./configuration.json").frontend_port;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });


app.listen(PORT, () => {
    console.log("Frontend API is running on https://localhost:" + PORT);
});