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

const dzeragir = localFont({
  src: "./fonts/Dzeragir.otf",
  weight: "400",
  variable: "--font-dzeragir",
});

const arti = localFont({
  src: "./fonts/Arti.otf",
  weight: "400",
  variable: "--font-arti",
});

const kotayk = localFont({
  src: "./fonts/Kotayk.otf",
  weight: "400",
  variable: "--font-kotayk",
});

const boska = localFont({
  src: "./fonts/Boska.otf",
  weight: "400",
  variable: "--font-boska",
});

const generalSans = localFont({
  src: "./fonts/GeneralSans.otf",
  weight: "400",
  variable: "--font-general-sans",
});

export const metadata: Metadata = {
  title: "Գևորգ և Մանե | Հարսանեկան հրավեր",
  description: "Gevorg and Mane | Wedding Invitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${dzeragir.variable} ${boska.variable} ${arti.variable} ${kotayk.variable} ${generalSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
