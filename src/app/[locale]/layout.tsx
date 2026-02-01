import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"; // Adjusted path
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Senior Full Stack Dev | High-Performance Web Applications",
  description: "Portfolio of a specialized freelance developer focusing on high-performance, secure, and scalable web applications using Next.js and Cloud Architecture.",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <div style={{ paddingTop: 'var(--header-height)' }}>
            {children}
          </div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
