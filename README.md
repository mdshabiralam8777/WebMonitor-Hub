# WebMonitor

WebMonitor is a full-stack MEAN (MongoDB, Express, Angular, Node.js) application designed to allow companies to monitor and update the status of their website's production environment. The application ensures that only authorized company admins can post and update the status of their company's website, with a verified company email and JWT (JSON Web Token) authentication.

## Features

- **Company Website Status**: Admins of a company can post and update the status of their website (e.g., running, down, maintenance).
- **Admin Authentication**: Only users with admin roles, authenticated with JWT, can modify the website status.
- **Email Verification**: Admins must verify their company email before being granted access to update the website status.
- **User Authentication**: Users can view the status of various websites but cannot modify the status unless they are admins.

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
    git clone https://github.com/your-username/webmonitor.git
    cd webmonitor
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
