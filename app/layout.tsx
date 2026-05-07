import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const allegro = localFont({
  src: "./fonts/Allegro.otf",
  weight: "400",
  variable: "--font-allegro",
});

const dzeragir = localFont({
  src: "./fonts/Dzeragir.otf",
  weight: "400",
  variable: "--font-dzeragir",
});

const wien = localFont({
  src: "./fonts/Wien.otf",
  weight: "400",
  variable: "--font-wien",
});

export const metadata: Metadata = {
  title: "Gevorg & Mane | Wedding Invitation",
  description: "Join us in celebrating the wedding of Gevorg and Mane.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${allegro.variable} ${dzeragir.variable} ${wien.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
