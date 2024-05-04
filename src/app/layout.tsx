import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/index.css";
import Navbar from "@/components/layouts/bars/Navbar";
import Nav from "@/components/layouts/bars/Nav";
import { AppWrapper } from "@/context";
import Sidebar from "@/components/layouts/bars/Sidbear";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Token Launch - Creon Pass NFT & Investment Opportunities",
  description:
    "Unlock the future of AI blockchain projects with Creon Pass NFT. Gain early access to AI tools, enjoy revenue share, and invest in pre-launch AI innovations. Join the Creon community for a profitable journey in AI and crypto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWrapper>
          <Nav />
          <Sidebar />
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
