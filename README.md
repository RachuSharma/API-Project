# 📸 Caption Generator – API Project (Angular + NestJS)

A full-stack web application built with **Angular** (frontend) and **NestJS** (backend) that allows users to generate social media post captions using predefined topics or custom inputs.

This was built as part of a small API-focused assignment to demonstrate frontend/backend integration, UI modularization, and clean architecture.

---


## 🚀 Getting Started

###  Frontend

```bash
cd frontend-task
npm install
ng serve

###  Backend

```bash
cd backend-task
npm install
npm run start

---

## ✨ Features

- 📝 Input field to describe your post
- 💡 Clickable suggestion cards (Promotional, Launch, etc.)
- ✨ Mock AI-generated captions displayed as responses
- ⏳ Shows a loading state while fetching
- ✅ Separate components: input box, suggestions, actions, response box
- 📦 Backend API with a POST endpoint at `/askAi`

---

## 🧩 Technologies

| Layer     | Technology |
|-----------|------------|
| Frontend  | Angular (Standalone components) |
| Backend   | NestJS |
| Styling   | Custom CSS (No Bootstrap) |
| Integration | HttpClient with mock delay |

---

## 📂 Project Structure
API-Project/
├── frontend-task/ # Angular project
│ └── src/app/
│ ├── input-box/
│ ├── suggestions/
│ ├── actions/
│ └── app.component.ts
│
├── backend-task/ # NestJS project
│ └── src/
│ ├── ask-ai.controller.ts
│ ├── app.module.ts
│ └── main.ts
│
└── README.md


