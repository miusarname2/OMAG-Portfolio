import { Inter } from "next/font/google";
import { Chivo } from 'next/font/google'
import { Rubik } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";

const chivo = Chivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-chivo',
})
const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
})

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oscar M Alvarez G - Portafolio & Proyectos",
  description: "Portafolio profesional de Oscar M Alvarez G. Descubre mis proyectos, habilidades y experiencia en desarrollo web.",
  keywords: "desarrollo web, programador, portafolio, proyectos, React, Next.js",
  author: "Oscar M Alvarez G",
  creator: "Oscar M Alvarez G",
  publisher: "Oscar M Alvarez G",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0",
  openGraph: {
    type: "website",
    url: "https://portfolio.omag.cloud",
    title: "Oscar M Alvarez G - Portafolio & Proyectos",
    description: "Portafolio profesional de Oscar M Alvarez G. Descubre mis proyectos, habilidades y experiencia en desarrollo web.",
    siteName: "Portfolio Oscar M Alvarez G",
    images: [
      {
        url: "https://portfolio.omag.cloud/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oscar M Alvarez G - Portafolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oscar M Alvarez G - Portafolio & Proyectos",
    description: "Portafolio profesional de Oscar M Alvarez G. Descubre mis proyectos, habilidades y experiencia en desarrollo web.",
    creator: "@OscarMAlarezDev",
  },
  alternates: {
    canonical: "https://portfolio.omag.cloud",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`${chivo.variable} ${rubik.variable} bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            {children}
            <SpeedInsights />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
