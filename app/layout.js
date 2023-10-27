import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Магазин натуральной кожи в Минске | Кожевенной химии | Фурнитуры',
  description: 'Магазин "ОбувьКомплект" специализуруется на оптовой и розничной продаже широкого ассортимента высококачественной натуральной кожи различного назначения, кожевенной химии и фурнитуры. Все для пошива кожгалантереи и обуви.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru" data-theme="corporate">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
