# SpaceX Launches App

A simple web app built with **Vite + Vanilla JS** that displays SpaceX launches using the public SpaceX API.  
Features include:
- Infinite scroll for loading more launches
- Search by mission name
- Status badges (upcoming, success, failed)
- Spinner loader
- Toggleable mission details
- Display of how many years ago a launch happened

---

## 🚀 Tech Stack
- **Vite**: Fast build tool and dev server
- **Vanilla JavaScript**: No frameworks, just plain JS
- **CSS**: Custom styling
- **SpaceX API v3**: Data source for launches

---

## 📂 Project Structure

SpaceX-app/
│ src/
│    │
│    ├── css/
│    │   └── style.css
│    │
│    ├── js/
│    │   ├── api.js               # Fetches data from SpaceX API
│    │   ├── ui.js                # Renders UI components
│    │   ├── infiniteScroll.js    # Handles lazy loading
│    │   ├── search.js            # Search functionality  
│    │   └
│    │
│    └── main.js                  # Entry point
└── index.html               # Root HTML file, mounts the app
