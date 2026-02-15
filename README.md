
---

## **Backend README (`Assignment-1-Login-signup-backend/README.md`)**

```markdown
# Assignment-1 Backend

This is the **backend** of Assignment-1 built with **NestJS + TypeScript**.

## Features

- User registration and login
- Simple **in-memory store** for users (temporary, resets on server restart)
- Login returns a **fake JWT token** in console for demo
- Get all users (for development/demo purposes)

## Endpoints

- `POST /auth/register` → Register a new user
- `POST /auth/login` → Login user
- `GET /auth/all-users` → See all users (DEV only)

## How to Run

1. Clone the repo:

```bash
git clone https://github.com/shi-v-ani-singh/Assignment-1-Login-signup-backend

2. Install dependencies:

npm install
# or
yarn


3. Start the server:

npm run start:dev
# or
yarn start:dev


4. Server runs on http://localhost:3001

Note: This backend uses temporary in-memory storage, so all users are deleted when the server restarts. For production, a database like MongoDB would be required.


## Flow

User visits /register
        │
        ▼
Registers with First Name, Last Name, Email, Password
        │
        ▼
Frontend sends POST request to backend: /auth/register
        │
        ▼
Backend stores user in in-memory store
        │
        ▼
Frontend redirects user to /login
        │
        ▼
User enters Email & Password
        │
        ▼
Frontend sends POST request to backend: /auth/login
        │
        ▼
Backend validates credentials
        │
        ▼
If valid → returns fake JWT token (console) 
        │
        ▼
Frontend redirects user to /welcome page
        │
        ▼
Welcome page displayed: "You have successfully logged in"

---
