import './globals.css'

export const metadata = {
  title: 'Smart Medical Expense Manager',
  description: 'Turning confusing hospital bills into smart financial decisions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}