import type { Metadata } from "next";
import "./globals.scss";
import Providers from "@/providers/Providers";
import Header from "@/components/header/header";

export const metadata: Metadata = {
  title: "Save-Code",
  description: "Save-Code - это безопасное и удобное хранилище для вашего кода. savecode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      </head>
      
      <>
        <Providers>
          <Header />
          {children}
        </Providers>
      </>
    </html>
  );
}
