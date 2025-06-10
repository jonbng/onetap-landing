import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://onetap.jonathanb.dk"),
  title: {
    default: "OneTap - A button for your brain",
    template: "%s | OneTap",
  },
  description:
    "Tap. Speak. It remembers everything, surfacing what matters when it matters. No typing. No forms. Just speak and go.",
  keywords: [
    "productivity",
    "voice notes",
    "memory",
    "diary",
    "todo",
    "calendar",
    "voice recording",
    "personal assistant",
  ],
  authors: [{ name: "OneTap Team" }],
  creator: "OneTap",
  publisher: "OneTap",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://onetap.jonathanb.dk",
    siteName: "OneTap",
    title: "OneTap - A button for your brain",
    description:
      "Tap. Speak. It remembers everything, surfacing what matters when it matters. No typing. No forms. Just speak and go.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OneTap - A button for your brain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OneTap - A button for your brain",
    description:
      "Tap. Speak. It remembers everything, surfacing what matters when it matters.",
    images: ["/og-image.png"],
    creator: "@tryonetap",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
