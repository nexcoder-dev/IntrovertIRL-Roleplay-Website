# Contributing to IntrovertIRL Roleplay (IIRP) Official Website

Thank you for your interest in contributing to the **IntrovertIRL Roleplay (IIRP) Official Website**!

Before contributing, please read these guidelines carefully.

---

## ⚖️ Important Legal & Licensing Notice

This project is governed by a **Commercial and Attribution License** (see [`LICENSE`](LICENSE)). It is **NOT** open source under permissive terms (such as MIT or Apache).

All intellectual property rights are reserved by the author (**Sayan**).

Contributions do **NOT** grant any ownership, distribution, or commercial rights over the project.

By submitting an issue or pull request, you explicitly agree that:

* Your contribution becomes part of this project.
* The author retains exclusive ownership and copyright over all contributed code and assets.
* You do not acquire any rights to resell, sublicense, or commercially exploit this project.

---

## 💻 Development Setup

The website is built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

### Prerequisites
* **Node.js**: `v18.17.0` or higher
* **npm**: `v9.0.0` or higher (or `pnpm`)

### Local Setup Steps
1. **Fork the repository** on GitHub.
2. **Clone your fork**:
   ```bash
   git clone https://github.com/<your-username>/IntrovertIRL-Roleplay-Website.git
   cd IntrovertIRL-Roleplay-Website
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Configure Environment Variables**:
   Copy `.env.example` to `.env.local` and add your credentials:
   ```bash
   cp .env.example .env.local
   ```
   *(Ensure `NEXT_PUBLIC_DISCORD_CLIENT_ID` is set for Discord OAuth authentication)*
5. **Start the local development server**:
   ```bash
   npm run dev
   ```
6. Open your browser at `http://localhost:3000` to test the website.

---

## 🚀 How to Submit Changes

1. Create a feature or bugfix branch with a descriptive name:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-description
   ```
2. Make your changes adhering to the [Coding Standards](#-coding--design-standards).
3. Verify your changes compile cleanly without errors:
   ```bash
   npm run lint
   npx tsc --noEmit
   ```
4. Commit your changes with clear, meaningful commit messages:
   ```bash
   git commit -m "feat(ui): add server status indicator on hero"
   ```
5. Push to your branch and open a **Pull Request (PR)** against the `main` branch.

---

## 🎨 Coding & Design Standards

To preserve the visual identity and performance of the website:

* **Visual Aesthetic**: Maintain the sleek dark mode, glassmorphic styling, and neon gradient accents (`orange-500` via white to `green-600`) used throughout the site.
* **Component Architecture**:
  * Place reusable UI primitives in [`components/ui/`](components/ui/).
  * Place section components in [`components/`](components/).
  * Place pages and layouts in [`app/`](app/).
  * Place backend API endpoints in [`pages/api/`](pages/api/) and shared utilities in [`lib/`](lib/).
* **Styling**: Use **Tailwind CSS** utility classes. Avoid arbitrary inline styles where Tailwind utilities exist.
* **Responsiveness**: Ensure all views look great across mobile, tablet, and desktop viewports.
* **TypeScript**: Maintain strict typing without using `any` unless absolutely necessary.
* **Security**: Never commit sensitive information, API keys, webhook URLs, bot tokens, or private secrets.

---

## 🐛 Bug Reports

If you encounter a bug, please open a GitHub Issue including:

* **Summary**: A concise description of the bug.
* **Steps to Reproduce**: Step-by-step instructions to recreate the problem.
* **Expected vs. Actual Behavior**: What you expected to happen versus what actually occurred.
* **Device / Browser**: Browser version, operating system, and screen resolution.
* **Screenshots / Recordings**: Visual evidence if the issue involves UI layout or animations.

---

## 💡 Feature Requests

Feature ideas that enhance the **IntrovertIRL RP** community experience are welcome!

When proposing a feature:
* Clearly describe the problem it solves or the value it adds to players and visitors.
* Keep in mind that approval and implementation of feature proposals are at the sole discretion of the author.

---

## 🕊️ Code of Conduct

* Be respectful, collaborative, and constructive in all discussions, issues, and pull requests.
* Harassment, hate speech, or toxic behavior will result in an immediate block and removal from collaboration.

---

## 📬 Contact & Licensing Inquiries

For commercial licensing, partnerships, or private inquiries:
* **Author**: Sayan
* **Email**: [gsa339402@gmail.com](mailto:gsa339402@gmail.com)
