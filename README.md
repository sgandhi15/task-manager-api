# Task Manager API

A robust RESTful API for managing tasks and user accounts, built with Node.js, Express, and MongoDB.

## Features

- **User Authentication**: Secure JWT-based authentication system
- **User Management**:
  - Create, update, and delete user accounts
  - Upload and manage profile pictures
  - Password hashing and validation
- **Task Management**:
  - Create, read, update, and delete tasks
  - Filter tasks by completion status
  - Pagination and sorting options
- **Email Notifications**:
  - Welcome emails for new users
  - Account cancellation emails
- **Security Features**:
  - JWT authentication
  - Password hashing
  - Secure avatar storage and retrieval

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Image Processing**: Sharp for avatar resizing and formatting
- **File Upload**: Multer for handling multipart/form-data
- **Email Integration**: SendGrid for sending transactional emails
- **Development**: Nodemon for hot-reloading during development

## API Endpoints

### User Endpoints

- `POST /users` - Create a new user
- `POST /users/login` - Login user
- `POST /users/logout` - Logout user (current session)
- `POST /users/logoutall` - Logout from all sessions
- `GET /users/me` - Get user profile
- `PATCH /users/me` - Update user profile
- `DELETE /users/me` - Delete user account
- `POST /users/me/avatar` - Upload profile picture
- `DELETE /users/me/avatar` - Delete profile picture
- `GET /users/:id/avatar` - Get user profile picture

### Task Endpoints

- `POST /tasks` - Create a new task
- `GET /tasks` - Get all tasks (with filtering, pagination, and sorting)
- `GET /tasks/:id` - Get a specific task
- `PATCH /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up environment variables in `configs/dev.env`:
   ```
   PORT=3000
   MONGODB_URL=mongodb://127.0.0.1:27017/task-manager-api
   JWT_SECRET=yoursecretkey
   SENDGRID_API_KEY=yoursendgridapikey
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Deployment

The API is designed to be deployed to any Node.js hosting platform like Heroku, AWS, or DigitalOcean.

## License

ISC
