# 🎮 IntrovertIRL Roleplay (IIRP) — Official Website

[![Next.js](https://img.shields.io/badge/Next.js-15.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Discord.js](https://img.shields.io/badge/Discord.js-14.18-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.js.org/)
[![License: Custom](https://img.shields.io/badge/License-Custom-crimson.svg?style=for-the-badge)](LICENSE)

> **A whitelisted, immersive Roleplay web portal built for streamers, storytellers, and gaming legends.**  
> Driven by creators. Fueled by community. Inspired by you. `#TogetherWeRise`

---

## 📖 Overview

**IntrovertIRL RP** is a modern, responsive web application designed for the **IntrovertIRL Roleplay** FiveM community. Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**, it delivers a sleek dark-mode gaming interface, ambient video effects, real-time server counters, interactive rulebooks, community testimonials, media streamer showcases, and an automated Discord-authenticated whitelist application system.

---

## ✨ Features

- **🛡️ Modern Gaming UI**: High-performance carbon dark aesthetic featuring glowing neon orange and emerald green gradient accents, glassmorphic cards, and smooth animations.
- **⚡ Hero & Server Status**: Dynamic video backdrop with real-time live player count display, custom job stats, and 24/7 server uptime metrics.
- **📝 Automated Whitelist System**:
  - Secure Discord OAuth2 login authentication.
  - Comprehensive character backstory, rules comprehension, and scenario questionnaire.
  - Automated Discord staff bot integration for application review, logs, and instant applicant DM updates.
- **📜 Server Rules Hub**: Clean, expandable accordion breakdown of community standards, roleplay etiquette, combat guidelines, and metagaming policies.
- **🚀 One-Click Server Connection**: Quick server IP copy box and direct FiveM protocol connect links (`fivem://connect/introvertirlrp.com`).
- **👥 Community & Testimonials**: Player reviews, character role spotlights, and community feedback.
- **🤝 Sponsor & Partner Showcase**: Grid display for brand partners and server sponsors.
- **🎥 Streamers & Media Hub**: Dedicated spotlight for community content creators, YouTubers, and verified live streamers.
- **📱 Fully Responsive**: Pixel-perfect layout tailored for desktops, laptops, tablets, and smartphones.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[Next.js 15](https://nextjs.org/)** | Fullstack React framework & App Router architecture |
| **[React 19](https://react.dev/)** | Frontend component and UI library |
| **[TypeScript](https://www.typescriptlang.org/)** | Type safety and enhanced developer tooling |
| **[Tailwind CSS](https://tailwindcss.com/)** | Utility-first styling with custom keyframe animations |
| **[Discord.js](https://discord.js.org/)** | Discord Bot API integration for application processing |
| **[Radix UI](https://www.radix-ui.com/)** | Accessible, unstyled UI primitives (Dialogs, Accordions, Tabs) |
| **[Lucide React](https://lucide.dev/)** | Modern, lightweight UI icon suite |

---

## 📁 Project Structure

```text
Starline-Roleplay-Website/
├── app/                      # Next.js 15 App Router pages & root layout
│   ├── layout.tsx            # Global metadata, typography & theme providers
│   ├── page.tsx              # Main home landing page & navigation header
│   └── globals.css           # Global Tailwind directives & color tokens
├── components/               # Modular UI sections & features
│   ├── community.tsx         # Player reviews, sponsors & media team
│   ├── features.tsx          # Key server features & mechanics
│   ├── footer.tsx            # Footer navigation, branding & legal notices
│   ├── hero-section.tsx      # Video hero banner & live status tracker
│   ├── join-server.tsx       # Direct connect guide & server IP details
│   ├── server-rules.tsx      # Interactive server rules accordion
│   ├── whitelist-application.tsx # Discord-authenticated whitelist application
│   └── ui/                   # Reusable UI primitives (Buttons, Cards, Inputs, etc.)
├── hooks/                    # Custom React hooks
├── lib/                      # Helper libraries & Discord integrations
│   ├── discord.ts            # Client-side Discord OAuth hook
│   ├── discordBot.ts         # Discord bot event handler
│   └── utils.ts              # Styling & class merging utilities
├── pages/api/                # Backend API routes
│   └── submit-form.ts        # Whitelist submission & Discord bot webhook handler
├── public/                   # Static assets & images
│   └── images/               # Official IntrovertIRL RP logo & emblems
├── styles/                   # Custom stylesheet overrides
├── .env.example              # Environment variables template
├── contributing.md           # Contribution guidelines & coding standards
├── LICENSE                   # Commercial & Attribution License by Sayan
└── README.md                 # Project documentation
```

---

## ⚡ Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (`v18.17.0` or higher recommended)
- [npm](https://www.npmjs.com/) (or [pnpm](https://pnpm.io/))
- [Git](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/nexcoder-dev/Starline-Roleplay-Website.git
cd Starline-Roleplay-Website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory (based on `.env.example`):

```bash
cp .env.example .env.local
```

Fill in your Discord application credentials:
```env
# Discord OAuth2 Client ID (For Web Whitelist Login)
NEXT_PUBLIC_DISCORD_CLIENT_ID="your_discord_client_id_here"
CLIENT_ID="your_discord_client_id_here"

# Discord Bot Token (For staff application processing)
DISCORD_BOT_TOKEN="your_discord_bot_token_here"

# Discord Channel ID (For staff application embeds & buttons)
LOG_CHANNEL_ID="your_staff_logs_channel_id_here"

# Discord Webhook URL (Optional, for decision logs)
WEBHOOKURL="your_webhook_url_here"
```

### 4. Start Development Server

```bash
npm run dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

### 5. Build for Production

To compile and optimize the production bundle:

```bash
npm run build
```

### 6. Lint Code

```bash
npm run lint
```

---

## ⚙️ Customization Guide

### Updating Server Information & Branding
- **Logo & Emblem**: Place your updated logo at [`public/images/logo.png`](public/images/logo.png).
- **Hero Title & Slogan**: Edit [`components/hero-section.tsx`](components/hero-section.tsx).
- **Navigation & Brand Name**: Edit [`app/page.tsx`](app/page.tsx) and [`components/footer.tsx`](components/footer.tsx).

### Server Connection Details
- Update the Server IP and direct connect URL in [`components/join-server.tsx`](components/join-server.tsx).

### Configuring Discord Whitelist Form
- Modify application questions, minimum character requirements, and scenarios in [`components/whitelist-application.tsx`](components/whitelist-application.tsx).

### Adding or Modifying Server Rules
- Adjust rule categories, titles, and explanations inside [`components/server-rules.tsx`](components/server-rules.tsx).

### Updating Sponsors, Partners & Media Streamers
- Update testimonials, sponsor banners, and streamer social links in [`components/community.tsx`](components/community.tsx).

---

## 🤝 Contributing

Contributions to the **IntrovertIRL Roleplay** website are welcome! Please review our [**Contributing Guidelines**](contributing.md) and [`LICENSE`](LICENSE) before submitting code.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Sayan Backend Developer**

For commercial licensing inquiries: [gsa339402@gmail.com](mailto:gsa339402@gmail.com)

---

## 📜 License

Distributed under the **Commercial and Attribution License**. See [`LICENSE`](LICENSE) for more information.

---

<p align="center">
  Crafted with ❤️ for the <strong>IntrovertIRL Roleplay</strong> Community
</p>
