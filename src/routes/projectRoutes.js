const express = require("express");
const { createProject, getProjectsByTech, deleteProject, getAllProjects } = require("../controllers/projectController");
const upload = require("../middleware/upload");

const router = express.Router();

router.post("/create", upload.single('image'), createProject);
router.get("/tech/:tech", getProjectsByTech);
router.get("/", getAllProjects)
router.delete("/delete/:id", deleteProject);

module.exports = router;