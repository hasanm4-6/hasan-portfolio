import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Muhammad Hasan Munir | Full-Stack Software Engineer",
    template: "%s | Muhammad Hasan Munir",
  },
  description:
    "Muhammad Hasan Munir is a Full-Stack Software Engineer specializing in MERN, Next.js, FastAPI, and scalable web systems. Portfolio, projects, and credentials.",
  keywords: [
    "Muhammad Hasan Munir",
    "Full Stack Software Engineer",
    "MERN Developer",
    "Next.js Developer",
    "FastAPI Developer",
    "Software Engineer Portfolio",
  ],
  openGraph: {
    title: "Muhammad Hasan Munir | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer with real-world experience building production-grade web applications using MERN, Next.js, and FastAPI.",
    url: "https://hasan-munir-portfolio.vercel.app",
    siteName: "Muhammad Hasan Munir Portfolio",
    images: [
      {
        url: "https://hasan-munir-portfolio.vercel.app/og/OG.png",
        // width: 1200,
        // height: 630,
        alt: "Muhammad Hasan Munir – Full-Stack Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hasan Munir | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer specializing in MERN, Next.js, FastAPI, and scalable systems.",
    images: ["https://hasan-munir-portfolio.vercel.app/og/OG.png"],
  },
  // twitter: {
  // card: "summary_large_image",
  // images: [
  //   {
  //     url: "https://bolt.new/static/og_default.png",
  //   },
  // ],
  // },
  authors: [{ name: "Muhammad Hasan Munir" }],
  creator: "Muhammad Hasan Munir",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Hasan Munir",
              url: "https://hasan-munir-portfolio.vercel.app/",
              sameAs: [
                "https://github.com/hasanm4-6",
                "https://www.linkedin.com/in/muhammad-hasan-munir-b9a50b394/",
              ],
              jobTitle: "Full-Stack Software Engineer",
              knowsAbout: [
                "MERN Stack",
                "Next.js",
                "FastAPI",
                "Node.js",
                "MongoDB",
                "System Design",
              ],
            }),
          }}
        />
      <link rel="shortcut icon" href="/icons/favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
