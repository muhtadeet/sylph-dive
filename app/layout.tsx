import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Providers } from "../components/providers";
import { ThemeProvider } from "../components/theme-provider";

const lato = Lato({ subsets: ["latin"], weight: ["400", "900"] });

export const metadata: Metadata = {
  title: "Sylph Dive",
  description: "A Weather App",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
            storageKey="sylph-theme"
          >
            {children}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
