# SBA-320H-TarotApp
 
Tarot Card Reading App

Description

This is a Tarot Card Reading web application that allows users to draw tarot cards and reveal their meanings and predictions. The app features a visually appealing UI with animated card interactions.

Features

Draw three random tarot cards from an API

Click on a card to reveal its meaning and prediction

Beautiful mystical-themed UI with smooth animations

Responsive design for mobile and desktop users

Installation

Prerequisites

Make sure you have the following installed on your machine:

Node.js

npm (comes with Node.js)

Steps to Set Up

Clone this repository:

git clone https://github.com/yourusername/tarot-app.git
cd tarot-app

Install dependencies:

npm install

Create a .env file in the root directory and add your API key:

VITE_TAROT_API_KEY=your_api_key_here

Start the development server:

npm run dev

File Structure

📂 tarot-app
│── 📂 src
│   ├── 📂 components
│   │   ├── TarotDeck.jsx
│   │   ├── TarotCard.jsx
│   ├── 📂 contexts
│   │   ├── CardContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│── 📂 public
│── 📂 styles
│   ├── App.css
│── .env
│── package.json
│── README.md

Troubleshooting

Cards not displaying?

Ensure your API key is correctly set in the .env file.

Check if the API service is online.

Card text overflowing?

Adjust the .tarot-card styles in App.css.

Use overflow: auto; in the .card-content to ensure scrollability.

Background image not showing?

Make sure the image path is correct in App.css.

Use background-size: cover; to properly display the image.

Future Improvements

Add more tarot deck options

Implement user authentication to save readings

Improve animations for better UX

