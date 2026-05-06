import { useEffect, useState } from "react";
import API from "../services/api";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await API.get("/jobs");
        setJobs(res.data);
      } catch (err) {
        console.log("JOB FETCH ERROR:", err);
      }
    };

    fetchJobs();
  }, []);

  const handleApply = async (jobId) => {
    try {
      const userId = localStorage.getItem("userId");

      if (!userId) {
        alert("Please login again");
        return;
      }

      const res = await API.post("/applications/apply", {
        jobId,
        userId,
      });

      alert(res.data.message || "Applied successfully!");
    } catch (err) {
      console.log("APPLY ERROR:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Apply failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Jobs</h2>

      {jobs.length === 0 && <p>No jobs available</p>}

      {jobs.map((job) => (
        <div
          key={job._id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <p>{job.location}</p>

          <button onClick={() => handleApply(job._id)}>
            Apply
          </button>
        </div>
      ))}
    </div>
  );
}

export default Jobs;