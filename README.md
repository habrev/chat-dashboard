# Real-Time Chat Dashboard

## Overview
This is a full-stack real-time chat application where multiple users can send and receive messages instantly. The backend, built with Node.js (Express + Socket.IO), manages user connections, broadcasts messages, and maintains a chat history of the last 50 messages in memory. The frontend, developed with React, provides a dynamic chat interface with real-time updates using WebSockets instead of traditional REST polling.
- Live messaging
- Online users list
- Chat history
- System notifications for join/leave

## Setup Instructions
1. **Prerequisites**:
   - Install [Node.js](https://nodejs.org/) (v14 or later) and npm.
   - Ensure you have a code editor (e.g., VS Code) and a modern browser.

2. **Backend Setup**:
   - Navigate to the `backend` directory: `cd backend`.
   - Install dependencies: `npm install express socket.io cors`.
   - Start the server: `node server.js`.
   - The server will run on `http://localhost:3001`.

3. **Frontend Setup**:
   - Navigate to the `frontend` directory: `cd frontend`.
   - Install dependencies: `npm install` (assuming a React project is set up).
   - Start the development server: `npm start`.
   - Open `http://localhost:3000` in your browser to access the chat.

4. **Running the Application**:
   - Ensure both the backend (port 3001) and frontend (port 3000) are running.
   - Open multiple browser tabs to simulate multiple users joining the chat.

## Data Flow Diagram

- **React Chat UI**: Displays an input field for new messages, chat history (auto-updates), and a list of online users.
- **WebSocket**: Enables real-time communication between client and server.
- **Node.js Server**: Handles connections, broadcasts messages, and serves the `/history` endpoint.
- **Message Store (in-memory)**: Stores the last 50 messages.

## Design Choices
- **WebSockets over REST Polling**: WebSockets were chosen for their persistent, bidirectional communication, offering lower latency and reduced server load compared to REST polling, which would be inefficient for real-time chat.
- **Socket.IO**: Selected for its ease of use in managing WebSocket connections, broadcasting, and handling user events (e.g., join/disconnect).
- **In-memory Storage**: Implemented to maintain the last 50 messages for simplicity and speed, suitable for a demo with a small user base.

## Limitations
- **In-memory Storage**: Chat history is lost upon server restart, lacking persistence. A database (e.g., Redis or MongoDB) would be required for production.
- **Scalability**: The in-memory store and single server instance may not scale well with a large number of concurrent users, necessitating a distributed system.
- **No User Authentication**: Users can join with any username without validation, risking conflicts or impersonation.

## Deliverables
- **Complete Source Code**: Included in `backend/server.js` and `frontend/src/*` (assuming a React setup).
- **README.md**: This file with setup and execution instructions.
- **Explanation of Design Choices**: Detailed above, justifying WebSockets over polling and in-memory storage limitations.
- **Diagram**: ASCII representation of the data flow included above.

flowchart LR
    User1[User 1: Browser] -->|WebSocket| Server[Node.js + Socket.IO Server]
    User2[User 2: Browser] -->|WebSocket| Server
    User3[User 3: Browser] -->|WebSocket| Server

    Server -->|Broadcast Messages| User1
    Server -->|Broadcast Messages| User2
    Server -->|Broadcast Messages| User3

    Server --> DB[(Message History)]
