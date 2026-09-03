# ADHARA SHADJA Gurukula - Development Guide

## 📋 Project Overview

This is a full-stack MERN application for a classical Indian music academy website. The project is structured in two main parts:
- **Backend (Server)**: Node.js + Express API
- **Frontend (Client)**: React single-page application

## 🏗️ Architecture

### Frontend Architecture (React)

```
client/
├── public/              # Static files
├── src/
│   ├── components/      # Reusable React components
│   ├── styles/          # Component-specific CSS files
│   ├── utils/           # Helper functions (API calls)
│   ├── App.jsx          # Main App component
│   └── index.jsx        # Entry point
```

**Key Characteristics:**
- Component-based architecture
- Each component has its own CSS file
- API calls centralized in utils/api.js
- Responsive design using CSS Grid and Flexbox

### Backend Architecture (Express)

```
server/
├── models/              # MongoDB schemas (Mongoose)
├── controllers/         # Business logic
├── routes/              # API endpoints
├── index.js             # Server entry point
├── .env                 # Environment variables
└── seedData.js          # Database seeding script
```

**Key Characteristics:**
- MVC (Model-View-Controller) pattern
- Separated concerns (models, controllers, routes)
- Express middleware for CORS and JSON parsing
- Input validation with express-validator

### Data Flow

```
Client (React)
    ↓
API Request (Axios)
    ↓
Backend (Express)
    ↓
Controllers (Business Logic)
    ↓
Models (Mongoose)
    ↓
MongoDB (Database)
```

## 🔄 Component Communication Flow

### User Registration Flow

```
Registration.jsx (Component)
    ↓ (Form Submission)
handleSubmit()
    ↓
api.registerStudent() (utils/api.js)
    ↓ (POST /api/students/register)
Express Server
    ↓
studentController.registerStudent()
    ↓
Student.create() (Mongoose)
    ↓
MongoDB Insert
    ↓
Response: { success: true, message: "...", data: student }
    ↓
Success Message Display
```

## 📦 Key Dependencies

### Frontend (client/package.json)
- **react**: UI library
- **axios**: HTTP client for API calls
- **react-scroll**: Smooth scrolling between sections
- **react-icons**: Icon components
- **react-scripts**: Create React App build tool

### Backend (server/package.json)
- **express**: Web framework
- **mongoose**: MongoDB ODM
- **cors**: Cross-Origin Resource Sharing
- **dotenv**: Environment variables management
- **express-validator**: Input validation

## 🛣️ API Endpoints

All endpoints return JSON responses with the following structure:

```json
{
  "success": true,
  "message": "Operation successful",
  "data": { /* response data */ }
}
```

### Courses
- `GET /api/courses` - List all courses
- `POST /api/courses` - Create course (Admin)
- `GET /api/courses/:id` - Get course details
- `PUT /api/courses/:id` - Update course (Admin)
- `DELETE /api/courses/:id` - Delete course (Admin)

### Students
- `POST /api/students/register` - Student registration
- `GET /api/students` - List all students (Admin)
- `GET /api/students/:id` - Get student details (Admin)
- `PUT /api/students/:id` - Update student (Admin)
- `DELETE /api/students/:id` - Delete student (Admin)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all messages (Admin)
- `PUT /api/contact/:id` - Update message status (Admin)

## 🛡️ Error Handling

### Client-Side
```javascript
try {
  const response = await api.registerStudent(data);
  if (response.data.success) {
    // Show success message
  }
} catch (error) {
  // Display error message from backend or network error
  setMessage('Error: ' + error.response?.data?.message);
}
```

### Server-Side
```javascript
try {
  // Operation logic
  res.json({ success: true, data: result });
} catch (error) {
  res.status(500).json({
    success: false,
    message: error.message
  });
}
```

## 🎨 Styling Strategy

### CSS Architecture
- **Global Styles**: `index.css` - CSS variables and base styles
- **Component Styles**: Each component has a corresponding CSS file
- **Responsive Design**: Media queries for different screen sizes

### CSS Variables (Defined in index.css)
```css
:root {
  --primary-color: #8b4513;      /* Brown - main color */
  --secondary-color: #d4a574;    /* Tan - secondary color */
  --accent-color: #ffd700;       /* Gold - highlights */
  --dark-color: #1a1a1a;
  --light-color: #f5f5f5;
  --text-color: #333;
}
```

### Responsive Breakpoints
```css
Desktop:  >= 1024px
Tablet:   768px - 1023px
Mobile:   < 768px
```

## 🔐 Security Considerations

### Current Implementation
- Input validation on server-side
- CORS enabled for frontend-backend communication
- Environment variables for sensitive data

### Future Enhancements
- JWT authentication for admin routes
- Password hashing for user accounts
- Rate limiting on API endpoints
- HTTPS in production
- SQL injection prevention (already handled by MongoDB)
- XSS protection headers

## 🧪 Testing

### Manual Testing Checklist
- [ ] All navigation links work
- [ ] Forms validate input correctly
- [ ] API calls return expected responses
- [ ] Responsive design works on mobile
- [ ] Images load properly
- [ ] No console errors

### Automated Testing (Future)
- Jest for component testing
- Supertest for API testing
- React Testing Library for UI testing

## 📊 Performance Optimization

### Frontend
- Lazy loading of images
- Code splitting
- Component memoization (React.memo)
- Optimized re-renders

### Backend
- Database indexing
- Query optimization
- Connection pooling
- Pagination for large datasets

## 🚀 Deployment Checklist

### Before Deployment
- [ ] Environment variables configured
- [ ] Database backed up
- [ ] API endpoints tested
- [ ] Frontend build tested locally
- [ ] SSL certificate ready
- [ ] Domain configured

### Deployment Steps
1. Build React app: `npm run build`
2. Deploy frontend to CDN/hosting
3. Deploy backend to server
4. Update API URLs in frontend
5. Configure MongoDB for production
6. Set up logging and monitoring
7. Configure automatic backups

## 📚 Adding New Features

### Adding a New Component

1. Create component file
```javascript
// client/src/components/NewComponent.jsx
import React from 'react';
import '../styles/NewComponent.css';

const NewComponent = () => {
  return (
    <section id="new-component" className="new-component">
      {/* Content */}
    </section>
  );
};

export default NewComponent;
```

2. Create CSS file
```css
/* client/src/styles/NewComponent.css */
.new-component {
  padding: 60px 20px;
  background-color: white;
}
// Add responsive styles
```

3. Import in App.jsx
```javascript
import NewComponent from './components/NewComponent';

// Add to render
<NewComponent />
```

### Adding a New API Endpoint

1. Create model
```javascript
// server/models/NewModel.js
const newSchema = new mongoose.Schema({...});
module.exports = mongoose.model('NewModel', newSchema);
```

2. Create controller
```javascript
// server/controllers/newController.js
exports.getAll = async (req, res) => {...};
```

3. Create routes
```javascript
// server/routes/newRoutes.js
const express = require('express');
const router = express.Router();
router.get('/', newController.getAll);
module.exports = router;
```

4. Register in server/index.js
```javascript
app.use('/api/new', require('./routes/newRoutes'));
```

## 🔍 Debugging

### Debug Mode (Frontend)
```bash
# Chrome DevTools - F12
# React DevTools extension recommended
```

### Debug Mode (Backend)
```bash
# Nodemon auto-restarts on save
# Console.log statements
# VS Code Debugger configuration
```

### Common Issues

**Issue**: CORS Error
```
Solution: Check CORS configuration in server/index.js
```

**Issue**: API not responding
```
Solution: Check if server is running and MongoDB is connected
```

**Issue**: Form submission fails
```
Solution: Check browser console for validation errors
Check server logs for database errors
```

## 📖 Code Standards

### Naming Conventions
- Components: PascalCase (Hero.jsx)
- Files: kebab-case styles (hero.css)
- Variables/Functions: camelCase
- Constants: UPPER_CASE
- CSS Classes: kebab-case

### Code Organization
- One component per file
- Group related imports
- Export at the end of file
- Use meaningful variable names

### Comments
```javascript
// Use comments for complex logic
// Document API endpoints
// Explain why, not what (code should be self-explanatory)
```

## 🔄 Version Control

Recommended Git workflow:
```bash
git checkout -b feature/new-feature
# Make changes
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature
# Create pull request
```

## 📞 Support & Resources

### Documentation
- MongoDB: https://docs.mongodb.com
- Express: https://expressjs.com
- React: https://react.dev
- Mongoose: https://mongoosejs.com

### Tools
- Postman: API testing
- MongoDB Compass: Database UI
- VS Code: Code editor
- Chrome DevTools: Frontend debugging

## 🎓 Learning Path

1. Basic JavaScript & ES6+
2. React fundamentals
3. CSS and responsive design
4. Node.js and Express
5. MongoDB and Mongoose
6. Full-stack integration
7. Deployment and DevOps

---

**Version**: 1.0.0  
**Last Updated**: March 2026  
**Maintainer**: ADHARA SHADJA Development Team
