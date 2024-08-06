

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

[![axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white&style=plastic)](https://axios-http.com/)  [![react](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white&style=plastic)](https://reactjs.org/) [![react-dom](https://img.shields.io/badge/react--dom-61DAFB?style=for-the-badge&logo=react&logoColor=white&style=plastic)](https://reactjs.org/docs/react-dom.html) [![react-hot-toast](https://img.shields.io/badge/react--hot--toast-FF4500?style=for-the-badge&logo=react&logoColor=white&style=plastic)](https://react-hot-toast.com/) [![react-icons](https://img.shields.io/badge/react--icons-61DAFB?style=for-the-badge&logo=react&logoColor=white&style=plastic)](https://react-icons.github.io/react-icons/) [![react-router-dom](https://img.shields.io/badge/react--router--dom-CA4245?style=for-the-badge&logo=react-router&logoColor=white&style=plastic)](https://reactrouter.com/)
[![react-spinners](https://img.shields.io/badge/react--spinners-61DAFB?style=for-the-badge&logo=react&logoColor=white&style=plastic)](https://www.npmjs.com/package/react-spinners)


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


 [![bcrypt](https://img.shields.io/badge/bcrypt-3479A9?style=for-the-badge&logo=bcrypt&logoColor=white&style=plastic)](https://www.npmjs.com/package/bcrypt)
[![cloudinary](https://img.shields.io/badge/cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white&style=plastic)](https://cloudinary.com/)
[![cookie-parser](https://img.shields.io/badge/cookie--parser-006400?style=for-the-badge&logo=cookie&logoColor=white&style=plastic)](https://www.npmjs.com/package/cookie-parser) [![cors](https://img.shields.io/badge/cors-00CED1?style=for-the-badge&logo=cors&logoColor=white&style=plastic)](https://www.npmjs.com/package/cors)
[![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=white&style=plastic)](https://www.npmjs.com/package/dotenv)
[![express](https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white&style=plastic)](https://expressjs.com/)
[![express-fileupload](https://img.shields.io/badge/express--fileupload-000000?style=for-the-badge&logo=express&logoColor=white&style=plastic)](https://www.npmjs.com/package/express-fileupload)
[![jsonwebtoken](https://img.shields.io/badge/jsonwebtoken-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white&style=plastic)](https://www.npmjs.com/package/jsonwebtoken)[![mongoose](https://img.shields.io/badge/mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white&style=plastic)](https://mongoosejs.com/) [![validator](https://img.shields.io/badge/validator-000000?style=for-the-badge&logo=validator&logoColor=white&style=plastic)](https://www.npmjs.com/package/validator)

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


3. **Install backend dependencie:  In the Root Folder**
   ```bash
   npm install
   ```


4. **Set up environment variables:**
   - **Create a .env file in the Root directory folder with the following variables**

   ```bash
   PORT = 4000
   CLOUDINARY_CLIENT_NAME=
   CLOUDINARY_CLIENT_API=
   CLOUDINARY_CLIENT_SECRET=
   FRONTEND_URL=
   MONGO_URI= 
   JWT_SECRET_KEY=
   JWT_EXPIRES=7d
   COOKIE_EXPIRE=5
   ```



5. **Start the Project:**
  
   ```bash
   # In the Root directory for development 
   npm run dev

   # In the Root directory for Production
   npm run build
   npm Start
   ```

