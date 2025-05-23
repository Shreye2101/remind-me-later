const Reminder = require('../models/Reminder');

exports.createReminder = async (req, res) => {
  const { date, time, message, channel } = req.body;

  const dateTime = new Date(`${date}T${time}:00.000Z`);

  try {
    const reminder = await Reminder.create({ dateTime, message, channel });
    res.status(201).json(reminder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.getReminders = async (req, res) => {
  try {
    const reminders = await Reminder.find().sort({ dateTime: 1 }); // sorted by date ascending
    res.json(reminders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};
