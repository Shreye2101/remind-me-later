const express = require('express');
const router = express.Router();
const { createReminder } = require('../controllers/reminderController');
const { reminderValidationRules } = require('../validators/reminderValidator');
const { validationResult } = require('express-validator');

router.post('/', reminderValidationRules, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  createReminder(req, res);
});

module.exports = router;
