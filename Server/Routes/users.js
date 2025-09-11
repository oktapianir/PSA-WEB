const express = require("express");
const db = require("../db");
const router = express.Router();


router.get("/total", (req,res) => {
    db.query("Select count(*) as totalUsers from users", (err, results) => {
        if (err) {
            console.error("query error:", err);
            return res.status(500).json({error: "Database query failed"});
        }

        res.json({ total: results[0].totalUsers});
    });
});

module.exports = router; 