// Sample data to seed MongoDB with initial courses
// Run this file with: node seedData.js (from server directory)

const mongoose = require('mongoose');
const Course = require('./models/Course');
require('dotenv').config();

const sampleCourses = [
  {
    title: 'Beginner Vocal Training',
    category: 'Junior Category',
    description: 'Introduction to Indian Classical Music swaras, alankaras, basic raag patterns, and foundational vocal techniques. Structured according to Gandharva Mahavidyalaya syllabus.',
    level: 'Junior Category',
    duration: 'Flexible',
    price: 0,
    instructorName: 'Shri Vinayak Hegde Hirehadda',
    musicType: 'Online & Offline Classes'
  },
  {
    title: 'Intermediate Classical Music',
    category: 'Senior Category',
    description: 'Development of ragas, taal concepts, bandishes, chhota khayal, and aalap-taan improvisation. Complete preparation for Senior grade examinations.',
    level: 'Senior Category',
    duration: 'Flexible',
    price: 0,
    instructorName: 'Shri Vinayak Hegde Hirehadda',
    musicType: 'Online & Offline Classes'
  },
  {
    title: 'Advanced Hindustani Vocal',
    category: 'Vidwath Category',
    description: 'Master level training in complex raags, bada khayal, tarana, concert presentation, and deep aesthetics. Prepares candidates for Vidwath / Alankar exams.',
    level: 'Vidwath Category',
    duration: 'Flexible',
    price: 0,
    instructorName: 'Shri Vinayak Hegde Hirehadda',
    musicType: 'Online & Offline Classes'
  },
  {
    title: 'Children\'s Music Foundation',
    category: 'Foundation Category',
    description: 'Engaging introduction to classical music for young learners. Building rhythmic sense, pitch accuracy, and musical devotion with Trust certification upon level completion.',
    level: 'Foundation Category',
    duration: 'Flexible',
    price: 0,
    instructorName: 'Shri Vinayak Hegde Hirehadda',
    musicType: 'Online & Offline Classes'
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Clear existing courses
    await Course.deleteMany({});
    console.log('Cleared existing courses');

    // Insert sample courses
    const createdCourses = await Course.insertMany(sampleCourses);
    console.log(`Successfully created ${createdCourses.length} courses`);

    createdCourses.forEach(course => {
      console.log(`- ${course.title} (${course.level})`);
    });

    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
