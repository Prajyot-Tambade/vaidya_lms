# Vaidya LMS

A modern **Trenning Platform** designed to provide an integrated platform for **online training, coding practice, real-time communication, and placement support**.

This platform allows students to learn from structured courses, practice coding directly in the browser, interact with tutors in real time, and explore job opportunities — all from a single system.

The project was developed as part of the **MCA final year project**.

<br />

# Project Overview

Traditional LMS platforms focus mainly on video lectures and static course materials. This project extends that model by integrating:

- Real-time communication between students and tutors
- In-browser coding practice environment
- Structured learning modules with notes and videos
- Student progress tracking
- Placement support features

The system is designed using a **modern full-stack JavaScript architecture** with a scalable and modular structure.

<br />

# Key Features

## Authentication System

- Secure user authentication using **Better Auth**
- Email/OTP based login
- Role-based access control
- Session management

## Course Management

- Course creation and management
- Module-based learning structure
- Video lectures with notes
- Assignment uploads

## Coding Practice Environment

- Browser-based code editor
- Support for programming practice
- Secure code execution handling

## Real-Time Communication

- Chat system for student-tutor interaction
- Instant doubt solving
- Notification system

## Student Progress Tracking

- Course progress monitoring
- Assignment tracking
- Tutor analytics dashboard

## Placement Module

- Job listings
- Resume management
- Interview scheduling

<br />

# Technology Stack

## Frontend

- Next.js
- Tailwind CSS
- shadcn/ui

## Backend

- Next.js API Routes
- Server Actions

## Database

- MongoDB

## Authentication

- Better Auth

## Development Tools

- TypeScript
- Node.js
- Git
- npm / pnpm

<br />

# System Architecture

The system follows a **modern full-stack architecture** using Next.js.

Client (Browser)
<br />&emsp;&emsp;&emsp;↓<br />
Next.js Frontend (UI + Components)
<br />&emsp;&emsp;&emsp;↓<br />
Next.js Server (API Routes / Server Actions)
<br />&emsp;&emsp;&emsp;↓<br />
Authentication Layer (Better Auth)
<br />&emsp;&emsp;&emsp;↓<br />
Database (MongoDB)

<br />

# User Roles

## Student

Students are the primary users of the platform.

Capabilities:

- Register and log in
- Browse available courses
- Watch lectures
- Access notes
- Practice coding
- Chat with tutors
- Track learning progress
- Explore job opportunities

<br />

## Tutor

Tutors manage course content and interact with students.

Capabilities:

- Create and manage courses
- Upload lectures and notes
- Manage assignments
- Respond to student queries
- Monitor student progress

<br />

## Admin

Administrators manage the platform and maintain system integrity.

Capabilities:

- User verification and management
- Course moderation
- Platform analytics
- Placement management

<br />

# Project Structure

Example directory structure:

```
vaidya_lms
│
├── src
│   │
│   ├── app
│   │   ├── (auth)
│   │   │   ├── login
│   │   │   └── register
│   │   │
│   │   ├── dashboard
│   │   │   ├── student
│   │   │   ├── tutor
│   │   │   └── admin
│   │   │
│   │   ├── courses
│   │   ├── compiler
│   │   └── chat
│   │
│   ├── components
│   │   ├── ui
│   │   ├── course-player
│   │   ├── editor
│   │   └── chatbox
│   │
│   ├── lib
│   │   ├── db
│   │   ├── auth
│   │   └── utils
│   │
│   ├── models
│   │   ├── user
│   │   ├── course
│   │   ├── module
│   │   └── assignment
│
├── public
│
└── README.md
```

<br />

# Database Design (Simplified)

Main collections in MongoDB:

Users

- id
- name
- email
- role
- password
- createdAt

Courses

- id
- title
- description
- tutorId
- modules

Modules

- id
- courseId
- videoUrl
- notes

Assignments

- id
- courseId
- studentId
- submission

Jobs

- id
- title
- company
- description

<br />

# Installation and Setup

## 1 Clone the repository

```bash
git clone https://github.com/Prajyot-Tambade/vaidya_lms
```

## 2 Navigate to project directory

```bash
cd vaidya_lms
```

## 3 Install dependencies

```bash
npm install
```

or

```bash
pnpm install
```

<br />

## 4 Setup environment variables

Create `.env.local`

```
# DB Config
MONGO_URI=
BASE_URL=

# Better Auth
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
RESEND_API_KEY=
```

<br />

## 5 Run the development server

```bash
npm run dev
```

Application runs on:

```
http://localhost:3000
```

<br />

# Implementation Phases

Phase 1:<br />
Project setup and database configuration

Phase 2:<br />
Authentication system integration

Phase 3:<br />
Course management system

Phase 4:<br />
Coding practice environment

Phase 5:<br />
Real-time chat and placement features

<br />

# Expected Outcomes

The system provides:

- A scalable LMS platform
- Improved student engagement
- Integrated coding practice environment
- Real-time tutor interaction
- Placement preparation support

<br />

# Future Enhancements

Potential improvements include:

- AI-based personalized learning recommendations
- Mobile application
- Video streaming optimization
- Advanced analytics dashboard
- Multi-language support

<br />

# Academic Context

This project was developed as part of the **Master of Computer Applications (MCA)** curriculum to demonstrate skills in:

- Full-stack web development
- System design
- Authentication and database management
- Modern frontend frameworks

<br />

# License

This project is developed for educational purposes.
