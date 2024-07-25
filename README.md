

<h1>JobHive</h1>



JobHive is a comprehensive MERN stack application designed to facilitate job seeking and recruitment processes with an intuitive and user-friendly interface.

## Features

### For Employers:

- **Job Management:**
  - **Post Jobs:** Create new job listings with details like job title, description, and requirements.
  - **Edit Jobs:** Modify existing job postings to update information or requirements.
  - **Delete Jobs:** Remove job listings that are no longer available or relevant.
  - **View Applications:** Access and review applications submitted by job seekers for each job listing.

### For Job Seekers:

- **Job Search and Application:**
  - **Browse Jobs:** Explore available job listings categorized by industry, location, or type.
  - **Apply for Jobs:** Submit applications with resumes and additional details required by employers.

## Technologies Used

### Frontend Dependencies

- **axios:** Promise-based HTTP client for making requests to the backend API.
- **react:** JavaScript library for building user interfaces using components.
- **react-dom:** Provides DOM-specific methods for React.
- **react-hot-toast:** Lightweight and customizable toast notifications for React applications.
- **react-icons:** A collection of icons for React applications.
- **react-router-dom:** DOM bindings for React Router for declarative routing in React applications.
- **react-spinners:** Collection of loading spinners and indicators for React applications.

### Backend Dependencies

- **bcrypt:** Library to hash passwords securely before storing them.
- **cloudinary:** Cloud-based image and video management service for handling file uploads.
- **cookie-parser:** Middleware for parsing cookies attached to the client request object.
- **cors:** Middleware for enabling CORS (Cross-Origin Resource Sharing) in the backend.
- **dotenv:** Loads environment variables from a `.env` file into `process.env`.
- **express:** Fast, unopinionated, minimalist web framework for Node.js.
- **express-fileupload:** Simple middleware for handling file uploads.
- **jsonwebtoken:** JSON Web Token implementation to generate and verify tokens.
- **mongoose:** MongoDB object modeling tool designed to work in an asynchronous environment.
- **validator:** A library of string validators and sanitizers.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/code-raj11903/JobHive.git
   cd JobHive
   ```


2. **Install frontend dependencie:**
   ```bash
   cd Frontend
   npm install
   ```


3. **Install backend dependencie:**
   ```bash
   cd Backend
   npm install
   ```


4. **Set up environment variables:**
   - **Create a .env file in the Backend directory config folder with the following variables**

   ```bash
   PORT = 4000
   CLOUDINARY_CLIENT_NAME=
   CLOUDINARY_CLIENT_API=
   CLOUDINARY_CLIENT_SECRET=
   FRONTEND_URL=
   MONGO_URI= 
   JWT_SECRET_KEY=eyJhbGciOiJIUzI1NiJ9
   JWT_EXPIRES=7d
   COOKIE_EXPIRE=5
   ```



5. **Start the frontend and backend servers:**
  
   ```bash
   # In the Frontend directory
   npm run dev

   # In the Backend directory
   npm run dev

   ```

