import { Inter as FontSans } from "next/font/google";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { StoreProvider } from "./StoreProvider";

// components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const quicksand = Quicksand({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Trying Next js",
  description: "i dont know",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <head />
        <body
          className={cn(
            "min-h-screen font-sans antialiased relative",
            fontSans.variable
          )}
        >
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
