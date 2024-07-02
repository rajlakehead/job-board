import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import '@radix-ui/themes/styles.css';



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JobBoard",
  description: "JobBoard Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header />
          {children}
        <footer className="container py-8 text-gray-500">
          Job Board &copy; 2024 - All rights reserved
        </footer>
        </body>
    </html>
  );
}
