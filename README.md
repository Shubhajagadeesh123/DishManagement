#  Dish Management Dashboard

A Full Stack MERN application to manage dishes, built using **React.js**, **Node.js**, **Express.js**, **MongoDB**, and **Socket.IO**.

---

## Project Overview

The Dish Management Dashboard allows users to:

* View all dishes
* Publish/Unpublish dishes
* Search dishes
* View statistics
* Receive real-time updates using Socket.IO

---

## Features

*  Display all dishes
*  Search dishes by name
*  Dashboard statistics
*  Publish/Unpublish dishes
*  Real-time updates with Socket.IO
*  Responsive and modern UI
*  MongoDB database integration
*  REST API using Express.js

---

## Tech Stack

### Frontend

* React.js
* Axios
* CSS3
* React Toastify

### Backend

* Node.js
* Express.js
* Socket.IO

### Database

* MongoDB
* Mongoose

---

##  Project Structure

```
DishManagement
│
├── backend
│   ├── config
│   ├── controllers
│   ├── data
│   ├── models
│   ├── routes
│   ├── seed.js
│   ├── server.js
│   └── .env
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── services
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

##  Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Shubhajagadeesh123/DishManagement
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=mongodb://127.0.0.1:27017/dishdb
PORT=5000
```

Start the backend:

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

Backend runs at:

```
http://localhost:5000
```

---

##  API Endpoints

### Get All Dishes

```
GET /api/dishes
```

### Toggle Publish Status

```
PATCH /api/dishes/:id/toggle
```

---

## Assignment Requirements Completed

* Database Creation
*  JSON Data Import
*  REST APIs
*  React Dashboard
*  Publish/Unpublish Feature
*  Search Functionality
*  Dashboard Statistics
*  Responsive Design
* Real-Time Updates (Socket.IO)

---

## Author

**Shubha K J**

GitHub: https://github.com/Shubhajagadeesh123

---

## Future Improvements

* User Authentication
* Pagination
* Image Upload
* Dark Mode
* Category Filters
* Admin Dashboard
* Deployment on Render/Vercel
