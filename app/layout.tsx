import { Banner, Footer, Navbar, Provider } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { ProviderContextProvider } from '@/context/providerContext'
import { PostContextProvider } from '@/context/postContext'
import { UserPostContextProvider } from '@/context/userPostsContext'

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
            <PostContextProvider>
              <UserPostContextProvider>
                <Navbar />
                <main>
                  {children}
                </main>
                <Banner />
                <Footer />
              </UserPostContextProvider>
            </PostContextProvider>
          </ProviderContextProvider>
        </Provider>
      </body>
    </html>
  )
}
