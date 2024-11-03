import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "mateo sanchez",
  description: "bolivian software engineering student and lab demonstrator at manchester met.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} lg:p-12`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
