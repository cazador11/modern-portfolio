import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Home, User, Code, Mail } from 'lucide-react';
import { GlassNavbar } from '../components/ui/glass-navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Modern Portfolio | Your Name',
  description: 'Professional portfolio showcasing my work and skills as a developer',
};

const navItems = [
  { name: 'Home', url: '#', icon: Home },
  { name: 'About', url: '#about', icon: User },
  { name: 'Projects', url: '#projects', icon: Code },
  { name: 'Contact', url: '#contact', icon: Mail }
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 min-h-screen`}>
        <GlassNavbar items={navItems} defaultActive="Home" position="top" />
        {children}
      </body>
    </html>
  );
}