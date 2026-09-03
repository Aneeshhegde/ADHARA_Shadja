# Database Schema Documentation

## MongoDB Collections

### 1. Courses Collection

Stores information about all music courses offered.

```javascript
{
  _id: ObjectId,
  title: String,                    // Course name
  description: String,              // Course description
  level: String,                    // 'Beginner' | 'Intermediate' | 'Advanced'
  duration: String,                 // e.g., "3 months"
  instructorName: String,           // Name of the instructor
  price: Number,                    // Course price in INR
  musicType: String,                // 'Vocal' | 'Instrumental' | 'Theory'
  createdAt: Date                   // Timestamp of creation
}
```

**Sample Document:**
```json
{
  "_id": ObjectId("..."),
  "title": "Beginner Vocal Training",
  "description": "Introduction to Indian Classical Music and basic vocal techniques",
  "level": "Beginner",
  "duration": "3 months",
  "instructorName": "Shri Vinayak Hegde Hirehadda",
  "price": 5000,
  "musicType": "Vocal",
  "createdAt": "2024-03-05T10:00:00Z"
}
```

---

### 2. Students Collection

Stores student registration information.

```javascript
{
  _id: ObjectId,
  firstName: String,                // Student's first name (Required)
  lastName: String,                 // Student's last name (Required)
  email: String,                    // Email address (Required, Unique)
  phone: String,                    // Phone number (Required)
  age: Number,                      // Student's age
  course: ObjectId,                 // Reference to Course._id
  courseTitle: String,              // Name of the course enrolled
  musicExperience: String,          // 'Beginner' | 'Intermediate' | 'Advanced'
  address: String,                  // Student's address
  city: String,                     // City name
  state: String,                    // State name
  country: String,                  // Country name
  enrollmentDate: Date,             // Date of enrollment
  status: String,                   // 'Active' | 'Inactive' | 'Completed'
  createdAt: Date                   // Timestamp of creation
}
```

**Sample Document:**
```json
{
  "_id": ObjectId("..."),
  "firstName": "Raj",
  "lastName": "Kumar",
  "email": "raj.kumar@example.com",
  "phone": "9876543210",
  "age": 28,
  "course": ObjectId("..."),
  "courseTitle": "Beginner Vocal Training",
  "musicExperience": "Beginner",
  "address": "123 Music Street",
  "city": "Bangalore",
  "state": "Karnataka",
  "country": "India",
  "enrollmentDate": "2024-03-05T10:00:00Z",
  "status": "Active",
  "createdAt": "2024-03-05T10:00:00Z"
}
```

---

### 3. Contacts Collection

Stores contact form submissions and inquiries.

```javascript
{
  _id: ObjectId,
  name: String,                     // Sender's name (Required)
  email: String,                    // Sender's email (Required)
  phone: String,                    // Sender's phone number
  subject: String,                  // Message subject (Required)
  message: String,                  // Message content (Required)
  createdAt: Date,                  // Timestamp of message
  status: String                    // 'New' | 'Replied' | 'Closed'
}
```

**Sample Document:**
```json
{
  "_id": ObjectId("..."),
  "name": "Priya Singh",
  "email": "priya@example.com",
  "phone": "9123456789",
  "subject": "Inquiry about Advanced Classes",
  "message": "I am interested in the Advanced Hindustani Vocal course. Can you provide more details?",
  "createdAt": "2024-03-05T10:00:00Z",
  "status": "New"
}
```

---

## Database Relationships

### Student → Course
- A Student can reference one Course via `course` field (ObjectId)
- One Course can have multiple Students

### Indexes

For optimal performance, the following indexes should be created:

```javascript
// Courses Collection
db.courses.createIndex({ "title": 1 })
db.courses.createIndex({ "level": 1 })

// Students Collection
db.students.createIndex({ "email": 1 }, { unique: true })
db.students.createIndex({ "enrollmentDate": -1 })
db.students.createIndex({ "course": 1 })

// Contacts Collection
db.contacts.createIndex({ "email": 1 })
db.contacts.createIndex({ "createdAt": -1 })
db.contacts.createIndex({ "status": 1 })
```

---

## Queries

### Common MongoDB Queries

```javascript
// Get all courses
db.courses.find()

// Get courses by level
db.courses.find({ level: "Beginner" })

// Get all students for a specific course
db.students.find({ courseTitle: "Beginner Vocal Training" })

// Get active students
db.students.find({ status: "Active" })

// Get unread contact messages
db.contacts.find({ status: "New" })

// Count total registrations
db.students.countDocuments()

// Get latest 10 contact messages
db.contacts.find().sort({ createdAt: -1 }).limit(10)

// Find student by email
db.students.findOne({ email: "raj.kumar@example.com" })

// Update student status
db.students.updateOne(
  { _id: ObjectId("...") },
  { $set: { status: "Active" } }
)

// Delete a course
db.courses.deleteOne({ _id: ObjectId("...") })
```

---

## Validation Rules

### Students Collection
- `firstName` - Required, non-empty string
- `lastName` - Required, non-empty string
- `email` - Required, valid email format, unique
- `phone` - Required, non-empty string
- `courseTitle` - Required, must exist in Courses collection
- `musicExperience` - One of: 'Beginner', 'Intermediate', 'Advanced'

### Courses Collection
- `title` - Required, non-empty string
- `description` - Required, non-empty string
- `level` - Required, one of: 'Beginner', 'Intermediate', 'Advanced'
- `duration` - Required, non-empty string
- `musicType` - One of: 'Vocal', 'Instrumental', 'Theory'

### Contacts Collection
- `name` - Required, non-empty string
- `email` - Required, valid email format
- `subject` - Required, non-empty string
- `message` - Required, non-empty string
- `status` - One of: 'New', 'Replied', 'Closed'

---

## Data Migration

To migrate existing student/course data, use MongoDB's import tools:

```bash
# Import JSON data
mongoimport --db adhara-shadja --collection courses --file courses.json --jsonArray

# Export data
mongoexport --db adhara-shadja --collection students --out students.json --jsonArray
```

---

## Backup & Recovery

```bash
# Backup database
mongodump --db adhara-shadja --out /path/to/backup

# Restore database
mongorestore --db adhara-shadja /path/to/backup/adhara-shadja
```

---

## Performance Optimization

1. **Indexing**: Create indexes on frequently queried fields
2. **Pagination**: Implement pagination for large result sets
3. **Lean Queries**: Use `.lean()` in Mongoose for read-only operations
4. **Aggregation**: Use MongoDB aggregation for complex queries

---

**Version**: 1.0.0  
**Last Updated**: March 2024
