import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learn and fun",
  description: "Generated AI Course in a well structured way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      {/* <GoogleOneTap /> */}
      <html lang="en">
        <body className={`${outfit.className} antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
