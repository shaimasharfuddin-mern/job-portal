const express = require("express");
const router = express.Router();

const Application = require("../models/Application");

router.post("/apply", async (req, res) => {
  try {
    const { jobId, userId } = req.body;

    if (!jobId || !userId) {
      return res.status(400).json({
        message: "jobId and userId required",
      });
    }

    // prevent duplicate apply
    const existing = await Application.findOne({ jobId, userId });

    if (existing) {
      return res.status(400).json({
        message: "Already applied for this job",
      });
    }

    const application = new Application({
      jobId,
      userId,
    });

    await application.save();

    return res.status(200).json({
      message: "Applied successfully",
      application,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;