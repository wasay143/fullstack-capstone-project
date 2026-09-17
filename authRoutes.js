const express = require("express");
const router = express.Router();

const { connectToDatabase } = require("./db");

router.get("/api/user", async (req, res) => {
    try {
        const db = await connectToDatabase();

        const username = req.query.username;

        const user = await db.collection("users").findOne({
            username: username
        });

        if (!user) {
            return res.status(404).json({
                error: "User not found"
            });
        }

        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Failed to find user"
        });
    }
});

module.exports = router;
