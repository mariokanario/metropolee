import './globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

// import './style_theme.css';

// import { Inter } from 'next/font/google'
import BootstrapClient from '@/components/layout/BootstrapClient'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Metropolee',
  description: 'Grupo de inversión inmobiliario',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body suppressHydrationWarning={true}>
        {children}
        <BootstrapClient />
        </body>
    </html>
  )
}
