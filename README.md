# 🚀 SkillSync – Smart Job & Skill Matching Platform

SkillSync is a full-stack job portal web application that connects job seekers with recruiters through intelligent job matching based on skills. It is built using the MERN stack and deployed on cloud infrastructure.

---

## 🌐 Live Demo
- Frontend: https://job-portal-bay-one.vercel.app
- Backend API: https://job-portal-kx59.onrender.com  

---

## 🧠 Key Features

### 👤 Authentication
- User registration & login system (JWT-based)
- Secure authentication with protected routes

### 💼 Job System
- Post and manage job listings
- View all available jobs
- Skill-based job matching

### 🧑‍💻 User Features
- Apply for jobs
- View job details
- Skill-based recommendations

### 🏢 Recruiter Features
- Post new jobs
- View applicants (optional future upgrade)
- Manage job listings

### ☁️ Cloud Integration
- Backend deployed on Render
- Frontend deployed on Vercel
- Database hosted on MongoDB Atlas

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Axios
- React Router DOM
- CSS / Tailwind (if used)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- CORS

### Database
- MongoDB Atlas (Cloud Database)

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## 📁 Project Structure
SkillSync/
│
├── frontend/ # React (Vite) client
│ ├── src/
│ ├── index.html
│ └── vite.config.js
│
├── backend/ # Node.js backend
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ └── server.js
│
└── README.md

---

## 📦 Setup Instructions

### 🔁 Clone the Repository
```bash
git clone https://github.com/shaimasharfuddin-mern/job-portal.git
cd job-portal
cd backend
npm install
npm start
cd frontend
npm install
npm run dev
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
VITE_API_URL=https://job-portal-kx59.onrender.com/api


🚀 Features
✔JWT-based authentication (Login / Register)
✔Job posting and job browsing system
✔Skill-based job matching
✔Apply for jobs functionality
✔Fully cloud-deployed backend (Render)
✔Frontend deployed on Vercel
✔MongoDB Atlas integration

🧠 Future Enhancements
✔Resume upload system (Cloudinary integration)
✔Role-based access control (Admin / Recruiter / User)
✔Email notifications for job applications
✔Advanced job filtering and search
✔AI-based job matching score system


👨‍💻 Developer
Shaima
Full Stack Developer (MERN Stack)
GitHub: https://github.com/shaimasharfuddin-mern/job-portal


⭐ Project Highlights
✔ Production-ready MERN stack application
✔ Real-world job portal system
✔ Cloud deployment (Vercel + Render + MongoDB Atlas)
✔ Secure authentication system using JWT
✔ Scalable and modular architecture
