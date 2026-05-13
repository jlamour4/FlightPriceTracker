# Flight Price Tracker

A React/Firebase web app for tracking Southwest Airlines flight prices and surfacing price-change alerts for saved routes.

## Why this exists

Southwest prices can move after booking, and checking manually is easy to forget. This project turns that workflow into a small dashboard-style app so a user can keep an eye on routes and react when prices change.

## Tech stack

- React / Create React App
- Firebase
- Material UI
- React Router

## Project structure

```text
.
├── README.md
├── FlightPriceTracker_logo.png
└── web/
    └── app/        # React app
```

## Running locally

```bash
git clone https://github.com/jlamour4/FlightPriceTracker.git
cd FlightPriceTracker/web/app
npm install
npm start
```

Then open `http://localhost:3000`.

## Notes

This is an older project and may need dependency updates before production use. The core idea is still useful: monitor a repetitive travel workflow and turn price changes into actionable alerts.
