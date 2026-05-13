# TextiMood

**TextiMood** is a lightweight sentiment analysis web app that classifies text reviews into **positive** or **negative** sentiments using machine learning. It allows users to quickly evaluate the emotional tone of product reviews, feedback, or social media posts.

**Live Demo:** [texti-mood-v2.vercel.app](https://texti-mood-v2.vercel.app)

---

## Repository Structure

This repository has two main branches, each serving a different purpose:

| Branch | Description |
|---|---|
| [`streamlit`](https://github.com/gustigratia/TextiMood/tree/streamlit) | ML model training, experimentation, and Streamlit prototype |
| [`react-flask`](https://github.com/gustigratia/TextiMood/tree/react-flask) | Production web app (React frontend + Flask backend) |

---

## Branch: `streamlit` — Model & Prototyping

This branch contains the core machine learning pipeline for sentiment analysis.

### What's inside
- Data preprocessing and text cleaning
- Model training (sentiment classification: positive/negative)
- Evaluation and performance metrics
- Streamlit app for quick interactive demo

### Tech Stack
- Python
- Scikit-learn / machine learning libraries
- Streamlit
- Jupyter Notebook (if applicable)

### Run the Streamlit App

```bash
# Clone and switch to streamlit branch
git clone https://github.com/gustigratia/TextiMood.git
cd TextiMood
git checkout streamlit

# Install dependencies
pip install -r requirements.txt

# Run the app
streamlit run app.py
```

---

## Branch: `react-flask` — Production Web App

This branch contains the full-stack web application that deploys the trained model as an interactive web service.

### Structure

```
TextiMood/
├── backend/        # Flask API — serves the ML model
├── frontend/       # React app — user interface
├── textiMood       # Model file / core assets
├── .gitignore
└── README.md
```

### Tech Stack

**Frontend**
- React (Vite)
- CSS / HTML

**Backend**
- Python
- Flask
- Trained ML model (from `streamlit` branch)

---

## 🚀 Getting Started (react-flask)

### Prerequisites
- Node.js & npm
- Python 3.8+
- pip

### 1. Clone the repository

```bash
git clone https://github.com/gustigratia/TextiMood.git
cd TextiMood
git checkout react-flask
```

### 2. Setup the Backend (Flask)

```bash
cd backend
pip install -r requirements.txt
python app.py
```

The Flask API will run at `http://localhost:5000`.

### 3. Setup the Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

The React app will run at `http://localhost:5173`.

> Make sure the backend is running before starting the frontend.

---

## ✨ Features

- Input any text review or social media post
- Instant sentiment classification (Positive / Negative)
- Fast and lightweight — no heavy infrastructure needed
- Clean, responsive web interface

---

## How It Works

```
User Input (Text)
      ↓
React Frontend
      ↓
Flask API (POST /predict)
      ↓
ML Model (preprocessing → inference)
      ↓
Sentiment Result → Displayed on UI
```

---

## Languages

![JavaScript](https://img.shields.io/badge/JavaScript-61.2%25-yellow?style=flat-square)
![CSS](https://img.shields.io/badge/CSS-19.8%25-blue?style=flat-square)
![Python](https://img.shields.io/badge/Python-12.8%25-green?style=flat-square)
![HTML](https://img.shields.io/badge/HTML-5.9%25-orange?style=flat-square)

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Author

Made with ❤️ by [gustigratia](https://github.com/gustigratia)
