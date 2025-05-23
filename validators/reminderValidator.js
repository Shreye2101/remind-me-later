const { body } = require('express-validator');

exports.reminderValidationRules = [
  body('date').isISO8601().withMessage('Invalid date format'),
  body('time').matches(/^([01]\d|2[0-3]):([0-5]\d)$/).withMessage('Invalid time format'),
  body('message').isLength({ min: 1 }).withMessage('Message cannot be empty'),
  body('channel').isIn(['sms', 'email']).withMessage('Invalid channel'),
];
