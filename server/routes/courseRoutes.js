const express = require('express');
const { body } = require('express-validator');
const courseController = require('../controllers/courseController');

const router = express.Router();

// Get all courses
router.get('/', courseController.getAllCourses);

// Get course by ID
router.get('/:id', courseController.getCourseById);

// Create course
router.post('/', [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('level').isIn(['Beginner', 'Intermediate', 'Advanced']).withMessage('Invalid level'),
  body('duration').notEmpty().withMessage('Duration is required')
], courseController.createCourse);

// Update course
router.put('/:id', courseController.updateCourse);

// Delete course
router.delete('/:id', courseController.deleteCourse);

module.exports = router;
