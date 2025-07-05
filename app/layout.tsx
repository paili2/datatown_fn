import { Outfit } from "next/font/google";
import "./globals.css";

import { useThemeStore } from "@/shared/hooks/useThemeStore";

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} dark:bg-gray-900`}>{children}</body>
    </html>
  );
}
