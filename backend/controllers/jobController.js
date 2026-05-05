const Job = require("../models/Job");

// CREATE JOB
const createJob = async (req, res) => {
  try {
    const { title, company, description, skillsRequired, location } = req.body;

    const job = await Job.create({
      title,
      company,
      description,
      skillsRequired,
      location,
    });

    res.status(201).json({
      message: "Job created successfully",
      job,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL JOBS
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();

    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createJob,
  getJobs,
};