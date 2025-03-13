const { httpGetAllNewsCategories, httpCreateNewsCategory } = require("./newsCategory.controller");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const express = require("express");

const newsCategoryRouter = express.Router();

const UPLOADS_FOLDER = path.join(__dirname, "../../uploads");

// Ensure uploads folder exists
if (!fs.existsSync(UPLOADS_FOLDER)) {
    fs.mkdirSync(UPLOADS_FOLDER, { recursive: true });
}

// Multer storage configuration with file filtering
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + '-' + file.originalname;
        cb(null, uniqueName);
    },
});

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const allowedMimes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type. Only JPEG, PNG, and GIF are allowed.'));
        }
    },
});

newsCategoryRouter.get("/", httpGetAllNewsCategories);

newsCategoryRouter.post("/create", upload.single("file"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const filePath = `/uploads/${req.file.filename}`;

        const newsCategoryData = {
            ...req.body,
            imageUrl: filePath,
        };

        console.log("News Category Data:", newsCategoryData);

        const createdCategory = await httpCreateNewsCategory(newsCategoryData);

        return res.status(201).json({
            message: "News Category created successfully",
            data: createdCategory,
        });
    } catch (error) {
        console.error("Error:", error);
     
        if (error instanceof multer.MulterError || error.message.startsWith('Invalid file type')) {
            return res.status(400).json({ message: error.message });
        }
        return res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = newsCategoryRouter;