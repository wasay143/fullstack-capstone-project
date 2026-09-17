const express = require("express");
const router = express.Router();

const { connectToDatabase } = require("./db");

router.get("/api/search", async (req, res) => {
    try {
        const db = await connectToDatabase();

        const { category } = req.query;

        const filter = {};

        if (category) {
            filter.category = category;
        }

        const items = await db
            .collection("inserted_items")
            .find(filter)
            .toArray();

        res.json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Search failed" });
    }
});

module.exports = router;
