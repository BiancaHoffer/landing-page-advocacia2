import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Landing Page Advocacia',
  description: 'Desenvolvido por Bianca Macedo Hoffer Madruga.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pb-br">
      <body className={inter.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  )
}
