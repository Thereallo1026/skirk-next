import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Skirk Countdown",
  description: "Skirk Countdown",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
			<html lang="en">
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<body className={`${GeistSans.className} antialiased`}>{children}</body>
			</html>
		);
}
