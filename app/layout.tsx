import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Staley Social | Kansas City Digital Marketing Agency",
  description:
    "We make KC businesses impossible to ignore. Google Ads, social media, web development, and SEO — handled by one team, built around results. Guaranteed in writing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
