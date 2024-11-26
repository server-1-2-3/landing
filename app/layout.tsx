import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ThemeProvider } from "@/components/providers/theme-provider";

import "./globals.css";
import { siteConfig } from "@/config/site";
import { RTLDirectionWrapper } from "@/components/wrappers/RTLWrapper";

const { title, description } = siteConfig;

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" suppressHydrationWarning>
      <head />
      <body
        dir="rtl"
        className={cn(
          "min-h-screen bg-background  antialiased",
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <RTLDirectionWrapper>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />

              <div className="flex-1">{children}</div>
              <Footer />
              <ScrollToTop />
            </div>
          </RTLDirectionWrapper>
        </ThemeProvider>

      </body>
    </html>
  );
}
