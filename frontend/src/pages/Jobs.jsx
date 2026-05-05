import { useEffect, useState } from "react";
import API from "../services/api";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const res = await API.get("/jobs");
    setJobs(res.data);
  };

  const applyJob = async (jobId) => {
    const token = localStorage.getItem("token");
    const userId = JSON.parse(atob(token.split(".")[1])).id;

    await API.post("/applications/apply", {
      userId,
      jobId,
    });

    alert("Applied successfully!");
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <h2>Jobs</h2>

      <button onClick={logout}>Logout</button>

      {jobs.map((job) => (
        <div key={job._id}>
          <h3>{job.title}</h3>
          <p>{job.company}</p>

          <button onClick={() => applyJob(job._id)}>
            Apply
          </button>
        </div>
      ))}
    </div>
  );
}

export default Jobs;