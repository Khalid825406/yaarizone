import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yaari Zone',
  description: 'Connect with real friends anytime, anywhere with Yaari Zone.',
  icons: {
    icon: '/favicon.png', // ya '/favicon.png'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}