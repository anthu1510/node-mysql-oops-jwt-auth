const express = require("express");
const DB = require('../config/Database');
const router = express.Router();

// Database connection config file access
//const con = require("../config/db_config");

router.get("/", async (req, res) => {
    const rs = await DB.Query('SELECT * FROM `users`');
    //rs.then(rs => res.send(rs));
    res.send(rs);
});

router.post("/", (req, res) => {
    res.send("Post method Worked.....");
});

router.put("/", (req, res) => {
    res.send("Put method Worked.....");
});

router.delete("/", (req, res) => {
    res.send("Delete method Worked.....");
});

router.patch("/", (req, res) => {
    res.send("Patch method Worked.....");
});

module.exports = router;
