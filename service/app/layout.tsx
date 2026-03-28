import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "INSPIRON VAT Engine | Manager.io SaaS",
  description: "Bangladesh NBR Mushak Automation • 0.1% Error Tolerance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-institutional antialiased">
        {children}
      </body>
    </html>
  );
}
