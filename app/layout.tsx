import '../styles/globals.css'
import Footer from './Footer'
import Header from './Header';
export const metadata = {
  title: 'Bilal Ahmed | Portfolio',
  description: 'Website developer | DevOps | Generated by Next.js',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Shantell+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"></link>
      <body style={{ fontFamily: 'Shantell Sans, cursiv' }}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}