### 📸 Caption Generator – API Project (Angular + NestJS)

This is a full-stack web app using Angular (frontend) and NestJS (backend) that helps users generate social media captions. Users can either type their own idea or pick from ready-made topics.

It was built for a small assignment to show how the frontend and backend work together with a clean and simple structure.


### 🚀 Getting Started
```bash
## ▶️ Running the Tasks

### Task 1 – Fullstack Application (Angular + NestJS)

###  Frontend

cd frontend-task         # Go to frontend folder
npm install              # Install dependencies
ng serve                 # Start Angular dev server (default port: 4200)


###  Backend

cd backend-task          # Go to backend folder
npm install              # Install dependencies
npm run start            # Start the server (default port: 3000)



## ▶️ Running Task 2 (FizzBuzz)

### From root: (FizzBuzz)
node task-2/index.js          # Runs from 1 to 100
node task-2/index.js 200      # Runs from 1 to 200

## From inside task-2  : (FizzBuzz)
cd task-2
node index.js



## ✨ Features

- 📝 Input field to describe your post
- 💡 Clickable suggestion cards (Promotional, Launch, etc.)
- ✨ Mock AI-generated captions displayed as responses
- ⏳ Shows a loading state while fetching
- ✅ Separate components: input box, suggestions, actions, response box
- 📦 Backend API with a POST endpoint at `/askAi`


## 🧩 Technologies

| Folder         | Description                                     |
|----------------|-------------------------------------------------|
| frontend-task  | Angular frontend app for the project            |
| backend-task   | NestJS backend API handling AI prompt requests  |
| task-2         | Standalone FizzBuzz script in JavaScript        |



## 📂 File Structure


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
├── task-2/                 # Task 2 – FizzBuzz
│   ├── index.js            # Entry point for FizzBuzz
│   └── fizzbuzz.js         # FizzBuzz logic using multiples
│
└── README.md




