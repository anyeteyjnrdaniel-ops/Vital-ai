const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "VITAL AI backend is running!"
    });
});

app.post("/chat", async (req, res) => {

    const message = req.body.message;

    if (!message || typeof message !== "string") {
        return res.status(400).json({
            error: "Please provide a message."
        });
    }

    // AI connection will be added here next.
    res.json({
        reply: "I received your message: " + message
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`VITAL AI backend running on port ${PORT}`);
});
