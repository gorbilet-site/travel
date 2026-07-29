import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const drukWide = localFont({
  src: "./fonts/druk-wide.ttf",
  variable: "--font-druk-wide",
  display: "swap",
  weight: "500",
  style: "normal",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Travel",
  description:
    "Города, экскурсии и идеи для поездок от команды Горбилет Travel.",
  icons: {
    icon: `${basePath}/images/hero-gnome.webp`,
    shortcut: `${basePath}/images/hero-gnome.webp`,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Travel",
    title: "Travel",
    description: "Города, экскурсии и идеи для вашего следующего путешествия.",
  },
  twitter: {
    card: "summary",
    title: "Travel",
    description: "Города, экскурсии и идеи для вашего следующего путешествия.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={drukWide.variable}>{children}</body>
    </html>
  );
}
