
import express from "express";
import tasksRouter from "./routes/tasks.js";

const app = express();
const port = 3000;

app.use(express.json());

// Connect the tasks routes
app.use("/api/tasks", tasksRouter);

// Error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error."
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
