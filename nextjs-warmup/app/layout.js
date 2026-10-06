import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Next.js Warm-up',
  description: 'Next.js homework',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link> | <Link href="/about">About</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}