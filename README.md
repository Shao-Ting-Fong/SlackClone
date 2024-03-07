# Streamline

![](https://i.imgur.com/L3if3hy.png)

Streamline is a real-time chat application inspired by Discord, designed to facilitate seamless communication and collaboration among users. This README provides an overview of the app and a brief introduction of how I designed the architecture.

## Features

### Message

- **Real-time Messaging:** Instantly send and receive messages in real-time, creating a dynamic chatting experience.

- **Image Sharing:** Share pictures with ease, allowing users to exchange images.

- **Private Messaging:** Engage in private conversations with other users in a one-on-one setting.

- **Notifications:** Get notified of new messages to stay updated on the conversation.

https://github.com/Shao-Ting-Fong/Streamline/assets/110653948/9e2b87fe-68a9-4a7b-b4e8-9683d385cbd6

---

### Workspace & Channel

- **Create Your Own Workspaces:** Organize conversations by creating personalized workspaces, enabling users to categorize discussions based on projects or topics.

- **Group Channels:** Join or create public channels to discuss topics with like-minded individuals.

https://github.com/Shao-Ting-Fong/Streamline/assets/110653948/0b4b57e6-0b3f-44ac-bb2f-15562fb3867e

---

### Online State Updates

- See real-time updates of user's online/offline status, allowing for efficient communication and knowing when users are available.

https://github.com/Shao-Ting-Fong/Streamline/assets/110653948/7d44e6e3-b273-4207-b91b-202fa0166268

---

### Video Meetings

- Host or join video meetings that support seamless face-to-face communication for both one-on-one interactions and multi-user conferences, making remote collaboration highly effective and scalable.

https://github.com/Shao-Ting-Fong/Streamline/assets/110653948/2c7dcbef-6519-4af5-8aad-29d425eb098c

---

## Tech Stack

**MERN** (MongoDB, Express, React, Node.js) fullstack app built with the following tools:

- **Programming Language:** JavaScript, TypeScript

- **Client:** React, React Router, Tailwind CSS

- **Server:** Node.js, Express

- **Database:** MongoDB, Redis

- **Real-time Communication:**

  - Messaging: WebSocket, Socket.IO
  - Video Meeting: WebRTC, mediasoup
  - Cross-server Communication: Redis Pub/Sub

- **AWS Cloud Service:** EC2, Elastic Load Balancer, S3

- **Containerization:** Docker

## Architecture Design

### Overall Diagram

<div align="center">
  <img src="https://i.imgur.com/lLk9Xw4.png" width="80%"></img>
</div>

#### Highlight

- Decoupled WebSocket/WebRTC server from API server for scalable architecture with user growth.
- Utilized Redis caching for instant user online status updates and Pub/Sub for cross-server communication.
- Improved deployment efficiency by containerizing development environments with docker compose.

### Video Meeting Network

<div align="center">
  <img src="https://i.imgur.com/kORZAWd.png" width="50%"></img>
</div>

#### Advantages

- **Lower CPU Consumption:** Unlike MCUs that process media streams, SFUs primarily focus on routing. As a result, they consume considerably less CPU, making them more cost-effective and scalable, especially in scenarios with a large number of participants.
