import { AppProvider } from '@/logic/AppStateContext'
import './globals.css'


export const metadata = {
  title: 'Videos',
  description: 'Listing all the Next.js Tutorials',
}

export default function RootLayout({
  children
}: {
  children: any
}) {
  return (
    <html lang="en">
      <body>
      <AppProvider>
        {children}
        <div id="modal-root" />
      </AppProvider>
        </body>
    </html>
  )
}
