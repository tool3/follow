

export const metadata = {
  title: {
    default: 'Follow by Tal Hayut',
    template: '%s | talhayut'
  },
  metadataBase: new URL('https://follow.vercel.app'),
  description: `follow`,
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png'
    }
  ],
  twitter: {
    card: 'summary_large_image',
    title: 'follow',
    creator: 'Tal Hayut',
    siteId: 'follow'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
