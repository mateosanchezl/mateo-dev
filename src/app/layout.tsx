import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";

const afacad = Afacad({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mateo",
  description: "bolivian software engineering student and lab demonstrator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={afacad.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
