# Home Banking Web Application

This project aims to recreate the functionality of a Home Banking system, where users can manage their accounts, view a list of transactions, and perform simple banking operations such as transfers or top-ups.

## Features

- **Authentication**: Secure login with password encryption (using bcrypt).
- **Email Confirmation**: Sending a confirmation email for an additional layer of security.
- **Account Management**: Ability to view and manage multiple accounts.
- **Transaction History**: Tracking transfers, deposits, withdrawals, and more.

## Technologies Used

- **Frontend**:Angular 17 (Non-Standalone), styled using DaisyUI with Tailwind CSS.
- **Backend**: Node.js with TypeScript (API development).
- **Database**: MongoDB for storing data, accounts, and transactions (considering migration to relational databases such as SQL Server/MySQL).
- **Authentication**: Password hashing using bcrypt.

## Usage

1. **Login/Registration**: Create an account or log in using your credentials.
2. **Email Confirmation**: Make sure to confirm your email once registered to activate your account.
3. **Manage Accounts**: View account details, transaction history, and perform banking operations.
4. **Transaction History**: Track your expenses and transaction history.

## Project Structure
```
└── src
    └── app
        ├── components
        │   ├── login-toggle
        │   ├── navbar
        │   ├── stats-card
        │   ├── transactions-table
        │   └── welcome-bar
        │
        ├── directives        
        ├── environments
        ├── guards
        ├── interfaces
        │
        ├── pages
        │   ├── auth
        │   │   ├── check-email
        │   │   ├── email-confirmed
        │   │   ├── login
        │   │   ├── register
        │   │   └── bank-transfer
        │   │
        │   ├── dashboard
        │   ├── modify-password
        │   ├── options
        │   ├── phone-credit
        │   ├── profile
        │   └── transfer-details
        │
        ├── pipes
        └── services
        └── utils

