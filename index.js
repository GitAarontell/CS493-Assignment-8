var express = require("express");
var app = express();
const port = process.env.PORT || 8000;

const bodyParser = require('body-parser');
const routerBoats = require('./boatRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/boats', routerBoats);

app.get("/", function (req, res) {
  res.send("hello world");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});