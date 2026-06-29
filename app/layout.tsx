import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Staley Social | Kansas City's Full-Stack Marketing Agency",
  description:
    "Google Ads, social media management, web development, SEO, and video production for businesses in Kansas City and beyond.",
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
