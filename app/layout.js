import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BootLoader from "@/components/BootLoader";
import EasterEggs from "@/components/EasterEggs";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  title: "Tanishq Nikam | SOC Analyst",
  description: "Cybersecurity portfolio, SOC dashboard, and technical reports by Tanishq Nikam.",
  keywords: ["SOC Analyst", "Cybersecurity", "Information Security", "Portfolio", "Tanishq Nikam", "Threat Hunting", "Incident Response"],
  openGraph: {
    title: "Tanishq Nikam | SOC Analyst",
    description: "Cybersecurity portfolio, SOC dashboard, and technical reports.",
    siteName: "Tanishq Nikam Portfolio",
    images: [
      {
        url: "/avatar.png",
        width: 800,
        height: 800,
        alt: "Tanishq Nikam",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanishq Nikam | SOC Analyst",
    description: "Cybersecurity portfolio, SOC dashboard, and technical reports.",
    images: ["/avatar.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <BootLoader />
        <Navbar />
        <main className="flex-grow flex flex-col relative z-0">
          {children}
        </main>
        <Footer />
        <Analytics />
        <EasterEggs />
      </body>
    </html>
  );
}
