const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
  dateTime: { type: Date, required: true },
  message: { type: String, required: true },
  channel: { type: String, enum: ['sms', 'email'], required: true },
}, { timestamps: true });

module.exports = mongoose.model('Reminder', reminderSchema);
