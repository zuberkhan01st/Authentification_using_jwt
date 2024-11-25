# Web Application

This web application is a simple yet powerful example of a full-stack solution with authentication, user management, and dynamic content. The app is built with Node.js, Express.js, and MongoDB for the backend, and EJS for the templating engine on the frontend.

## Project Overview

This project is designed to demonstrate the development of a full-stack web application. It allows users to register, log in, and manage their personal data, with role-based access to a dashboard. The system uses MongoDB for storing user credentials and data, EJS for rendering dynamic HTML views, and JWT tokens for authentication.

## Key Features

### User Authentication:
- **Registration and login functionality**.
- Password encryption using `bcryptjs` to securely store passwords.
- **JWT tokens** for secure session-less authentication.
- Logout feature for client-side JWT invalidation.

### Dynamic Dashboard:
- A user-specific dashboard that displays personalized data (e.g., username and role).
- Role-based access to the dashboard to differentiate between regular users and admins.

### Authentication and Session Management:
- The use of **JWT tokens** for secure, session-less communication between the client and the server.
- Persistent user authentication across pages during their active session.

### Responsive UI:
- The user interface is designed using **EJS** and is responsive, adjusting to various screen sizes for an optimal user experience.

### Security:
- All user data is stored securely in **MongoDB**.
- Passwords are hashed using `bcryptjs` before being stored.
- JWT ensures secure token-based authentication.
- Protected routes and middleware ensure that only authenticated users can access certain parts of the application.

### Simple UI and Clean Design:
- A minimalist design focusing on functionality and ease of use, with clear login, registration, and dashboard pages.

## Technologies Used

### Backend:
- **Node.js** – JavaScript runtime for server-side logic.
- **Express.js** – Web framework for building routes and handling HTTP requests.
- **MongoDB** – NoSQL database for storing user data.
- **EJS** – Template engine for dynamic HTML rendering.
- **bcryptjs** – Library for hashing passwords.
- **jsonwebtoken (JWT)** – For token-based user authentication.

### Frontend:
- **HTML/CSS** – For creating the structure and style of the web pages.
- **JavaScript** – For client-side interactivity.
- **EJS** – Templating engine for dynamic views.

### Authentication and Session Management:
- **bcryptjs** – For securely hashing passwords.
- **jsonwebtoken (JWT)** – For secure session-less authentication.
## **How to Set Up**

### Prerequisites

Before getting started, you will need the following installed:

- **Node.js** – Download and install from [Node.js official site](https://nodejs.org/).
- **MongoDB** – Either use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud database or set up a local MongoDB instance.

### Installation Steps

1. **Clone the repository:**

   Open a terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   cd your-repository-name
    ```

2. 1. **Clone the repository:**

   Open a terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/zuberkhan01st/Authentification_using_jwt.git
   cd Authentification_using_jwt
    ```
2. **Install Dependencies:**

   
   ```bash
   gnpm install
    ```

3. **Set Up MongoDB:**


If you're using MongoDB Atlas, get your connection string and replace it in the app.js file. For local MongoDB, make sure MongoDB is running on your system.




4. **Start the Server:**

Run the following command to start the server:
   ```bash
   npm start
   ```
This will start the server on http://localhost:3000

5. **Open the application**

   Open your browser and go to http://localhost:3000 to view the application. You can register a new account or log in with an existing one.

## **Project Structure**
Here is the directory structure of the project:

/InternProject
  /controllers       # Controllers for handling business logic
  /models            # Mongoose models for MongoDB
  /views             # EJS templates for dynamic content
    login.ejs        # Login page
    register.ejs     # Register page
    dashboard.ejs    # User dashboard page
  /public            # Static files (CSS, JS, images)
    /styles          # CSS files for styling the pages
  app.js             # Main server file
  package.json       # Project dependencies and scripts

## **Contributing**
Feel free to fork this repository and contribute to the development of this project. If you find any bugs or have suggestions for improvements, please open an issue or create a pull request.

**Author:**  
[Zuber Khan]  
