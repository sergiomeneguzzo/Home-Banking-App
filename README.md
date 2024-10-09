Home Banking Web Application
This is a project designed to replicate the functionality of a Home Banking system. It allows users to manage their accounts, view transaction lists, and perform basic banking operations such as transfers and top-ups.

Features
Authentication: Secure login with password encryption (using bcrypt).
Email Confirmation: Sends a confirmation email for an additional layer of security.
Account Management: Ability to view and control multiple accounts.
Transaction History: Tracks transfers, deposits, withdrawals, and more.
Technologies Used
Frontend: Angular 17 (Non-Standalone) with DaisyUI and Tailwind CSS for styling.
Backend: Node.js with TypeScript (API development).
Database: MongoDB for storing data, accounts, and transactions (considering migration to relational databases such as SQL Server or MySQL).
Authentication: Password hashing using bcrypt.
Project Structure
Frontend
arduino
Copia codice
Frontend/
│
└── src
    └── app
        ├── components
        │   ├── login-toggle
        │   ├── navbar
        │   ├── stats-card
        │   ├── transactions-table
        │   └── welcome-bar
        ├── directives
        ├── environments
        ├── guards
        ├── interfaces
        ├── pages
        │   ├── auth
        │   │   ├── check-email
        │   │   ├── email-confirmed
        │   │   ├── login
        │   │   ├── register
        │   │   └── bank-transfer
        │   ├── dashboard
        │   ├── modify-password
        │   ├── options
        │   ├── phone-credit
        │   ├── profile
        │   └── transfer-details
        ├── pipes
        └── services
        └── utils
Backend
arduino
Copia codice
Backend/
│
├── src
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   └── services
├── tests
└── config
    ├── db
    └── environment
How to Run
Frontend Setup
Navigate to the Frontend folder:
bash
Copia codice
cd Frontend
Install the required dependencies:
Copia codice
npm install
Serve the Angular application:
arduino
Copia codice
ng serve --open
Backend Setup
Navigate to the Backend folder:
bash
Copia codice
cd Backend
Install the required dependencies:
Copia codice
npm install
Configure your Azure credentials in appsettings.json.
Start the API:
arduino
Copia codice
npm run start
