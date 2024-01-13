export const metadata = {
  title: "Jin's vantage",
  description: "Jin's personal website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white dark:bg-black">
      <body >{children}</body>
    </html>
  )
}
