const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const reviewController = require('../controllers/reviewController');

// Create review
router.post('/', [
  body('studentName').notEmpty().withMessage('Student name is required'),
  body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5'),
  body('review').notEmpty().withMessage('Review is required')
], reviewController.createReview);

// Get all reviews
router.get('/', reviewController.getAllReviews);

// Get review by ID
router.get('/:id', reviewController.getReviewById);

// Delete review
router.delete('/:id', reviewController.deleteReview);

module.exports = router;
