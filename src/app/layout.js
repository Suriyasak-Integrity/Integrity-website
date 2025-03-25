import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
const fontLoader  = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'Integrity Logistics Thailand - Beyond the Average Freight Forwarder',
  description: 'Professional freight forwarding and logistics solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* ✅ ครอบทุกอย่างด้วย ThemeProvider */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
