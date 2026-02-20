import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Acacus Brand Book",
  description: "A single intelligent platform for movement at scale. Planning. Operations. Safety. Learning. Unified.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
