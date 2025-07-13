# My Backend App

## Overview
This project is a backend application built with Node.js and Express, featuring user authentication, comment management, and integration with MongoDB. It supports JWT and OAuth for secure user authentication, allowing users to register, sign in, and sign in with Google.

## Features
- User registration and login
- Google sign-in integration
- Comment creation, updating, and deletion
- Timestamps for comments
- Environment variable management for development and production
- Secure API access using JWT tokens

## Project Structure
```
my-backend-app
├── src
│   ├── controllers          # Contains controllers for handling requests
│   ├── models               # Contains Mongoose models for MongoDB
│   ├── routes               # Contains route definitions
│   ├── services             # Contains business logic
│   ├── utils                # Contains utility functions
│   ├── config               # Contains configuration files
│   ├── app.js               # Initializes the Express application
│   └── server.js            # Starts the server
├── .env                     # Development environment variables
├── .env.production          # Production environment variables
├── package.json             # NPM configuration file
├── README.md                # Project documentation
└── tsconfig.json           # TypeScript configuration file
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd my-backend-app
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Configuration
- Create a `.env` file in the root directory and add your MongoDB connection string and API keys.
- For production, create a `.env.production` file with the appropriate settings.

## Running the Application
To start the development server, run:
```
npm run dev
```

## API Endpoints
- **Authentication**
  - POST `/api/auth/register` - Register a new user
  - POST `/api/auth/login` - Login a user
  - POST `/api/auth/google` - Google sign-in

- **Comments**
  - POST `/api/comments` - Create a new comment
  - PUT `/api/comments/:id` - Update a comment
  - DELETE `/api/comments/:id` - Delete a comment

## License
This project is licensed under the MIT License.# backend-nodejs
# backend-nodejs
