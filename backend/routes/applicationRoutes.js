const express = require("express");
const router = express.Router();

const {
  applyToJob,
  getApplications,
} = require("../controllers/applicationController");

// Apply to job
router.post("/apply", applyToJob);

// Get all applications
router.get("/", getApplications);

module.exports = router;