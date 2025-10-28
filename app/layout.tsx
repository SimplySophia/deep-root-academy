import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "./components/section/WhatsappButton";


export const metadata: Metadata = {
  title: "Deep Root Academy",
  description: "Reboot 2026 bootCamp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden"
      >
        <WhatsAppButton />
        {children}
      </body>
    </html>
  );
}
