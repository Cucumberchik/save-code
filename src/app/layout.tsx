import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Todo Save Code",
  description: "Save your code here in a safe place and don't worry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" sizes="32x32" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
