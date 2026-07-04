import type { Metadata } from 'next';

import './globals.css';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'РасчетРемонт',
  description: 'Расчет Ремонтов',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body suppressHydrationWarning>
        <main id='main' className={styles.main}>
          {children}
        </main>
      </body>
    </html>
  );
}
