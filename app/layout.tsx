import type { Metadata } from "next";
import "./globals.css";
import "./story-flow.css";

export const metadata: Metadata = {
  title: "麻静莹｜产品营销 / 品牌营销作品集",
  description: "把产品价值变成用户选择。聚焦智能硬件、新品 GTM、消费者洞察与经营判断的产品营销案例作品集。",
  openGraph: {
    title: "麻静莹｜产品营销 / 品牌营销作品集",
    description: "把产品价值变成用户选择。四个案例，展示从消费者洞察到新品 GTM 与经营判断的完整思考链路。",
    images: [{ url: "/og-v5.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "麻静莹｜产品营销 / 品牌营销作品集",
    description: "把产品价值变成用户选择。",
    images: ["/og-v5.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
