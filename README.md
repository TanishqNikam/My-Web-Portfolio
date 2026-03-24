# 🛡️ TN-SOC: Cybersecurity Portfolio & SOC Dashboard

**Live Deployment:** [tanishqnikam.vercel.app](https://tanishqnikam.vercel.app)
Welcome to the **TN-SOC Portfolio**, a highly interactive, terminal-inspired web application designed specifically to showcase my skills in Threat Hunting, Incident Response, and Detection Engineering. 

This repository diverges from standard developer portfolios by framing the user experience as a Security Operations Center (SOC) dashboard. It combines modern web performance with immersive "hacker-movie" aesthetics and practical demonstrations of security knowledge.

---

## 🚀 Key Architectural Features

- **Interactive Terminal Environment:** A custom-built `/terminal` route that parses and resolves CLI commands natively in the browser (`help`, `whoami`, `ls`, `cat`, etc.).
- **Markdown-Backed Documentation:** Uses localized markdown parsing (`lib/content.js`) to render deep-dive Investigation Logs and Active Security Projects, allowing for rapid update workflows.
- **Immersive Tech Aesthetic:** Pure CSS glassmorphism, CRT scanline overlays, global dark-mode constraints, and neon-accents built directly on top of modern Tailwind architecture.
- **3D Spline Integration:** A customized interactive CyberGlobe rendering on the homepage mapping simulated incoming threats.
- **Fully Responsive & Optimized:** Built with Next.js 14 App Router, ensuring lightning-fast static generation, Vercel Analytics telemetry, and buttery-smooth Framer Motion transitions.

---

## 💻 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (React, App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) & CSS keyframes
- **Icons:** [Lucide React](https://lucide.dev/)
- **3D Rendering:** [@splinetool/react-spline](https://spline.design/)
- **Deployment & Analytics:** [Vercel](https://vercel.com/)

---

## 🛠️ Local Development

To run the TN-SOC interface locally on your machine:

1. **Clone the repository**
   ```bash
   git clone https://github.com/TanishqNikam/My-Web-Portfolio.git
   cd My-Web-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Access the portal**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏴‍☠️ The Easter Eggs (Hidden Payloads)

This portfolio is heavily gamified. I’ve layered **12 highly interactive Easter eggs** throughout the source code to reward curious technical recruiters and engineering managers who take the time to explore. 

Here is the complete manual of hidden features and how to trigger them:

### Global Triggers
1. **The Matrix Mode:** Type the classic Konami Code (`↑ ↑ ↓ ↓ ← → ← → B A`) anywhere on the site. The DOM will violently glitch and drop into a full-screen, green falling-character Matrix simulation.
2. **Self-Destruct Sequence:** Type `rm -rf /` anywhere on the site (or in the terminal). A chaotic animation will systematically delete DOM elements one by one before crashing into a "Kernel Panic" screen.
3. **C2 Backdoor Dashboard:** Press `Alt + C` (or `Option + C` on Mac). The website will flip 3D to reveal a hidden Command & Control radar dashboard with live streaming mock logs.
4. **Zero-Day Exploit:** Type `zeroday`. Your mouse cursor turns into a red crosshair. Clicking any element on the website physically "shatters" it and removes it from the DOM.

### Navbar & Header
5. **Brute Force Resume:** Hold `Shift` while clicking the `Resume` download button. This triggers a modal simulating a terminal running `Hydra` against a password hash before successfully "cracking" the encryption and downloading the PDF.
6. **The 3-Tap Glitch:** Rapidly double-click or triple-tap the Shield Logo (`TN`) in the top left. The website will experience a violent 1-second CSS tear and RGB color-split.
7. **Security Policy Violation (Light Mode):** Click the `Moon` icon next to the Resume button. The switch sparks, physically breaks off the UI, and throws a strict red toast notification stating: *"TN-SOC strictly enforces Dark Mode. Light mode is a security risk."* The button locks out for 5 seconds.

### The Terminal (`/terminal`)
8. **Sudo Hire Engagement:** Type `sudo hire` in the terminal. It authenticates a "priority engagement protocol", drops a burst of confetti over the screen, and automatically downloads the resume.
9. **Port Scanner CTF:** Type `hack` in the terminal. You enter a targeted mini-game where you have 5 attempts to guess a random 3-digit open port to breach the firewall, receiving "higher/lower" hints along the way. Winning prints an ASCII trophy.

### Discoverable UI Traps
10. **The Honeypot Button:** Located on the homepage, there is a very faint `[DEACTIVATE_DEFENSES]` button. Clicking it triggers a massive blaring red Security Alert modal locking down the page.
11. **The Phishing Trap:** On the `/contact` page, there is a hidden, nearly invisible link that says `[CLICK_HERE_FOR_FREE_ADMIN_ACCESS]`. Clicking it spawns a simulated Phishing Awareness training modal warning the user not to click suspicious links.
12. **The Ransomware Archive:** Scroll to the very bottom of the `/projects` page. Click the tiny `[ COMPRESS_CONFIDENTIAL_ARCHIVE.exe ]` text. A full-screen lockout occurs with a spinning skull, fake encryption progress bar, and a tongue-in-cheek ransom demand.

---
*Developed and maintained by Tanishq Nikam.*
