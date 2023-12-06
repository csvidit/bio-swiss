import localFont from "next/font/local";
import "./globals.css";
import { Metadata } from "next";

const overusedGrotesk = localFont({
  src: "../fonts/OverusedGrotesk-VF.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Swiss Link In Bio",
  description: "A Snippetopia Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={overusedGrotesk.className}>{children}</body>
    </html>
  );
}
