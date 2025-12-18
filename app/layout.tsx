import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cafemilling.vercel.app"),
  title: {
    default: "카페 밀링 | Cafe Milling",
    template: "%s | 카페 밀링",
  },
  description:
    "카페 밀링에서 즐기는 프리미엄 브런치와 신선한 커피. 서울 브런치 카페, 카페 밀링.",
  applicationName: "카페 밀링",
  keywords: [
    "카페 밀링",
    "Cafe Milling",
    "서울 브런치 카페",
    "브런치",
    "카페",
    "커피",
  ],
  authors: [{ name: "카페 밀링" }],
  icons: {
    icon: "/logo/cafemilling_logo.svg",
    shortcut: "/logo/cafemilling_logo.svg",
    apple: "/logo/cafemilling_logo.svg",
  },
  openGraph: {
    title: "카페 밀링 — 브런치와 커피가 가장 맛있는 시간",
    description:
      "매일 아침 직접 준비하는 브런치와 신선한 원두를 만나보세요.",
    url: "https://cafemilling.vercel.app",
    siteName: "카페 밀링",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/logo/카페밀링.jpeg",
        width: 1200,
        height: 630,
        alt: "카페 밀링",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "카페 밀링",
    description:
      "브런치와 커피가 가장 맛있는 시간, 카페 밀링에서 만나보세요.",
    images: ["/logo/카페밀링.jpeg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "카페 밀링",
    image: "https://cafemilling.vercel.app/logo/카페밀링.jpeg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "화서문로71번길 14, 1층",
      addressLocality: "수원시",
      addressRegion: "경기도",
      addressCountry: "KR",
    },
    servesCuisine: ["브런치", "커피"],
    priceRange: "₩₩",
  };

  return (
    <html lang="ko" className="bg-cream">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-pretendard antialiased text-brown">{children}</body>
    </html>
  );
}
