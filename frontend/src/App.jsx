import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Jobs from "./pages/Jobs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;