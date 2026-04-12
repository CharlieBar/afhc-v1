import type { Metadata } from "next";
import "./globals.css";
import { syne, ibmPlexSans, ibmPlexMono } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.allfamilyhealthcare.com"),
  title: {
    default: "All Family Health Care | Medicare-Certified Home Health in Chicago",
    template: "%s | All Family Health Care",
  },
  description:
    "Medicare-certified, Joint Commission-accredited home health care in Chicago. Skilled nursing, therapy, and personal care for 30+ communities. Call (773) 775-2588.",
  keywords: [
    "home health care Chicago",
    "Medicare home health Chicago",
    "skilled nursing Chicago",
    "home health aide Chicago",
    "Joint Commission home health",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "All Family Health Care",
    images: [
      {
        url: "/images/og/home.jpg",
        width: 1200,
        height: 630,
        alt: "All Family Health Care - Expert Home Health in Chicago",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <LocalBusinessSchema />
      </body>
    </html>
  );
}
