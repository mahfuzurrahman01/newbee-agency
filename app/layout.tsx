import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://newbee.studio"),
  title: {
    default: "newBee Studio — Premium Digital Agency",
    template: "%s | newBee Studio",
  },
  description:
    "newBee is a boutique digital agency crafting UI/UX Design, Web & App Development, Automation, Webflow, and Framer experiences that convert.",
  keywords: [
    "digital agency",
    "UI UX design",
    "web development",
    "app development",
    "n8n automation",
    "Webflow agency",
    "Framer agency",
    "Next.js development",
  ],
  authors: [{ name: "newBee Studio" }],
  creator: "newBee Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://newbee.studio",
    siteName: "newBee Studio",
    title: "newBee Studio — Premium Digital Agency",
    description:
      "Boutique digital agency crafting premium digital experiences that convert. UI/UX, Web, App, Automation, Webflow, Framer.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "newBee Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "newBee Studio — Premium Digital Agency",
    description:
      "Boutique digital agency crafting premium digital experiences that convert.",
    images: ["/og-image.png"],
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
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-auto">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-bg text-cream antialiased noise-overlay">
        <SmoothScrollProvider>
          <CustomCursor />
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
