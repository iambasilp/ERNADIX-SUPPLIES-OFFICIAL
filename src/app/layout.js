import Script from 'next/script'

import Preloader from '@/components/Preloader'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'ERNADIX SUPPLIES | Courier & BOPP Bags',
  description: 'We supply Courier Bags and BOPP Bags in different sizes and colors.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap" rel="stylesheet" />
        <link href="/css/bootstrap.min.css" rel="stylesheet" media="screen" />
        <link href="/css/slicknav.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link href="/css/all.min.css" rel="stylesheet" media="screen" />
        <link href="/css/animate.css" rel="stylesheet" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/mousecursor.css" />
        <link href="/css/custom.css" rel="stylesheet" media="screen" />
      </head>
      <body suppressHydrationWarning>
        <Header />
        
        {children}
        
        <Footer />
        
        <Script src="/js/bundle.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
