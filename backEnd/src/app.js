const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//App Configuration
const app = express();


// Aiddlewares
app.use(cors());
app.use(express.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(express.json()); // parse application/json

app.use("/users", require('./routers/users.routes'));

// Error Handler
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status(404);
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
