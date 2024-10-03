import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./markdown.css";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Varaamo RAG demo",
  description: "Varaamon ohjeiden AI-kyselyappi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fi">
      <body className={inter.className + " background-color"}>
        <Header/>
        {children}
        </body>
    </html>
  );
}
