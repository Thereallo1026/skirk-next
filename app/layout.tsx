import type { Metadata } from "next";
import "./globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
	title: "Skirk Countdown",
	description:
		'Yet, his "Foul Legacy" was not originally his. Rather, it was taught to him by that solitary girl who dwelt in the darkest corners of the universe.',
	openGraph: {
		title: "Skirk Countdown | Genshin Impact Countdown",
		type: "website",
		url: "https://skirk.live",
		images: "/meta-image.png",
		description:
			'Yet, his "Foul Legacy" was not originally his. Rather, it was taught to him by that solitary girl who dwelt in the darkest corners of the universe.',
	},
	themeColor: "#715acd",
	twitter: {
		card: "summary_large_image",
	},
	icons: {
		icon: "icon.jpg",
	},
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
