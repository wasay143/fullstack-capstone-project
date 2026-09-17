const express = require("express");

const app = express();

app.use(express.json());

// Search API
app.get("/api/search", (req, res) => {
    res.json({
        message: "Search endpoint is working"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
