# 🚀 QUICK START GUIDE

## Prerequisites
- Node.js (v14+)
- npm or yarn
- MongoDB (Local or MongoDB Atlas)

## Windows Setup (Step by Step)

### 1️⃣ Start MongoDB

**Option A: Local MongoDB**
```bash
# Open PowerShell and run:
mongod
```

**Option B: MongoDB Atlas (Cloud)**
- Visit: https://www.mongodb.com/cloud/atlas
- Create a free account
- Create a cluster
- Get connection string and update `.env` in server folder

### 2️⃣ Open Two Terminal Windows

**Terminal 1 - Backend:**
```bash
cd "c:\Users\anees\Desktop\ADHARA SHADJA\server"
npm install
npm start
```

**Terminal 2 - Frontend:**
```bash
cd "c:\Users\anees\Desktop\ADHARA SHADJA\client"
npm install
npm start
```

### 3️⃣ Access the Application

- **Frontend**: http://localhost:3000 (automatically opens)
- **Backend API**: http://localhost:5000

## ✅ Verification Checklist

- [ ] MongoDB is running (mongod in terminal)
- [ ] Server started on port 5000 (✓ "Server running on port 5000")
- [ ] Frontend started on port 3000 (✓ Browser opens automatically)
- [ ] No error messages in terminals
- [ ] Navigate through website sections to verify functionality

## 📸 Adding Images

Replace placeholder images in `client/public/images/`:

1. `logo.png` - Academy logo (recommended: 200x200px)
2. `hero-background.jpg` - Full screen image (recommended: 1920x1080px)
3. `vinayak-hegde.jpg` - Guru photo (recommended: 400x500px)
4. `gallery-1.jpg` to `gallery-6.jpg` - Gallery images (recommended: square, 500x500px)

**Free Image Resources:**
- Unsplash: https://unsplash.com
- Pexels: https://www.pexels.com
- Pixabay: https://pixabay.com

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Change port in server/.env or client package.json
# For server: Change PORT=5000 to PORT=5001
# For client: npm start -- --port 3001
```

### MongoDB Connection Error
```bash
# Make sure MongoDB is running
# Check connection string in server/.env
mongod #(terminal 1)
npm start #(terminal 2)
```

### npm Modules Issue
```bash
# Delete node_modules and reinstall
cd server
rmdir /s node_modules
npm install
```

### Clear Cache
```bash
# Delete npm cache and reinstall
npm cache clean --force
npm install
```

## 🌐 Environment Variables

### Server (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/adhara-shadja
NODE_ENV=development
```

### For MongoDB Atlas
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/adhara-shadja
```

## 📝 Available Scripts

### Server (npm start)
- `npm start` - Start server with nodemon (auto-restart)
- `npm run dev` - Same as start

### Client (npm start)
- `npm start` - Start development server
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run eject` - Eject from create-react-app

## 🎯 Testing API Endpoints

Use Postman or cURL:

```bash
# Get all courses
curl http://localhost:5000/api/courses

# Register student
curl -X POST http://localhost:5000/api/students/register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "courseTitle": "Beginner Vocal Training",
    "musicExperience": "Beginner"
  }'

# Send contact message
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John",
    "email": "john@example.com",
    "subject": "Inquiry",
    "message": "I want to learn music"
  }'
```

## 📚 Seed Sample Data

```bash
cd server
node seedData.js
```

This will populate MongoDB with sample courses.

## 🎨 Customization

### Change Colors
Edit `client/src/index.css` - CSS variables:
```css
:root {
  --primary-color: #8b4513;      /* Brown */
  --secondary-color: #d4a574;    /* Tan */
  --accent-color: #ffd700;       /* Gold */
  --dark-color: #1a1a1a;
  --light-color: #f5f5f5;
  --text-color: #333;
}
```

### Change Academy Name/Details
Search and replace in all JSX files:
- `ADHARA SHADJA` - Academy name
- Contact email and phone in Contact.jsx and Footer.jsx

### Change Course Details
Edit `client/src/components/Courses.jsx` - `defaultCourses` array

## 📦 Building for Production

```bash
# Frontend production build
cd client
npm run build

# Output in client/build/ directory
# Deploy this folder to hosting service
```

## 🚀 Deployment Resources

- **Frontend**: Vercel, Netlify, GitHub Pages, AWS S3
- **Backend**: Heroku, Railway, Render, AWS EC2
- **Database**: MongoDB Atlas (free tier available)

## 📞 Support

For issues, check:
1. MongoDB is running
2. Ports 5000 and 3000 are not in use
3. Node modules are properly installed
4. .env file has correct values

Good luck! 🎉
