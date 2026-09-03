# ADHARA SHADJA Gurukula - Website

A modern, responsive website for ADHARA SHADJA Gurukula, a classical Indian music academy, built with the MERN stack (MongoDB, Express, React, Node.js).

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [Project Details](#project-details)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)

## ✨ Features

### Frontend (React)
- **Responsive Design**: Mobile-first approach with breakpoints for desktop and tablet
- **Modern UI**: Clean, professional design with smooth animations
- **Smooth Scrolling**: Navigation with smooth scroll to different sections
- **Form Validation**: Client-side validation for registration and contact forms
- **Component-Based Architecture**: Reusable, maintainable React components

### Backend (Node.js & Express)
- **RESTful APIs**: Complete API endpoints for courses, students, and contacts
- **MongoDB Integration**: Persistent data storage with mongoose ODM
- **Error Handling**: Comprehensive error handling and validation
- **CORS Support**: Cross-origin resource sharing for frontend-backend communication

### Database (MongoDB)
- **Course Management**: Store and manage course information
- **Student Registration**: Track student registrations and information
- **Contact Messages**: Store customer inquiries

## 📁 Project Structure

```
ADHARA SHADJA/
├── server/                          # Node.js & Express Backend
│   ├── models/
│   │   ├── Course.js               # Course schema
│   │   ├── Student.js              # Student schema
│   │   └── Contact.js              # Contact schema
│   ├── controllers/
│   │   ├── courseController.js     # Course logic
│   │   ├── studentController.js    # Student logic
│   │   └── contactController.js    # Contact logic
│   ├── routes/
│   │   ├── courseRoutes.js         # Course endpoints
│   │   ├── studentRoutes.js        # Student endpoints
│   │   └── contactRoutes.js        # Contact endpoints
│   ├── index.js                    # Server entry point
│   ├── .env                        # Environment variables
│   └── package.json
│
├── client/                          # React Frontend
│   ├── public/
│   │   ├── index.html              # HTML template
│   │   └── images/                 # Image assets
│   │       ├── logo.png            # Academy logo
│   │       ├── hero-background.jpg # Hero section background
│   │       ├── vinayak-hegde.jpg   # Guru photo
│   │       └── gallery-*.jpg       # Gallery images
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx          # Navigation bar
│   │   │   ├── Hero.jsx            # Hero section
│   │   │   ├── About.jsx           # About section
│   │   │   ├── Guru.jsx            # Guru profile section
│   │   │   ├── Courses.jsx         # Courses listing
│   │   │   ├── Achievements.jsx    # Achievements section
│   │   │   ├── Certifications.jsx  # Certifications section
│   │   │   ├── Gallery.jsx         # Photo gallery
│   │   │   ├── Registration.jsx    # Registration form
│   │   │   ├── Community.jsx       # Community section
│   │   │   ├── Contact.jsx         # Contact form
│   │   │   └── Footer.jsx          # Footer
│   │   ├── styles/
│   │   │   ├── Navbar.css
│   │   │   ├── Hero.css
│   │   │   ├── About.css
│   │   │   ├── Guru.css
│   │   │   ├── Courses.css
│   │   │   ├── Achievements.css
│   │   │   ├── Certifications.css
│   │   │   ├── Gallery.css
│   │   │   ├── Registration.css
│   │   │   ├── Community.css
│   │   │   ├── Contact.css
│   │   │   └── Footer.css
│   │   ├── utils/
│   │   │   └── api.js              # API utility functions
│   │   ├── App.jsx                 # Main App component
│   │   ├── App.css                 # App styles
│   │   ├── index.jsx               # React entry point
│   │   └── index.css               # Global styles
│   └── package.json
│
├── README.md                        # This file
└── .gitignore
```

## 📋 Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **MongoDB** (Local or MongoDB Atlas) - [Download](https://www.mongodb.com/try/download/community) or [Atlas](https://www.mongodb.com/cloud/atlas)
- **Git** - [Download](https://git-scm.com/)

## 🚀 Installation & Setup

### Step 1: Clone the Repository

```bash
cd "c:\Users\anees\Desktop\ADHARA SHADJA"
```

### Step 2: Setup Backend (Server)

```bash
cd server

# Install dependencies
npm install

# Create .env file (already created, verify contents)
# Ensure MongoDB is running on localhost:27017
# Edit .env if necessary:
# PORT=5000
# MONGODB_URI=mongodb://localhost:27017/adhara-shadja
# NODE_ENV=development
```

### Step 3: Setup Frontend (Client)

```bash
cd ../client

# Install dependencies
npm install
```

### Step 4: Prepare Images

Place the following images in `client/public/images/`:
- `logo.png` - Academy logo
- `hero-background.jpg` - Hero section background image
- `vinayak-hegde.jpg` - Photo of Shri Vinayak Hegde Hirehadda
- `gallery-1.jpg` to `gallery-6.jpg` - Gallery images

**Note**: If you don't have the images, the app will display placeholder broken images. You can:
1. Add placeholder images from free stock photo sites
2. Replace image sources with URLs to external images
3. Skip for now and update later

## 🏃 Running the Application

### Terminal 1: Start MongoDB (if local)

```bash
# On Windows with MongoDB installed
mongod
```

Or use MongoDB Atlas cloud database (no local setup needed).

### Terminal 2: Start Backend Server

```bash
cd "c:\Users\anees\Desktop\ADHARA SHADJA\server"
npm start
# Server will run on http://localhost:5000
```

### Terminal 3: Start Frontend (React)

```bash
cd "c:\Users\anees\Desktop\ADHARA SHADJA\client"
npm start
# Frontend will open on http://localhost:3000
```

The application should now be running! You'll see:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📱 Project Details

### Homepage Sections

1. **Navigation Bar**
   - Fixed at the top
   - Academy logo on the left
   - Menu links: Online Classes (highlighted), About Us, Gallery, Achievements, Music Certifications, Join Our Community, Contact Us
   - Responsive hamburger menu on mobile

2. **Hero Section**
   - Full-screen banner with background image
   - Academy name and tagline
   - "Register for Online Music Classes" button
   - "Watch Performance" button

3. **About Section**
   - Academy mission statement
   - Information about online and offline classes
   - Feature cards with icons

4. **Guru Section**
   - Photo of Shri Vinayak Hegde Hirehadda
   - Biography and background
   - Years of experience
   - Teaching philosophy

5. **Courses Section**
   - Beginner Vocal Training
   - Intermediate Classical Music
   - Advanced Hindustani Vocal
   - Children's Music Foundation
   - Each course displays: title, description, duration, price, "Enroll Now" button

6. **Achievements Section**
   - Student performances
   - Awards received
   - Concert participation
   - Icon cards with highlights

7. **Certifications Section**
   - Beginner Certificate
   - Intermediate Certificate
   - Advanced Certificate
   - Teaching Certificate

8. **Gallery Section**
   - Grid display of performance photos
   - Hover effects
   - 6 gallery items

9. **Registration Section**
   - Comprehensive form with fields:
     - Name, Email, Phone
     - Age, Music Experience, Course Selection
     - Address, City, State, Country
   - Form validation
   - Success messages

10. **Community Section**
    - Information about joining the community
    - Social media links (Facebook, Instagram, YouTube, WhatsApp)
    - Featured activities

11. **Contact Section**
    - Contact information (phone, email, location)
    - Contact form
    - Google Maps (can be integrated)

12. **Footer**
    - Quick links
    - Contact details
    - Social media links
    - Copyright information

## 🔌 API Endpoints

### Courses API
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get course by ID
- `POST /api/courses` - Create new course
- `PUT /api/courses/:id` - Update course
- `DELETE /api/courses/:id` - Delete course

### Students API
- `POST /api/students/register` - Register new student
- `GET /api/students` - Get all students
- `GET /api/students/:id` - Get student by ID
- `PUT /api/students/:id` - Update student
- `DELETE /api/students/:id` - Delete student

### Contact API
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact messages
- `PUT /api/contact/:id` - Update contact status

## 🛠️ Technologies Used

### Frontend
- **React 18** - UI library
- **React Scroll** - Smooth scrolling
- **React Icons** - Icon library
- **Axios** - HTTP client
- **CSS3** - Styling with responsive design

### Backend
- **Node.js** - JavaScript runtime
- **Express.js 4** - Web framework
- **Mongoose 7** - MongoDB ODM
- **Express Validator** - Input validation
- **CORS** - Cross-origin resource sharing

### Database
- **MongoDB** - NoSQL database

## 🎨 Responsive Design

The website is fully responsive with breakpoints for:
- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: Below 768px

All sections adapt smoothly to different screen sizes with:
- Responsive typography
- Flexible grid layouts
- Mobile-friendly navigation (hamburger menu)
- Touch-friendly buttons

## 📝 Notes

1. **Images**: Add actual images to `client/public/images/` directory for better appearance
2. **Environment Variables**: Server uses `.env` file for configuration
3. **CORS**: Configure CORS in `server/index.js` if deploying to production
4. **MongoDB**: 
   - For local: Ensure MongoDB service is running
   - For cloud: Use MongoDB Atlas connection string
5. **Email**: To enable email notifications, integrate a service like nodemailer or SendGrid

## 🚀 Deployment

For production deployment:

### Backend:
- Use services like Heroku, Railway, or AWS
- Update MONGODB_URI to cloud database
- Set NODE_ENV=production

### Frontend:
- Run `npm run build` to create production build
- Deploy to services like Vercel, Netlify, or AWS S3 + CloudFront
- Update API endpoints to production backend URL

## 📞 Support

For questions or issues, contact the academy:
- Email: info@adharashadja.com
- Phone: +91-XXXXX-XXXXX
- Location: Hirehadda, North Kanara, Karnataka, India

## 📄 License

This project is created for ADHARA SHADJA Gurukula. All rights reserved.

---

**Version**: 1.0.0  
**Last Updated**: March 2026  
**Created for**: ADHARA SHADJA Gurukula - Indian Classical Music Academy
