**WebMonitor-Hub** is a full-stack MEAN application that allows users to view the real-time status of various company websites' production environments. While anyone can access the platform and see the current status, only a verified admin from a company—whose identity is confirmed through their corporate email—can update the status of their company's website. The app ensures secure admin access through JWT authentication and email verification.

---

### Updated `README.md`

---

# WebMonitor-Hub

WebMonitor-Hub is a full-stack MEAN (MongoDB, Express, Angular, Node.js) application designed to allow users to view the current status of different company websites' production environments. Anyone can visit the platform and check the status of various websites, but only verified admins from each company—authenticated through their corporate email—can update their respective company's website status. The app ensures secure access to update website status through JWT (JSON Web Token) authentication and email verification.

## Features

- **Website Status Monitoring**: Users can view the real-time status of various company websites (e.g., running, down, maintenance).
- **Admin Access for Updates**: Only company admins, verified through their corporate email, can update the status of their company's website.
- **Email Verification**: Admin users must have a verified company email before they are granted permission to update their company's website status.
- **Secure Authentication**: Admin users authenticate with JWT tokens to ensure secure access.

## Tech Stack

- **Frontend**: Angular
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Email Verification**: Email service integration for verifying company emails

## Installation

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v14 or later)
- **MongoDB** (local or cloud instance)
- **Angular CLI**

### Steps to Run Locally

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/WebMonitor-Hub.git
    cd WebMonitor-Hub
    ```

2. **Install dependencies for the backend**:
    Navigate to the `backendNodeJS` directory and run:
    ```bash
    cd backendNodeJS
    npm install
    ```

3. **Set up the environment variables**:
    Create a `.env` file in the `backendNodeJS` directory and add the following:
    ```
    MONGO_URI=<your_mongo_connection_string>
    JWT_SECRET=<your_jwt_secret>
    EMAIL_SERVICE=<your_email_service>
    EMAIL_USER=<your_email_user>
    EMAIL_PASS=<your_email_password>
    ```

4. **Start the backend**:
    ```bash
    npm start
    ```

5. **Install dependencies for the frontend**:
    Open a new terminal, navigate to the `frontendAngular` directory, and run:
    ```bash
    cd frontendAngular
    npm install
    ```

6. **Start the frontend**:
    ```bash
    ng serve
    ```

7. Open your browser and go to `http://localhost:4200`.

## Usage

- **Admin Access**: Only admins with a verified company email can log in and update the website status. They can authenticate using JWT tokens.
- **User Access**: Users can view the status of various websites but cannot modify it unless they have admin access.

## Contributing

If you wish to contribute to the project, feel free to fork the repository and submit a pull request. Before making any contributions, please ensure you follow the standard development practices and write tests where necessary.

