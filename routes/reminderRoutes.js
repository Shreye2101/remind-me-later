const express = require('express');
const router = express.Router();
const { reminderValidationRules } = require('../validators/reminderValidator');
const { validationResult } = require('express-validator');
const { createReminder, getReminders } = require('../controllers/reminderController');

router.post('/', reminderValidationRules, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  createReminder(req, res);
});

router.get('/', getReminders);

module.exports = router;
