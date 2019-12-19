const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public/dist/public'))

app.all("*", (req, res, next) => {
    res.sendFile(__dirname + '/public/dist/public/index.html')
})

app.listen(8888);