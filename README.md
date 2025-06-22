# 🏡 StayFinder

**StayFinder** is a full-stack web application inspired by Airbnb. It allows users to browse, filter, and book stays with an intuitive and responsive interface. Built with the MERN stack (MongoDB, Express, React, Node.js), StayFinder brings the modern experience of property rental platforms to life.

[StayFinder](https://stay-finder-lyart.vercel.app/)

## 🚀 Features

- 🔍 **Search and Filter** stays based on location, price, category, and more
- 🏠 **List Properties** with images, descriptions, location, amenities, and pricing
- 🛒 **Book Stays** with real-time availability and booking system
- 💳 **Secure Payments** integration (Razorpay)
- 🔐 **Authentication** using JWT (Register/Login)
- 📱 **Responsive UI** that works seamlessly on all devices
- ⚙️ **Admin Panel** to manage listings and bookings (optional)

## 🧑‍💻 Tech Stack

**Frontend**  
- React.js (Vite)
- Tailwind CSS
- React Router
- Axios
- Swiper (Image Carousel)

**Backend**  
- Node.js  
- Express.js  
- MongoDB (Mongoose ODM)  
- Cloudinary (Image Storage)  
- Razorpay (Payment Integration)

**Others**  
- JWT (Authentication)
- Dotenv
- Multer (File Uploads)

## 📁 Folder Structure

```
StayFinder/                       # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/           # Reusable UI components (Navbar, Card, Carousel, etc.)
│   │   ├── pages/                # Main pages (Home, ListingDetail, Booking, Login, Signup)
│   │   ├── contexts/             # React Contexts (Auth, Listings, etc.)
│   │   ├── hooks/                # Custom React hooks
│   │   ├── services/             # API call functions (Axios wrappers)
│   │   ├── assets/               # Images, icons, styles
│   │   ├── App.jsx               # Root App component
│   │   └── main.jsx              # Entry point
│   ├── tailwind.config.js
│   ├── vite.config.js
│   ├── package.json
│   └── .env.local                # (optional) env vars for client
│
├── server/                        # Node/Express backend
│   ├── src/
│   │   ├── controllers/          # Request handlers (auth, listings, bookings, etc.)
│   │   ├── middleware/           # JWT auth, error handling
│   │   ├── models/               # Mongoose schemas (User, Listing, Booking)
│   │   ├── routes/               # Express routes
│   │   ├── utils/                # Cloudinary upload, Razorpay, token utilities
│   │   └── index.js              # App entry (Express setup)
│   ├── config/                   # DB and third‑party config (Cloudinary, Razorpay)
│   ├── package.json
│   └── .env                       # MongoDB URI, JWT secret, API keys
│
├── .gitignore
├── README.md                      # (you'll paste this in)
└── package.json                   # root commands (optional workspace)
```

## 🔧 Setup Instructions

### Prerequisites
- Node.js and npm
- MongoDB
- Cloudinary & Razorpay credentials

### 1. Clone the Repository

```bash
git clone https://github.com/Shantanu-121/StayFinder
cd StayFinder
```

### 2. Setup Backend

```bash
cd server
npm install
# Create .env file and add necessary config variables
npm run dev
```

### 3. Setup Frontend

In root directory
```bash
npm install
npm run dev
```

### 4. Environment Variables

Create .env files in both server/ and client/ as per the required credentials:

* MongoDB URI

* JWT Secret

* Cloudinary Keys

* Razorpay Keys

# 🤝 Contributing
Contributions are welcome! Please fork the repo and submit a pull request.
