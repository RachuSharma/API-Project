### 📸 Caption Generator – API Project (Angular + NestJS)

This is a full‑stack web app using **Angular** (frontend) and **NestJS** (backend) that helps users generate social‑media captions.  
Users can type their own topic or click a ready‑made suggestion.

The project was built for a small assignment to demonstrate clean frontend / backend integration and modular code structure.

---

### 🚀 Getting Started

#### ▶️ Clone the Repository
```bash
git clone https://github.com/RachuSharma/API-Project.git
cd API-Project
```

---

### ▶️ Full‑stack Mode  
Serve the built Angular app directly from NestJS.
```bash
# Build Angular
cd frontend-task
npm install
npm run build          # outputs: dist/frontend-task

# Start NestJS (serves the Angular build)
cd ../backend-task
npm install
npm run start
```
Open → <http://localhost:3000>

---

### ▶️ Developer Mode (run separately)

##### Frontend (Angular)
```bash
cd frontend-task
npm install
ng serve
```
<http://localhost:4200>

##### Backend (NestJS)
```bash
cd backend-task
npm install
npm run start
```
<http://localhost:3000>

---

### ▶️ Task 2 – FizzBuzz
From project root:
```bash
node task-2/index.js          # runs 1–100
node task-2/index.js 200      # runs 1–200
```
Or:
```bash
cd task-2
node index.js
```

---

## ✨ Features
- 📝 Input field for custom topic  
- 💡 Suggestion cards (Promotional, Launch, etc.)  
- ⚡ Mock AI caption returned from `/askAi` endpoint  
- ⏳ Loading indicator while fetching  
- 🧩 Stand‑alone Angular components (input, suggestions, actions, response)  

---

## 🧩 Technologies
| Layer / Folder | Stack |
|----------------|-------|
| **frontend-task** | Angular 17 (stand‑alone components) |
| **backend-task**  | NestJS 10 |
| **task-2**        | Plain Node.js (FizzBuzz) |
| Styling           | Custom CSS (no Bootstrap) |

---

## 📂 File Structure
```plaintext
API-Project/
├── frontend-task/
│   └── src/app/
│       ├── input-box/
│       ├── suggestions/
│       ├── actions/
│       └── app.component.ts
│
├── backend-task/
│   └── src/
│       ├── ask-ai/
│       ├── app.module.ts
│       └── main.ts
│
├── task-2/
│   ├── index.js
│   └── fizzbuzz.js
│
└── README.md
```
