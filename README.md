# Remind-me-later

A RESTful API for setting reminders with date, time, message, and delivery method (SMS or Email).

## 🌐 Live Deployment
- **Render URL**: [https://remind-me-later-75eu.onrender.com](https://remind-me-later-75eu.onrender.com)
- **GitHub Repository**: [https://github.com/Shreye2101/remind-me-later](https://github.com/Shreye2101/remind-me-later)

## 👤 Author
- **Name**: Shreyash Srivastava
- **Email**: shreyash.jsx@gmail
- **Contact**: +91-7060288428

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas (Mongoose ODM)
- **Validation**: express-validator
- **Deployment**: Render
- **Version Control**: GitHub

## 📁 Folder Structure
```
remind-me-later/
├── config/                 # DB connection setup
│   └── db.js
├── controllers/            # Request handlers
│   └── reminderController.js
├── models/                 # Mongoose schema
│   └── Reminder.js
├── routes/                 # API route definitions
│   └── reminderRoutes.js
├── validators/             # Validation rules for POST body
│   └── reminderValidator.js
├── .env                    # Environment variables
├── server.js               # Main server entry
├── package.json
└── README.md
```

## 🚀 Getting Started Locally

### 1. Clone the Repository
```bash
git clone https://github.com/Shreye2101/remind-me-later.git
cd remind-me-later
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root and add:
```env
PORT=3000
MONGO_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/remind-me-later
# For local MongoDB: MONGO_URI=mongodb://127.0.0.1:27017/remind-me-later
```

### 4. Start the Server
```bash
npm start
```

## 📬 API Endpoints

### ➕ POST /api/reminders
Create a new reminder.
```json
{
  "date": "2025-06-01",
  "time": "09:00",
  "message": "Pay electricity bill",
  "channel": "email"
}
```
- **Response**: 201 Created + Reminder JSON


## 📦 Required Packages
- express
- mongoose
- dotenv
- express-validator
- nodemon (for development)

## 📬 Sample Postman Request

**POST** `https://remind-me-later-75eu.onrender.com/api/reminders`  
**Body (JSON)**:
```json
{
  "date": "2025-06-01",
  "time": "09:00",
  "message": "Submit project",
  "channel": "sms"
}
```

**GET** `https://remind-me-later-75eu.onrender.com/api/reminders`  
- Returns all saved reminders.

---
PRs and feedback are welcome!