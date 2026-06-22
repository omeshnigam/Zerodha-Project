# Zerodha Clone - Production-Grade Trading Engine & FinTech Architecture

A high-performance, full-stack trading and portfolio management ecosystem modeled structurally after India's leading discount brokerage platform, Zerodha. 

This enterprise-grade clone showcases a deeply decoupled multi-module architecture built from scratch. It features complex database modeling, multi-tier user authentication, global client-state orchestration, real-time transaction handling, and advanced analytical data visualization. Built entirely **from scratch using native engineering principles and zero AI generation tools**, this codebase represents complete manual software construction brick by brick.

---

## 🏛️ System Architecture Overview

The ecosystem is engineered using a highly modular **MERN Stack** blueprint, segmented cleanly into three distinct structural modules to guarantee high data availability and processing boundaries:

* **Backend Engine:** Scalable server-side logic managing database transactions, user authentication lifecycles, and secure data routing.
* **Marketing Frontend:** The client-facing landing platform optimized for responsive routing, discovery, and product showcase.
* **Trading Dashboard Console:** The core algorithmic UI rendering the live financial hub, including real-time order books, portfolio allocation windows, and funds trackers.

---

## ⚙️ Backend Deep Dive & FinTech Data Pipelines

The server-side infrastructure operates natively on Node.js/Express, providing low-latency execution interfaces to handle transactional state updates.

### 📊 Relational Database Schemas (MongoDB & Mongoose)
To encapsulate a reliable accounting and trading ledger, the data layer utilizes strict Mongoose ODM models mapping distinct transactional workflows:
* **Holdings Ledger:** Manages and persists long-term underlying asset investments, calculating real-time changes in equity metrics.
* **Positions Registry:** Records current intraday open exposures, dynamic buy/sell averages, and unrealized day-end metrics.
* **Order Ledger:** Stores historical transactional audit trails (Completed, Canceled, or Pending) for precise financial accounting.
* **User Identity Ledger:** Implements secure user identity access management fortified via `passport-local-mongoose` plugins for handling internal hash/salt state mechanisms.

### 🛡️ Financial Access Control & Auth Lifecycle
Authentication pipelines are secured using stateful session protocols managed via Passport:
* `POST /signup` – Intercepts incoming requests, hashes passwords with random salt strings, and commits clean user profiles.
* `POST /login` – Conducts strict lookup validation routines to securely authorize client portal entry.

### 🔌 RESTful Routing Matrix
| Endpoint | Method | Operation Description |
| :--- | :--- | :--- |
| `/allholdings` | `GET` | Pulls granular asset records from the database cluster to calculate net-worth allocations. |
| `/allPositions` | `GET` | Fetches active intraday market exposures for live portfolio streaming. |
| `/newOrder` | `POST` | Intercepts real-time buy/sell triggers, executes balance validations, and mutates the order registry. |

---

## 🖥️ Modular Frontend & Routing Interface

The discovery site is composed of reusable atomic components designed for optimal payload delivery and modular scalability.

### 🧭 Declarative SPA Client Routing
Client-side routing is orchestrated via React Router's `BrowserRouter` tree, mapping isolated view contexts dynamically without forcing server-side page reboots:
* `/` ➡️ `HomePage` (Unified marketing hub)
* `/signup` ➡️ `Signup` (Onboarding access panel)
* `/products` ➡️ `ProductsPage` (Ecosystem suite overview)
* `/pricing` ➡️ `PricingPage` (Brokerage structure grids)

---

## 📉 Trading Dashboard Console (Core Operational Matrix)

The specialized trading hub provides a single-page application interface crafted for intense user interaction and high data-density display.

### 🛠️ Split View Layout Architecture
The interface implements a strict layout topology to prevent interface lag during execution:
* **Persistent Left Panel (`WatchList`):** Stays statically locked into view to allow continuous monitoring of watchlists, real-time tickers, and instantaneous access to order triggers.
* **Dynamic Right Panel:** Adapts contextually to current user requests, mounting core functional tables (`Summary`, `Orders`, `Holdings`, `Positions`, `Funds`) programmatically based on the active state selection.

### ⚛️ State Orchestration (React Context API)
To overcome deep prop-drilling vulnerabilities across complex tree depths, a centralized global state manager (`GeneralContext.js`) isolates active security data. It broadcasts parameters such as stock symbol tracking and the visibility states of the **Order Execution Action Window** seamlessly to downstream listeners.

### ⚡ Order Execution Logic Pipeline
When a user engages the `Buy` interface on a specific instrument within the watchlist:
1. The global state manager catches the event and broadcasts instrument metadata to the execution layer.
2. The `BuyActionWindow` dynamically mounts, intercepting user inputs for target quantity and limit price.
3. An asynchronous client pipeline (`axios.post`) dispatches the transactional parameters straight to the `/newOrder` backend endpoint.
4. The backend server verifies the integrity of the data payload and appends a persistent record to the MongoDB cluster.

---

## 📊 Analytics & Advanced Data Visualization

Portfolio diversification and capital distribution metrics are rendered natively inside UI layouts utilizing **Chart.js** wrappers to translate database records into readable charts:
* **Asset Allocation Mapping:** Utilizes specialized `Doughnut` chart structures to graphically segment portfolio balances across active sectors.
* **Price Variance Engines:** Implements responsive vertical graphs to map market cost comparisons against current valuations.

---

## 📈 Dev Footprint & Quality Standards

* **100% Handcrafted:** This repository represents entirely original layout engineering and architecture. No pre-packaged layout engines, automated boilerplate blocks, or AI generation engines were used. 
* **Corporate Readiness:** Built to model the exact engineering constraints seen in scalable enterprise-level financial platforms—specifically state isolation, secure multi-party authentication, and clean separation of concerns.

---

### 💼 HR & Recruiting Summary
This project stands as clear evidence of my capability to engineer production-ready, full-stack architectures from scratch. I deeply understand database schemas, asynchronous state flows, role-based authentication layers, and data-dense UI styling. I am fully prepared to join your development squad on Day 1 and push reliable code straight into your engineering pipeline.
