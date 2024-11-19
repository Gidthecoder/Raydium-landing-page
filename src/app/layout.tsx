import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Raydium",
  description: "A platform for trading Solana tokens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        {children}
      </body>
    </html>
  );
}
