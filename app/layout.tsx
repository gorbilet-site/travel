import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const socialImageUrl = `${siteUrl.replace(/\/$/, "")}/og.png`;

const drukWide = localFont({
  src: "./fonts/druk-wide.ttf",
  variable: "--font-druk-wide",
  display: "swap",
  weight: "500",
  style: "normal",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Горбилет Travel — идеи для путешествий",
  description:
    "Города, экскурсии и идеи для поездок от команды Горбилет Travel.",
  icons: {
    icon: `${basePath}/images/deer.jpg`,
    shortcut: `${basePath}/images/deer.jpg`,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Горбилет Travel",
    title: "Куда махнём? — Горбилет Travel",
    description: "Города, экскурсии и идеи для вашего следующего путешествия.",
    images: [
      {
        url: socialImageUrl,
        width: 1734,
        height: 906,
        alt: "Горбилет Travel — куда махнём?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Куда махнём? — Горбилет Travel",
    description: "Города, экскурсии и идеи для вашего следующего путешествия.",
    images: [socialImageUrl],
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
