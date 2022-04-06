const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use("/", (req, res) => {
    res.send("Hello working from node.js");
});
//localhost:8002

app.listen(8002, () => {
    console.log("server running on port 80001");
});



