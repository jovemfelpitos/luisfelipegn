import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SiteProvider } from "@/lib/site-context";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Luis Felipe | Sistemas, Dados & Automação",
  description: "Portfólio e currículo digital de Luis Felipe, Analista de Sistemas focado em dados e automação.",
  metadataBase: new URL("https://luisfelipe.dev"),
  openGraph: {
    title: "Luis Felipe | Sistemas, Dados & Automação",
    description: "Portfólio e currículo digital de Luis Felipe.",
    type: "website",
    locale: "pt_BR"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <SiteProvider>
          <Header />
          <main className="mx-auto min-h-[calc(100vh-152px)] w-full max-w-6xl px-5 pb-20 pt-28 sm:px-8">
            {children}
          </main>
          <Footer />
        </SiteProvider>
      </body>
    </html>
  );
}
