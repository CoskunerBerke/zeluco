import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Zelu Co. | Premium El Yapımı Seramik ve Soya Mumu Stüdyosu",
  description: "Zelu Co., eviniz için modern Japandi tasarım anlayışıyla el yapımı seramikler, doğal soya mumları ve özel tasarım atölyeleri sunan premium bir tasarım stüdyosudur.",
  keywords: ["seramik", "soya mumu", "tasarım stüdyosu", "el yapımı", "hediyelik", "atölye", "seramik atölyesi", "candle", "ceramics", "japandi", "dekorasyon"],
  authors: [{ name: "Zelu Co." }],
  openGraph: {
    title: "Zelu Co. | Premium El Yapımı Seramik ve Soya Mumu Stüdyosu",
    description: "Zelu Co., eviniz için modern Japandi tasarım anlayışıyla el yapımı seramikler, doğal soya mumları ve özel tasarım atölyeleri sunan premium bir tasarım stüdyosudur.",
    type: "website",
    locale: "tr_TR",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF8F5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${playfair.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
