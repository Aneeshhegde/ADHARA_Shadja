const express = require('express');
const { body } = require('express-validator');
const contactController = require('../controllers/contactController');

const router = express.Router();

// Create contact message
router.post('/', [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('subject').notEmpty().withMessage('Subject is required'),
  body('message').notEmpty().withMessage('Message is required')
], contactController.createContact);

// Get all contacts
router.get('/', contactController.getAllContacts);

// Update contact status
router.put('/:id', contactController.updateContactStatus);

module.exports = router;
