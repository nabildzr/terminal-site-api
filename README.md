# Terminal Site API

## Overview
This project is a backend application built with Node.js and Express, featuring user authentication, comment management, and integration with MongoDB. It supports JWT and OAuth for secure user authentication, allowing users to register, sign in, and sign in with Google.

## Features
- User registration and login
- Google sign-in integration
- Comment creation, updating, and deletion
- Timestamps for comments
- Environment variable management for development and production
- Secure API access using JWT tokens

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/nabildzr/terminal-site-api
   ```
2. Navigate to the project directory:
   ```
   cd terminal-site-api
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

## License
This project is licensed under the MIT License.
