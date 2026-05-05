const Application = require("../models/Application");

// APPLY TO JOB
const applyToJob = async (req, res) => {
  try {
    const { userId, jobId } = req.body;

    const alreadyApplied = await Application.findOne({
      user: userId,
      job: jobId,
    });

    if (alreadyApplied) {
      return res.status(400).json({ message: "Already applied to this job" });
    }

    const application = await Application.create({
      user: userId,
      job: jobId,
    });

    res.status(201).json({
      message: "Applied successfully",
      application,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL APPLICATIONS
const getApplications = async (req, res) => {
  try {
    const applications = await Application.find()
      .populate("user")
      .populate("job");

    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  applyToJob,
  getApplications,
};