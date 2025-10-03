# Real-Time Chat Dashboard

A full-stack chat application built with Node.js (Express + Socket.IO) on the backend and React on the frontend. Supports real-time messaging, online user list, and chat history.

## Prerequisites

- Node.js (v18+ recommended)
- npm

## Setup Instructions

1. **Clone the repository** (or create folders as per the source code structure below).

2. **Backend Setup:**
   - Navigate to the `backend` folder.
   - Run `npm install` to install dependencies (express, socket.io).
   - Start the server: `node server.js`.
   - The server runs on `http://localhost:3001`.

3. **Frontend Setup:**
   - Navigate to the `frontend` folder.
   - Run `npm install` to install dependencies (react, react-dom, socket.io-client, etc.).
   - Start the app: `npm start`.
   - The app runs on `http://localhost:3000` (default for Create React App).

4. **Usage:**
   - Open the app in a browser.
   - Enter a username to join.
   - Send messages via the input field.
   - View real-time updates for messages and online users.
   - Open multiple tabs/windows to simulate multiple users.

## Limitations
- In-memory storage: Chat history and users are not persisted across server restarts.
- No authentication: Usernames are self-provided and not validated.
- Single room: No support for multiple chat rooms.

## Running Tests
No automated tests included; manually test by connecting multiple clients and verifying broadcasts.