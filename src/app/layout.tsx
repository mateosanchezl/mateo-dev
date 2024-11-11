import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "mateo sanchez",
  description: "software engineering student & teaching assistant at manchester met.",
  keywords: "mateo sanchez, software engineer, bolivian, manchester met, portfolio, projects",
  openGraph: {
    title: "mateo sanchez",
    description: "software engineering student & teaching assistant at manchester met.",
    url: "https://mateocodes.com",
    siteName: "mateo sanchez portfolio",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@m1tweets1",
    creator: "@m1tweets1",
    title: "mateo sanchez",
    description: "software engineering student & teaching assistant at manchester met.",
    images: [],
  },
  metadataBase: new URL("https://mateocodes.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
