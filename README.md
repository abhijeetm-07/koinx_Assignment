# 🚀 KoinX Tax Loss Harvesting Tool

A high-fidelity, interactive financial dashboard built to help users optimize their crypto tax liabilities. This tool allows users to simulate "harvesting" capital losses to offset realized gains, providing real-time calculations of tax savings.

## 🛠️ Tech Stack

* **Framework:** [React 18](https://reactjs.org/) (Vite)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (Modern CSS-first approach)
* **Icons/UI:** Custom CSS & SVG
* **Deployment:** [Vercel](https://vercel.com/)

---

## 📈 Features & Logic

### 1. Tax Loss Harvesting Brain
The core logic resides in a custom hook (`useTaxHarvesting.js`). It dynamically calculates the "After Harvesting" state based on user selection:
* **Net Capital Gains:** Calculated as $Profits - Losses$ for both Short-Term (STCG) and Long-Term (LTCG) categories.
* **Harvesting Impact:** When an asset is selected, its gains/losses are added to the existing realized totals. 
* **Real-time Feedback:** A "Tax Reduction" message appears instantly, showing exactly how much the taxable base has decreased.

### 2. Interactive Dashboard
* **Gains Cards:** Comparative view of portfolio health before and after optimization.
* **Holdings Table:** * **Smart Sorting:** Toggle Short-Term gains in ascending/descending order.
    * **Data Slicing:** Clean UI that shows 4 primary assets with a "View All" expansion for the full list.
    * **Row Highlighting:** Active visual feedback when an asset is "harvested."

### 3. Professional UI/UX
* **Dark Mode:** Deep navy/black theme matching the KoinX brand identity.
* **Interactive Navbar:** "How it works?" tooltip with hover-state logic.
* **Disclaimers:** Collapsible notes section for important financial context.

---

## 🏗️ Setup Instructions

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/abhijeetm-07/koinx_Assignment.git
cd koinx_Assignment
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
This generates a `dist` folder optimized for deployment.

---

## 📂 Project Structure

```text
src/
├── components/     # UI Components (GainsCard, HoldingsTable, Navbar, etc.)
├── data/           # Mock API Data
├── hooks/          # Custom React Hooks (useTaxHarvesting)
├── services/       # Mock API Services
├── utils/          # Formatting & Math utilities
└── App.jsx         # Main application assembly
```

---

## 🛡️ License
Distributed under the MIT License. See `LICENSE` for more information.

**Built with ❤️ by Abhijeet M**
