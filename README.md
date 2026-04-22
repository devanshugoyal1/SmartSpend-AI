# 💰 SmartSpend AI

<div align="center">

![SmartSpend AI Banner](assets/logo.png)

### AI-Powered Personal Expense Tracker & Financial Insights Platform

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-SmartSpend_AI-6366f1?style=for-the-badge)](https://devanshugoyal1.github.io/SmartSpend-AI/)
[![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-222?style=for-the-badge&logo=github)](https://devanshugoyal1.github.io/SmartSpend-AI/)
[![Made in India](https://img.shields.io/badge/Made_with_❤️_in-India-FF9933?style=for-the-badge)](https://github.com/devanshugoyal1)
[![License](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)](LICENSE)

**Track Smarter. Save More. With AI.**

[🚀 Live Demo](https://devanshugoyal1.github.io/SmartSpend-AI/) • [📸 Screenshots](#-screenshots) • [✨ Features](#-features) • [🛠️ Tech Stack](#️-tech-stack) • [📦 Installation](#-installation)

</div>

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Live Demo](#-live-demo)
- [Screenshots](#-screenshots)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage Guide](#-usage-guide)
- [Pages Overview](#-pages-overview)
- [localStorage Data Schema](#-localstorage-data-schema)
- [AI Features](#-ai-features)
- [Responsive Design](#-responsive-design)
- [Demo Credentials](#-demo-credentials)
- [Contributing](#-contributing)
- [Future Roadmap](#-future-roadmap)
- [Author](#-author)
- [License](#-license)
- [Acknowledgements](#-acknowledgements)

---

## 🎯 About the Project

**SmartSpend AI** is a modern, fully client-side personal finance management web application built for Indian users. It combines beautiful dark-themed UI design with AI-powered financial insights to help users track expenses, manage budgets, achieve savings goals, and understand their spending patterns — all without requiring any backend server or database.

> 💡 **Zero backend. 100% private. All data stays in your browser.**

### Why SmartSpend AI?

| Problem | SmartSpend AI Solution |
|---------|----------------------|
| 😕 Can't track daily expenses | ✅ Easy transaction management with 13 categories |
| 📊 No financial visibility | ✅ Real-time dashboard with Chart.js visualizations |
| 🤖 No intelligent insights | ✅ AI-powered analysis and personalized recommendations |
| 🎯 Can't achieve savings goals | ✅ Goal tracker with circular progress rings |
| 📱 Desktop-only tools | ✅ Fully responsive — works on mobile, tablet, desktop |
| 🔒 Privacy concerns | ✅ All data stored locally in browser localStorage |
| 🇮🇳 No India-specific features | ✅ Built for India — INR ₹, UPI, Indian categories |

---

## 🌐 Live Demo

**🔗 [https://devanshugoyal1.github.io/SmartSpend-AI/](https://devanshugoyal1.github.io/SmartSpend-AI/)**

### Demo Credentials
```
Email:    devanshu@example.com
Password: demo123
```
> Or click **"Try Demo Account"** on the login page for instant access!

---

## 📸 Screenshots

### 🏠 Landing Page
> Professional marketing page with hero section, features, pricing, and testimonials

### 📊 Dashboard
> Real-time KPI cards, Income vs Expense bar chart, Spending by Category donut chart, Recent Transactions, AI Insights, Budget Overview

### 💳 Transactions
> Full transaction management with add/edit/delete, search, filter by type, bulk operations

### 📈 Analytics
> Monthly trend line chart, category breakdown, weekly spending, payment methods donut, budget rings, AI analysis

### 🎯 Budget Manager
> Category budget cards with progress bars, AI suggestions, add new categories, alert settings

### 🏆 Savings Goals
> Goal cards with animated circular progress rings, AI Goals Advisor with fund allocation

### 🤖 AI Insights
> Financial Health Score gauge, insight cards, personalized tips, Next Month Prediction, Ask Anything AI chat

### 📄 Reports
> Monthly financial reports with charts, tables, AI summary, CSV export, print

### ⚙️ Settings
> Profile management, password change, notifications, theme, data export/import

---

## ✨ Features

### 🔐 Authentication
- [x] User Signup with password strength meter
- [x] User Login with remember me option
- [x] Demo account for instant access
- [x] Auth guard — protected routes redirect to login
- [x] Forgot password modal
- [x] Session management via localStorage

### 📊 Dashboard
- [x] Real-time KPI cards (Balance, Income, Expense, Savings Rate)
- [x] Income vs Expense bar chart (last 6 months) — powered by Chart.js
- [x] Spending by Category doughnut chart
- [x] Recent Transactions list (last 5)
- [x] AI Smart Insight card with personalized analysis
- [x] Budget Overview with progress bars
- [x] Dynamic greeting (Good morning/afternoon/evening)

### 💳 Transactions
- [x] Add transactions with modal form (Income / Expense)
- [x] 13 spending categories with emoji icons
- [x] 4 payment methods (UPI, Card, Bank, Cash)
- [x] Edit existing transactions
- [x] Delete single or bulk transactions
- [x] Search transactions by name/category/method
- [x] Filter by All / Income / Expense
- [x] Summary cards (Total Income, Expense, Net Savings)
- [x] Toast notifications for all actions

### 📈 Analytics
- [x] Monthly Spending Trend line chart (6 months)
- [x] Category Breakdown horizontal bars
- [x] Weekly Spending bar chart (last 7 days)
- [x] Payment Methods doughnut chart
- [x] Spending vs Budget circular rings
- [x] AI-generated Financial Analysis (Pattern, Anomaly, Prediction)
- [x] KPI cards (Total Spent, Avg Daily, Biggest Expense, Savings)

### 🎯 Budget Manager
- [x] Category-wise budget cards with colored progress bars
- [x] Color coding: Green (< 70%), Amber (70-90%), Red (> 90%)
- [x] Edit budget with slider and input (synced)
- [x] AI budget suggestions based on 3-month average
- [x] Add new budget categories
- [x] Budget alert settings with toggles
- [x] Summary cards (Total Budget, Spent, Remaining)

### 🏆 Savings Goals
- [x] Create goals with emoji picker, target, deadline
- [x] Animated circular SVG progress rings
- [x] Color-coded status (On Track, Behind Schedule, Complete)
- [x] Add money to goals
- [x] Delete goals
- [x] Search goals
- [x] AI Goals Advisor with proportional fund allocation
- [x] Days remaining and monthly contribution calculator

### 🤖 AI Insights
- [x] Financial Health Score (0-100) with gauge visualization
- [x] Spending Anomaly detection
- [x] Positive performance recognition
- [x] Subscription Audit insights
- [x] Personalized Tips with potential savings amounts
- [x] Next Month Expense Prediction chart
- [x] **Ask Anything AI Chat** — answers financial questions from your data
  - Food spending queries
  - Savings rate analysis
  - Income analysis
  - Overspend detection
  - Affordability checks
  - Personalized tips
- [x] Typing indicator animation

### 📄 Reports
- [x] Month selector (last 6 months + all months with data)
- [x] Summary banner (Income, Expense, Savings, Rate)
- [x] Income vs Expense bar chart
- [x] Spending by Category doughnut chart
- [x] Category breakdown table with progress bars
- [x] Complete transactions table
- [x] AI-generated report summary
- [x] **CSV Export** — download for Excel
- [x] Print functionality
- [x] Share link

### ⚙️ Settings
- [x] Profile information editing (name, email, phone, currency)
- [x] Profile photo upload
- [x] Password change with confirmation
- [x] 2FA toggle
- [x] 6 notification preference toggles
- [x] Theme selection (Dark / Light / System)
- [x] Language selector (English, Hindi, Gujarati, Marathi)
- [x] **Export all data as JSON** (backup)
- [x] **Import data from JSON** (restore)
- [x] Clear all data (with double confirmation)

### 📱 Responsive Design
- [x] Hamburger menu for mobile sidebar
- [x] Overlay backdrop when sidebar opens on mobile
- [x] KPI cards — 4 columns on desktop, 2 on tablet, 1 on mobile
- [x] Charts stack vertically on mobile
- [x] Tables with horizontal scroll on mobile
- [x] Touch-friendly tap targets

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Structure** | HTML5 | Semantic page structure |
| **Styling** | CSS3 + Tailwind CSS (CDN) | Visual design & responsive layout |
| **Interactivity** | Vanilla JavaScript ES6+ | All dynamic functionality |
| **Charts** | Chart.js 4.x | Data visualizations |
| **Icons** | Google Material Symbols | UI icons |
| **Fonts** | Google Fonts (Manrope + Inter) | Typography |
| **Storage** | Browser localStorage API | Client-side data persistence |
| **Design** | Google Stitch + Gemini AI | Initial UI generation |
| **AI Dev Tool** | Anthropic Claude | Code generation & debugging |
| **IDE** | Visual Studio Code | Development environment |
| **Hosting** | GitHub Pages | Free web hosting |
| **Version Control** | Git + GitHub | Source code management |

### No frameworks. No backend. No database. Just HTML + CSS + JS. 🔥

---

## 📁 Project Structure

```
SmartSpend-AI/
│
├── 📄 index.html              # Landing page
├── 📄 login.html              # User login
├── 📄 signup.html             # User registration
├── 📄 dashboard.html          # Main dashboard
├── 📄 transactions.html       # Transaction management
├── 📄 analytics.html          # Financial analytics
├── 📄 budget-manager.html     # Budget tracking
├── 📄 savings-goals.html      # Savings goals
├── 📄 ai-insights.html        # AI insights & chat
├── 📄 reports.html            # Monthly reports
├── 📄 settings.html           # User settings
│
├── 📜 auth.js                 # Auth guard + responsive sidebar
├── 🎨 responsive.css          # Mobile responsive styles
│
├── 📁 assets/
│   ├── 🖼️ logo.png            # App logo
│   └── 🖼️ avatar.png          # Default user avatar
│
└── 📖 README.md               # This file
```

---

## 📦 Installation

### Option 1 — Use Live Demo (Recommended)
Simply visit: **[https://devanshugoyal1.github.io/SmartSpend-AI/](https://devanshugoyal1.github.io/SmartSpend-AI/)**

### Option 2 — Run Locally

**Step 1: Clone the repository**
```bash
git clone https://github.com/devanshugoyal1/SmartSpend-AI.git
cd SmartSpend-AI
```

**Step 2: Open with Live Server (VS Code)**
1. Install [VS Code](https://code.visualstudio.com/)
2. Install the **Live Server** extension
3. Right-click `index.html` → **Open with Live Server**
4. App opens at `http://localhost:5500`

**Step 3: Or simply open index.html**
```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

> ⚠️ **Note:** Opening directly as `file://` may cause CORS issues with CDN resources. Use Live Server for best results.

### Prerequisites
- Modern web browser (Chrome 90+, Firefox 85+, Edge 90+, Safari 14+)
- JavaScript enabled
- Internet connection (for CDN resources on first load)

---

## 🚀 Usage Guide

### First Time Setup

1. **Visit the app** → [https://devanshugoyal1.github.io/SmartSpend-AI/](https://devanshugoyal1.github.io/SmartSpend-AI/)
2. **Click "Get Started Free"** → Create your account
3. **Enter your monthly income** (optional but recommended for AI insights)
4. **You're in!** → Explore your dashboard

### Adding Your First Transaction

1. Go to **Transactions** page
2. Click **"Add Transaction"** button (top right)
3. Select **Income** or **Expense**
4. Enter amount, category, description, date, payment method
5. Click **"Add Transaction"**
6. See your dashboard update in real-time!

### Setting Up Budgets

1. Go to **Budget Manager** page
2. Budget cards for 7 default categories are shown
3. Click the **pencil icon** on any card to edit the limit
4. Use the slider or type the amount
5. Click **"AI Suggestion"** for smart recommendations
6. Click **"Save Changes"**

### Creating a Savings Goal

1. Go to **Savings Goals** page
2. Click **"+ New Goal"**
3. Enter goal name, emoji, target amount, deadline
4. Click **"Create Goal"**
5. Use **"Add Money"** to track contributions

### Using the AI Chat

1. Go to **AI Insights** page
2. Scroll to the **"Ask Anything"** chat panel
3. Ask questions like:
   - *"How much did I spend on food this month?"*
   - *"What is my savings rate?"*
   - *"Which category did I overspend on?"*
   - *"Can I afford a ₹15,000 phone?"*

---

## 📱 Pages Overview

| Page | URL | Description |
|------|-----|-------------|
| Landing | `index.html` | Marketing page with features, pricing, testimonials |
| Login | `login.html` | User authentication |
| Signup | `signup.html` | New account creation |
| Dashboard | `dashboard.html` | Main financial overview |
| Transactions | `transactions.html` | Add, edit, delete transactions |
| Analytics | `analytics.html` | Charts and spending analysis |
| Budget Manager | `budget-manager.html` | Set and track budgets |
| Savings Goals | `savings-goals.html` | Track savings targets |
| AI Insights | `ai-insights.html` | AI analysis and chat |
| Reports | `reports.html` | Monthly financial reports |
| Settings | `settings.html` | Account and app settings |

---

## 💾 localStorage Data Schema

All data is stored in the browser's localStorage using the following keys:

```javascript
// Transactions Array
localStorage['smartspend_transactions'] = [
  {
    id: 1704067200000,        // Unique ID (Date.now())
    date: "2026-03-20",       // YYYY-MM-DD format
    category: "🍕 Food",      // Emoji + category name
    desc: "Swiggy Order",     // Transaction description
    method: "UPI",            // UPI | Card | Bank | Cash
    amount: 340,              // Positive number
    type: "expense"           // "income" | "expense"
  }
]

// Budget Limits Object
localStorage['smartspend_budgets'] = {
  "🍕 Food": 10000,
  "🛒 Shopping": 8000,
  "🚗 Transport": 5000,
  // ... more categories
}

// Savings Goals Array
localStorage['smartspend_goals'] = [
  {
    id: 1,
    name: "New iPhone 16 Pro",
    emoji: "🏆",
    target: 50000,
    saved: 34000,
    deadline: "2026-06",
    color: "#6366f1"
  }
]

// User Settings
localStorage['smartspend_settings'] = {
  name: "Devanshu Goyal",
  email: "devanshu@example.com",
  currency: "INR",
  theme: "dark",
  avatar: "data:image/..." // Base64 if custom avatar set
}

// Auth State
localStorage['smartspend_auth'] = "true"
localStorage['smartspend_user'] = { name, email }
localStorage['smartspend_users'] = [{ name, email, password }]
```

---

## 🤖 AI Features

SmartSpend AI includes a custom AI engine that analyzes your financial data:

### Financial Health Score
Calculated based on your monthly savings rate:
- **90/100 — Excellent**: Savings rate ≥ 30%
- **80/100 — Good**: Savings rate ≥ 20%
- **70/100 — Fair**: Savings rate ≥ 10%
- **60/100 — Needs Work**: Savings rate ≥ 0%
- **40/100 — Critical**: Spending more than earning

### AI Chat Capabilities
The Ask Anything chat understands these topics:
```
🍕 Food spending    → Analyzes food & dining transactions
💰 Savings         → Calculates savings rate & amount
💼 Income          → Summarizes income sources
⚠️ Overspending   → Identifies exceeded budget categories
📊 Total spending  → Provides expense breakdown
🛒 Affordability   → Checks if purchase is feasible
💡 Tips            → Generates personalized advice
```

### Budget AI Suggestions
- Analyzes last 3 months of spending per category
- Calculates average monthly spend
- Suggests limit = average × 1.1 (10% buffer)
- Rounded to nearest ₹500

---

## 📱 Responsive Design

SmartSpend AI is fully responsive across all device sizes:

| Breakpoint | Layout |
|-----------|--------|
| Mobile (< 640px) | Single column, hidden sidebar, hamburger menu |
| Tablet (640-1023px) | 2-column grid, collapsible sidebar |
| Desktop (≥ 1024px) | Full layout with persistent sidebar |

### Mobile Features
- 🍔 Hamburger button (top-left) to toggle sidebar
- 🔲 Overlay backdrop dims content when sidebar is open
- 👆 Touch-friendly tap targets (minimum 44px)
- 📜 Horizontal scroll for tables
- 📐 Stacked charts for narrow screens

---

## 🔑 Demo Credentials

```
Email:    devanshu@example.com
Password: demo123
```

The demo account comes pre-loaded with sample transactions so you can explore all features immediately.

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help improve SmartSpend AI:

### Bug Reports
1. Open an [Issue](https://github.com/devanshugoyal1/SmartSpend-AI/issues)
2. Describe the bug clearly
3. Include screenshots if possible
4. Mention your browser and device

### Feature Requests
1. Open an [Issue](https://github.com/devanshugoyal1/SmartSpend-AI/issues) with the `enhancement` label
2. Describe the feature and its use case
3. Explain why it would benefit users

### Pull Requests
```bash
# Fork the repository
# Create a feature branch
git checkout -b feature/amazing-feature

# Commit your changes
git commit -m 'Add amazing feature'

# Push to branch
git push origin feature/amazing-feature

# Open a Pull Request
```

### Coding Standards
- Use consistent indentation (2 spaces)
- Follow existing naming conventions
- Add comments for complex logic
- Test across Chrome, Firefox, and Safari
- Ensure mobile responsiveness

---

## 🗺️ Future Roadmap

### Version 2.0 — Enhanced AI
- [ ] Real Google Gemini API integration for smarter chat
- [ ] Bank statement CSV import (HDFC, SBI, ICICI format)
- [ ] Recurring transaction automation
- [ ] Budget breach push notifications (PWA)

### Version 2.5 — Cloud Sync
- [ ] Firebase Firestore backend integration
- [ ] Multi-device data synchronization
- [ ] Automatic cloud backup
- [ ] User data encryption

### Version 3.0 — Full Platform
- [ ] React.js + Next.js migration
- [ ] Native mobile apps (React Native)
- [ ] Investment portfolio tracking
- [ ] Income tax calculator (Indian IT)
- [ ] Family finance management (multi-user)
- [ ] Credit score integration

---

## 👨‍💻 Author

<div align="center">

**Devanshu Goyal**

BCA (MAWT) | 6th Semester | Apex University, Jaipur

[![GitHub](https://img.shields.io/badge/GitHub-devanshugoyal1-222?style=flat-square&logo=github)](https://github.com/devanshugoyal1)

</div>

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 Devanshu Goyal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...
```

---

## 🙏 Acknowledgements

- **[Google Stitch](https://stitch.withgoogle.com)** — AI-powered UI design tool used to generate initial page designs
- **[Anthropic Claude](https://claude.ai)** — AI assistant for code generation, debugging, and optimization
- **[Tailwind CSS](https://tailwindcss.com)** — Utility-first CSS framework for rapid UI development
- **[Chart.js](https://www.chartjs.org)** — Beautiful, interactive charts for data visualization
- **[Google Material Symbols](https://fonts.google.com/icons)** — Consistent icon library
- **[Google Fonts](https://fonts.google.com)** — Manrope and Inter font families
- **Apex University, Jaipur** — For academic guidance and project support
- **CRED & Fi Money** — Design inspiration for fintech UI patterns

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

[![GitHub stars](https://img.shields.io/github/stars/devanshugoyal1/SmartSpend-AI?style=social)](https://github.com/devanshugoyal1/SmartSpend-AI/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/devanshugoyal1/SmartSpend-AI?style=social)](https://github.com/devanshugoyal1/SmartSpend-AI/network/forks)

---

Made with ❤️ in India 🇮🇳 | SmartSpend AI © 2026

[🔝 Back to Top](#-smartspend-ai)

</div>
