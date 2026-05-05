const express = require("express");
const router = express.Router();

const {
  createJob,
  getJobs,
} = require("../controllers/jobController");

// Create job
router.post("/", createJob);

// Get all jobs
router.get("/", getJobs);

module.exports = router;