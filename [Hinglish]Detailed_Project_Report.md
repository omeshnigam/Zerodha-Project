# Zerodha Fully Functional Clone - Detailed Project Report

## 1. Project Architecture Overview
Yeh project ek **MERN Stack** (MongoDB, Express, React, Node.js) based architecture follow karta hai. Ismein teen main modules hain:
- **Backend**: Server-side logic, Database models, aur Authentication.
- **Frontend**: Zerodha ki landing page (Marketing website).
- **Dashboard**: User ka main trading interface jahan real-time data aur trading tools hote hain.

---

## 2. Backend Deep Dive
Backend [index.js](file:///c%3A/Users/ABC/Desktop/DevHub/Zerodha%20Fully%20Functional/backend/index.js) par run hota hai (Port 3002).

### A. Database Schemas & Models
Database ke liye **MongoDB** aur **Mongoose** ka use kiya gaya hai.
- **Holdings**: [HoldingsSchema.js](file:///c%3A/Users/ABC/Desktop/DevHub/Zerodha%20Fully%20Functional/backend/schemas/HoldingsSchema.js) - User ke long-term investments store karta hai.
- **Positions**: [PositionsSchema.js](file:///c%3A/Users/ABC/Desktop/DevHub/Zerodha%20Fully%20Functional/backend/schemas/PositionsSchema.js) - Current day ki open trades.
- **Orders**: [OrdersSchema.js](file:///c%3A/Users/ABC/Desktop/DevHub/Zerodha%20Fully%20Functional/backend/schemas/OrdersSchema.js) - Buy/Sell orders ki history.
- **Users**: [UserSchema.js](file:///c%3A/Users/ABC/Desktop/DevHub/Zerodha%20Fully%20Functional/backend/schemas/UserSchema.js) - Authentication ke liye `passport-local-mongoose` plugin ke saath.

### B. Authentication Flow
Authentication ke liye `passport` aur `passport-local-mongoose` ka use hua hai:
- `POST /signup`: Naya user create karta hai aur password ko salt/hash ke saath store karta hai.
- `POST /login`: Email aur password authenticate karta hai.

### C. API Endpoints
- `GET /allholdings`: MongoDB se saari holdings fetch karta hai.
- `GET /allPositions`: Saari positions fetch karta hai.
- `POST /newOrder`: User jab `Buy` button dabata hai, toh naya order database mein save hota hai.

---

## 3. Frontend Breakdown (Landing Page)
Frontend folder mein landing pages hain jo potential users ko attract karne ke liye hain.

### A. Routing Logic
[index.js](file:///c%3A/Users/ABC/Desktop/DevHub/Zerodha%20Fully%20Functional/frontend/src/index.js) mein `BrowserRouter` ka use karke routing define ki gayi hai:
- `/` -> `HomePage`
- `/signup` -> `Signup`
- `/products` -> `ProductsPage`
- `/pricing` -> `PricingPage`
- `/support` -> `SupportPage`
- `/about` -> `AboutPage`

### B. UI Components
Landing page modular components se bani hai jaise `Navbar`, `Footer`, `Hero`, aur specific page components.

---

## 4. Dashboard Deep Dive (The Trading Engine)
Dashboard module asli trading interface provide karta hai.

### A. Main Layout
[Dashboard.js](file:///c%3A/Users/ABC/Desktop/DevHub/Zerodha%20Fully%20Functional/dashboard/src/components/Dashboard.js) dashboard ka main layout handle karta hai:
- **Left Side**: `WatchList` hamesha visible rehti hai.
- **Right Side**: Dynamic components (`Summary`, `Orders`, `Holdings`, `Positions`, `Funds`) render hote hain based on URL.

### B. State Management (Context API)
[GeneralContext.js](file:///c%3A/Users/ABC/Desktop/DevHub/Zerodha%20Fully%20Functional/dashboard/src/components/GeneralContext.js) ka use karke `Buy Window` ki visibility aur selected stock ka data manage kiya jata hai. Yeh ek global state ki tarah kaam karta hai.

### C. Order Execution Logic
User jab `WatchList` mein kisi stock par `Buy` click karta hai:
1. `GeneralContext` ke through `BuyActionWindow` open hota hai.
2. [BuyActionWindow.js](file:///c%3A/Users/ABC/Desktop/DevHub/Zerodha%20Fully%20Functional/dashboard/src/components/BuyActionWindow.js) mein user quantity aur price enter karta hai.
3. `axios.post` request backend ko `/newOrder` endpoint par data bhejti hai.
4. Order database mein save ho jata hai.

---

## 5. Data Visualization
Project mein stocks aur portfolio data dikhane ke liye **Chart.js** ka use hua hai:
- **Doughnut Chart**: Portfolio allocation dikhane ke liye [DoughnutChart.js](file:///c%3A/Users/ABC/Desktop/DevHub/Zerodha%20Fully%20Functional/dashboard/src/components/DoughnutChart.js).
- **Vertical Graph**: Price comparison ke liye [VerticalGraph.js](file:///c%3A/Users/ABC/Desktop/DevHub/Zerodha%20Fully%20Functional/dashboard/src/components/VerticalGraph.js).

---

## 6. How to Convert this Report to PDF
Is Markdown report ko PDF mein convert karne ke liye:
1. VS Code mein **"Markdown PDF"** extension install karein.
2. Is file ko open karke `Ctrl+Shift+P` dabayein aur `Markdown PDF: Export (pdf)` search karein.
3. Ya phir, Browser mein is file ka content paste karke `Print (Ctrl+P)` karke "Save as PDF" select karein.

---

## 7. Code Breakthrough - Router & Logic Summary
| Router Location | Component | Path | Functionality |
| :--- | :--- | :--- | :--- |
| Frontend | `index.js` | `/about` | About page render karna |
| Dashboard | `Dashboard.js` | `/holdings` | API se data fetch karke table dikhana |
| Dashboard | `Dashboard.js` | `/orders` | Order history fetch karna |
| Backend | `index.js` | `/newOrder` | Mongoose model ke through order save karna |

---

