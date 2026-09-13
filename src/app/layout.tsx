import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Suiball | A hardware wallet built on Sui',
  description: 'Built from the ground up for Sui. A hardware wallet designed for life on the move.',
  icons: { icon: '/assets/favicon.png' },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-wf-page="68b492f933caf28bf888bab8" data-wf-site="68b492f833caf28bf888ba3d" className="w-mod-js wf-active">
      <body className="body">{children}</body>
    </html>
  );
}
