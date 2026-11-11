
import express from "express";

const router = express.Router();

const db = [
    { id: "1", title: "Take a shower", status: "false" },
    { id: "2", title: "Get wingstop for dinner", status: "false" },
    { id: "3", title: "Work on the project for 3330", status: "true" }
];

// GET - Retrieve all tasks
router.get("/", (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            data: db
        });
    } catch (error) {
        next(error);
    }
});

// POST - Create a new task
router.post("/", (req, res, next) => {
    try {
        const title = req.body?.title;

        if (typeof title !== "string" || !title.trim()) {
            return res.status(400).json({
                success: false,
                message: "A task title is required."
            });
        }

        const newTask = {
            id: String(
                Math.max(...db.map(task => Number(task.id)), 0) + 1
            ),
            title: title.trim(),
            status: "false"
        };

        db.push(newTask);

        res.status(201).json({
            success: true,
            data: newTask
        });
    } catch (error) {
        next(error);
    }
});

export default router;
