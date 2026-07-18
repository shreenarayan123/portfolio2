import './globals.css'
import { Poppins, Playfair_Display } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/next'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})

export const metadata = {
  title: 'Shreenarayan J. — Full Stack Engineer',
  description:
    'Full-stack engineer with 2 years of experience across product, backend, and DevOps. 27 projects shipped, 100+ repos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning={true}>
      <body
        className={`${poppins.variable} ${playfair.variable} ${poppins.className} min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <main>{children}</main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
