### 📸 Caption Generator – API Project (Angular + NestJS)

This is a full-stack web app using Angular (frontend) and NestJS (backend) that helps users generate social media captions. Users can either type their own idea or pick from ready-made topics.

It was built for a small assignment to show how the frontend and backend work together with a clean and simple structure.


### 🚀 Getting Started
```bash

###  Frontend

cd frontend-task
npm install
ng serve

###  Backend

cd backend-task
npm install
npm run start


## ✨ Features

- 📝 Input field to describe your post
- 💡 Clickable suggestion cards (Promotional, Launch, etc.)
- ✨ Mock AI-generated captions displayed as responses
- ⏳ Shows a loading state while fetching
- ✅ Separate components: input box, suggestions, actions, response box
- 📦 Backend API with a POST endpoint at `/askAi`


## 🧩 Technologies

| Layer     | Technology |
|-----------|------------|
| Frontend  | Angular (Standalone components) |
| Backend   | NestJS |
| Styling   | Custom CSS (No Bootstrap) |
| Integration | HttpClient with mock delay |


## 📂 Project Structure


API-Project/
├── frontend-task/          # Angular frontend
│   └── src/app/
│       ├── input-box/      # Text input and generate button component
│       ├── suggestions/    # Suggested topic cards component
│       ├── actions/        # Action buttons at the bottom
│       └── app.component.ts
│
├── backend-task/           # NestJS backend
│   └── src/
│       ├── ask-ai/         # Controller handling /askAi endpoint
│       ├── app.module.ts
│       └── main.ts
│
└── README.md



