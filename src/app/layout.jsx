import Header from "@/components/Header/index.jsx";
import "./globals.css";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background">{children}</body>
    </html>
  );
}
