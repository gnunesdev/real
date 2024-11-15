import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { Toaster } from "~/components/ui/toaster";
import { ThemeProvider } from "~/components/ui/theme-provider";
import { Header } from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
