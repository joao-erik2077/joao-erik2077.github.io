import type { Metadata } from "next";
import "./globals.scss";
export const metadata: Metadata = {
  title: "joao-erik2077",
  description: "João Erik's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-w-[100vw] min-h-[100vh] flex">{children}</body>
    </html>
  );
}
