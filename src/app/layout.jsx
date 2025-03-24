import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// ✅ แก้ตรงนี้ให้ใช้ const
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Integrity Logistics Thailand - Beyond the Average Freight Forwarder',
  description: 'Professional freight forwarding and logistics solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

