import { Navbar, Provider } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { ProviderContextProvider } from '@/context/providerContext'

export const metadata: Metadata = {
  title: 'Blogga',
  description: 'Welcome to our web development blog, a digital space where we share valuable information, coding experiences, interviews, and insights from the fascinating world of web development! 🌐',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <ProviderContextProvider>
            <Navbar />
            <main>
              {children}
            </main>
          </ProviderContextProvider>
        </Provider>
      </body>
    </html>
  )
}
