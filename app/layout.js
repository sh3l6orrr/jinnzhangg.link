export const metadata = {
  title: "Jin's vantage",
  description: "Jin's personal website",
}
import { Analytics } from '@vercel/analytics/react';
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white dark:bg-black">
      <body >
        {children}
      <Analytics />
      </body>
    </html>
  )
}
