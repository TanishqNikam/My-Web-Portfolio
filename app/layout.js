import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BootLoader from "@/components/BootLoader";
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
  title: "Tanishq Nikam | SOC Analyst Portfolio",
  description: "Cybersecurity portfolio, SOC dashboard, and technical reports.",
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
      </body>
    </html>
  );
}
