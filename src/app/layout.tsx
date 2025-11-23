import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/next'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

// Site URL - Update this to your actual domain
const siteUrl = 'https://shreenarayan.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Shreenarayan Jaiswal | Full Stack Developer | Portfolio',
    template: '%s | Shreenarayan Jaiswal'
  },
  description: 'Shreenarayan Jaiswal - Full Stack Developer from India. Explore my portfolio showcasing web development projects, skills in React, Next.js, Node.js, and more. Hire Shreenarayan for your next project.',
  keywords: [
    'Shreenarayan Jaiswal',
    'Shreenarayan',
    'Shree Narayan Jaiswal',
    'Full Stack Developer',
    'Web Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'Frontend Developer',
    'Backend Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'Software Engineer',
    'Portfolio',
    'India Developer',
    'Freelance Developer'
  ],
  authors: [{ name: 'Shreenarayan Jaiswal', url: siteUrl }],
  creator: 'Shreenarayan Jaiswal',
  publisher: 'Shreenarayan Jaiswal',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Shreenarayan Jaiswal Portfolio',
    title: 'Shreenarayan Jaiswal | Full Stack Developer',
    description: 'Shreenarayan Jaiswal - Full Stack Developer from India specializing in React, Next.js, Node.js, and modern web technologies. View my projects and skills.',
    images: [
      {
        url: `${siteUrl}/images/me2.png`,
        width: 1024,
        height: 1024,
        alt: 'Shreenarayan Jaiswal - Full Stack Developer',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shreenarayan Jaiswal | Full Stack Developer',
    description: 'Full Stack Developer from India. Explore my portfolio showcasing web development projects and skills.',
    images: [`${siteUrl}/images/me2.png`],
    creator: '@shreenarayan',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
  category: 'technology',
}

// JSON-LD Structured Data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Shreenarayan Jaiswal Portfolio',
      description: 'Portfolio website of Shreenarayan Jaiswal - Full Stack Developer',
      publisher: {
        '@id': `${siteUrl}/#person`
      },
      inLanguage: 'en-US'
    },
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: 'Shreenarayan Jaiswal | Full Stack Developer | Portfolio',
      isPartOf: {
        '@id': `${siteUrl}/#website`
      },
      about: {
        '@id': `${siteUrl}/#person`
      },
      description: 'Portfolio of Shreenarayan Jaiswal showcasing web development projects and skills',
      inLanguage: 'en-US'
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Shreenarayan Jaiswal',
      alternateName: ['Shreenarayan', 'Shree Narayan Jaiswal', 'Shreenarayan J'],
      description: 'Full Stack Developer from India specializing in React, Next.js, Node.js, and modern web technologies',
      url: siteUrl,
      image: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/me2.png`,
        width: 1024,
        height: 1024
      },
      jobTitle: 'Full Stack Developer',
      worksFor: {
        '@type': 'Organization',
        name: 'Freelance'
      },
      knowsAbout: [
        'Web Development',
        'React',
        'Next.js',
        'Node.js',
        'TypeScript',
        'JavaScript',
        'Full Stack Development',
        'Frontend Development',
        'Backend Development',
        'MongoDB',
        'PostgreSQL',
        'REST APIs',
        'GraphQL'
      ],
      sameAs: [
        'https://www.linkedin.com/in/shreenarayan-jaiswal',
        'https://github.com/shreenarayan123'
      ],
      nationality: {
        '@type': 'Country',
        name: 'India'
      }
    },
    {
      '@type': 'ProfilePage',
      '@id': `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: 'Shreenarayan Jaiswal - Portfolio',
      mainEntity: {
        '@id': `${siteUrl}/#person`
      }
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Cal+Sans&family=Instrument+Serif:ital@0;1&family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main>{children}</main>
          <Analytics/>
        </ThemeProvider>
      </body>
    </html>
  )
}
