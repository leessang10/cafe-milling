import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const pretendard = localFont({
  src: "../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cafemilling.vercel.app"),
  title: {
    default: "카페 밀링 | 엄마의 마음을 담은 집밥 브런치",
    template: "%s | 카페 밀링",
  },
  description:
    "엄마의 마음을 담아 정성껏 준비한 집밥 브런치와 신선한 커피. 수원 팔달구 화서문로71번길 14. 매일 11:00-20:00, 월요일 휴무.",
  applicationName: "카페 밀링",
  keywords: [
    "카페 밀링",
    "Cafe Milling",
    "수원 브런치 카페",
    "수원 카페",
    "집밥 브런치",
    "쌈밥 브런치",
    "김치볶음밥",
    "칼국수",
    "프렌치토스트",
    "수원 팔달구 카페",
    "화서문로 카페",
  ],
  authors: [{ name: "카페 밀링" }],
  icons: {
    icon: "/logo/cafemilling_logo.svg",
    shortcut: "/logo/cafemilling_logo.svg",
    apple: "/logo/cafemilling_logo.svg",
  },
  openGraph: {
    title: "카페 밀링 — 엄마의 마음을 담아 차린 한 상",
    description:
      "집밥이 생각나는 브런치와 신선한 원두. 정성스럽게 준비한 쌈밥 브런치, 김치볶음밥, 칼국수, 프렌치토스트를 만나보세요.",
    url: "https://cafemilling.vercel.app",
    siteName: "카페 밀링",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "https://cafemilling.vercel.app/logo/%EC%B9%B4%ED%8E%98%EB%B0%80%EB%A7%81.jpeg",
        width: 1200,
        height: 630,
        alt: "카페 밀링 - 엄마의 마음을 담은 집밥 브런치",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "카페 밀링 — 엄마의 마음을 담은 집밥 브런치",
    description:
      "집밥이 생각나는 브런치와 신선한 커피. 수원 팔달구에서 만나보세요.",
    images: ["https://cafemilling.vercel.app/logo/%EC%B9%B4%ED%8E%98%EB%B0%80%EB%A7%81.jpeg"],
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
    alternateName: "Cafe Milling",
    description: "엄마의 마음을 담아 정성껏 준비한 집밥 브런치와 신선한 커피",
    image: "https://cafemilling.vercel.app/logo/%EC%B9%B4%ED%8E%98%EB%B0%80%EB%A7%81.jpeg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "화서문로71번길 14, 1층",
      addressLocality: "수원시 팔달구",
      addressRegion: "경기도",
      postalCode: "16458",
      addressCountry: "KR",
    },
    servesCuisine: ["한식 브런치", "집밥", "커피"],
    priceRange: "₩₩",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:00",
        closes: "20:00",
      },
    ],
    menu: "https://cafemilling.vercel.app#today-brunch",
  };

  return (
    <html lang="ko" className={`bg-cream ${pretendard.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TX9YL6NVJ3"
          strategy="afterInteractive"
        />
        <Script id="ga-gtag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-TX9YL6NVJ3');`}
        </Script>
      </head>
      <body className="font-pretendard antialiased text-brown">{children}</body>
    </html>
  );
}
