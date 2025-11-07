import type { Metadata } from "next";
import { Space_Grotesk } from 'next/font/google';
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Response",
  description: "Humanize Everthing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}