// This file is incharge of starting both the frontend and the backend hosting.
const frontend = require("./frontend.js");
const backend = require("./backend.js");

const enableElectron = true;

if (enableElectron === true) {
    require('./electron/electron.js')
}