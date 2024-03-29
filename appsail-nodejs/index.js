// Importing Require Liberarys
var createError = require("http-errors");
const express = require("express");
const app = express();
const session = require('express-session');
var bodyParser = require('body-parser'),
  cors = require("cors")
var cookieParser = require("cookie-parser");
const logger = require('morgan');


var indexRouter = require("./routes/index");
var userRouter = require("./routes/users");
const dotenv = require("dotenv");
dotenv.config();
const fileUpload = require('express-fileupload');
const swaggerUi = require('swagger-ui-express');
const swaggerJSONDoc = require('./swagger-3.json');
app.use('/swagger-node-api', swaggerUi.serve, swaggerUi.setup(swaggerJSONDoc));

// session setup
app.use(session({
  secret: process.env.SESSION_SECRETKEY,
  proxy: true,
  resave: true,
  saveUninitialized: true
}));

// view engine setup
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(logger('dev'));
app.use(express.json()); //Used to parse JSON bodies
app.use(
  cors({
    origin: ["http://localhost:4200", "http://localhost:3000", 'http://desktop.amwebtech.org', 'https://desktop.amwebtech.org'],
    credentials: true,
  })
);
app.use(express.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(fileUpload());

// app.use("/", indexRouter);
app.use("/api/v1/users", userRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// PLEASE UNCOMMENT CODE ON AWS/DIGITALOCEAN SERVER FOR PM2 AND FOREVER but don't need it with microservice

const port = process.env.X_ZOHO_CATALYST_LISTEN_PORT || 9000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`http://localhost:${port}/`);
});


// module.exports = server ? server : app; // server for prod and app for dev