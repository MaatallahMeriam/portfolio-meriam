import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Meriam Maatallah | Full Stack Software Engineer',
  description: 'Junior Full Stack Web Developer specializing in Next.js, React, Angular, Spring Boot, and AI/ML integration. Building scalable web solutions.',
  openGraph: {
    title: 'Meriam Maatallah | Full Stack Software Engineer',
    description: 'Junior Full Stack Web Developer specializing in Next.js, React, Angular, Spring Boot, and AI/ML integration.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meriam Maatallah | Full Stack Software Engineer',
    description: 'Junior Full Stack Web Developer specializing in Next.js, React, Angular, Spring Boot, and AI/ML integration.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
