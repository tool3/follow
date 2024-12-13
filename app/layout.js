

export const metadata = {
  title: {
    default: 'Followers by Tal Hayut',
    template: '%s | talhayut'
  },
  metadataBase: new URL('https://followd.vercel.app'),
  description: `follow`,
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png'
    }
  ],
  twitter: {
    card: 'summary_large_image',
    title: 'followers',
    creator: 'Tal Hayut',
    siteId: 'followers'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
