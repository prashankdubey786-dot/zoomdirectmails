import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Zoom direct mail - Professional Direct Marketing Solutions | Dallas, TX",
    template: "%s | Zoom direct mail - Direct Marketing Experts",
  },
  description:
    "Leading direct marketing company in Dallas, TX. Expert direct mail, EDDM, and postcard printing services. Get higher response rates and ROI with our targeted campaigns. Free consultation available.",
  keywords: [
    "direct mail marketing",
    "EDDM services",
    "postcard printing",
    "Dallas marketing",
    "direct marketing company",
    "mail campaigns",
    "targeted advertising",
    "local marketing",
    "print marketing",
    "business promotion",
  ],
  authors: [{ name: "Zoom direct mail" }],
  creator: "Zoom direct mail",
  publisher: "Zoom direct mail",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cherrytech.co"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zoom direct mail - Professional Direct Marketing Solutions",
    description:
      "Leading direct marketing company in Dallas, TX. Expert direct mail, EDDM, and postcard printing services with proven results.",
    url: "https://cherrytech.co",
    siteName: "Zoom direct mail",
    images: [
      {
        url: "/images/zoom-logo.png",
        width: 1200,
        height: 630,
        alt: "Zoom direct mail - Direct Marketing Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoom direct mail - Professional Direct Marketing Solutions",
    description:
      "Leading direct marketing company in Dallas, TX. Expert direct mail, EDDM, and postcard printing services.",
    images: ["/images/zoom-logo.png"],
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
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Zoom direct mail",
              alternateName: "Zoom Direct Mail",
              url: "https://cherrytech.co",
              logo: "https://cherrytech.co/images/zoom-logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "customer service",
                areaServed: "US",
                availableLanguage: "en",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "800 Secretary Dr, Suite D",
                addressLocality: "Arlington",
                addressRegion: "TX",
                postalCode: "76015",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 32.7357,
                longitude: -97.1081,
              },
              sameAs: ["https://www.facebook.com/cherrytech", "https://www.linkedin.com/company/cherrytech"],
              service: [
                {
                  "@type": "Service",
                  name: "Direct Mail Marketing",
                  description: "Targeted direct mail campaigns with high response rates",
                },
                {
                  "@type": "Service",
                  name: "EDDM Services",
                  description: "Every Door Direct Mail services for local businesses",
                },
                {
                  "@type": "Service",
                  name: "Postcard Printing",
                  description: "Professional postcard printing with premium materials",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
