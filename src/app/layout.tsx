import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ohkuuldood",
  description: "home of the wtfs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // warning about html tag having a style attribute?... suppress it
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
