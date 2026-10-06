import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import InitialSplashLoader from "@/components/layout/InitialSplashLoader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | SJMSM's College, Khapar",
    default: "SJMSM's Arts & Commerce College | Khapar",
  },
  description: "SJMSM's Arts & Commerce Sr. & Jr. College is a premier institution in Khapar, Nandurbar, Maharashtra, providing accessible, quality higher education to rural and tribal students.",
  keywords: ["SJMSM", "Arts College", "Commerce College", "Khapar", "Nandurbar", "Education", "NAAC Accredited", "Maharashtra"],
  authors: [{ name: "SJMSM's College" }],
  openGraph: {
    title: "SJMSM's Arts & Commerce College",
    description: "Empowering students through accessible, quality higher education in Khapar.",
    url: "https://sjmsmcollege.edu.in",
    siteName: "SJMSM's Arts & Commerce College",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-gray-800">
        <InitialSplashLoader />
        <SmoothScroll>
          <div className="relative z-10 bg-background flex flex-col min-h-screen shadow-[0_20px_50px_rgba(0,0,0,0.5)] mb-0 lg:mb-[60vh]">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
          </div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
