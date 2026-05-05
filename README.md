# 🚀 SkillSync – Smart Job & Skill Matching Platform

SkillSync is a full-stack job portal web application that connects job seekers with recruiters through intelligent job matching based on skills. It is built using the MERN stack and deployed on cloud infrastructure.

---

## 🌐 Live Demo
- Frontend: https://your-vercel-link.vercel.app  
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

## ⚙️ Installation & Setup (Local)

### 1. Clone the repository
```bash
git clone https://github.com/your-username/skillsync.git
Setup Backend
cd backend
npm install
npm start
Setup Frontend
cd frontend
npm install
npm run dev
Environment Variables
Backend .env
PORT=5000
MONGO_URI=mongodb+srv://skillsync:user123@cluster0.2q1kx1y.mongodb.net/skillsync?retryWrites=true&w=majority
JWT_SECRET=your_secret_key
Frontend .env
VITE_API_URL=https://job-portal-kx59.onrender.com/api
Future Improvements
Job application tracking system
Resume upload feature (Cloudinary integration)
Role-based access control (Admin/Recruiter/User)
Email notifications for applications
AI-based job matching score
Author

Your Shaima
Full Stack Developer
GitHub: https://github.com/shaimasharfuddin-mern/job-portal
Project Highlights

✔ Full-stack MERN application
✔ Real-world job portal system
✔ Cloud deployment (Vercel + Render + MongoDB Atlas)
✔ Secure authentication system
✔ Scalable architecture