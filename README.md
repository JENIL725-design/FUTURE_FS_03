# 🎮 Ultimate Game Store (Internship Task)

A modern, high-performance game distribution platform built with **Next.js 15**, **Tailwind CSS**, and **Firebase**.

This project features a fully dynamic frontend that fetches game data (titles, prices, images) from a Firestore backend, wrapped in a responsive, cyberpunk-themed user interface.

## 🚀 Tech Stack

* **Frontend:** Next.js (App Router), React
* **Styling:** Tailwind CSS
* **Backend:** Firebase (Firestore Database)
* **Optimization:** Next.js Image Optimization, Dynamic Imports
* **Deployment:** Netlify / Vercel

## ✨ Key Features

* **Dynamic Data Fetching:** All game cards (GTA V, God of War, etc.) are fetched in real-time from Firebase Firestore.
* **Responsive Design:** Fully optimized for Desktop, Tablet, and Mobile (includes a custom hamburger menu).
* **High Performance:** Uses local image assets in the `public` folder for zero-latency loading.
* **Cyberpunk UI:** Custom neon glow effects, glassmorphism, and smooth hover animations.
* **Error Handling:** Smart image fallbacks (Safety Net) if a game image fails to load.

## 📂 Folder Structure
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Markdown
# 🎮 Ultimate Game Store (Internship Task)

A modern, high-performance game distribution platform built with **Next.js 15**, **Tailwind CSS**, and **Firebase**.

This project features a fully dynamic frontend that fetches game data (titles, prices, images) from a Firestore backend, wrapped in a responsive, cyberpunk-themed user interface.

## 🚀 Tech Stack

* **Frontend:** Next.js (App Router), React
* **Styling:** Tailwind CSS
* **Backend:** Firebase (Firestore Database)
* **Optimization:** Next.js Image Optimization, Dynamic Imports
* **Deployment:** Netlify / Vercel

## ✨ Key Features

* **Dynamic Data Fetching:** All game cards (GTA V, God of War, etc.) are fetched in real-time from Firebase Firestore.
* **Responsive Design:** Fully optimized for Desktop, Tablet, and Mobile (includes a custom hamburger menu).
* **High Performance:** Uses local image assets in the `public` folder for zero-latency loading.
* **Cyberpunk UI:** Custom neon glow effects, glassmorphism, and smooth hover animations.
* **Error Handling:** Smart image fallbacks (Safety Net) if a game image fails to load.

## 📂 Folder Structure

├── public/ # Local static assets (Game images) ├── src/ │ ├── app/ # Next.js App Router pages │ ├── components/ # Reusable UI components (Navbar, Footer) │ └── lib/ # Firebase configuration └── package.json # Project dependencies


## 🛠️ Getting Started

Follow these steps to run the project locally on your machine.

### 1. Clone the Repository
```bash
git clone [https://github.com/YOUR_USERNAME/future_fs_03.git](https://github.com/YOUR_USERNAME/future_fs_03.git)
cd future_fs_03
2. Install Dependencies
Bash
npm install
3. Run the Development Server
Bash
npm run dev
Open http://localhost:3000 with your browser to see the result.

🔥 Firebase Configuration
To connect your own database, update the src/lib/firebase.js (or firebaseConfig.js) file with your own Firebase credentials:

JavaScript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "future-interns-steam.firebaseapp.com",
  projectId: "future-interns-steam",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
Developed by [Jenil]
