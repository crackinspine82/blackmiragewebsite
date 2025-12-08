'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function ConditionalFooter() {
  const pathname = usePathname();
  
  // Hide footer on connect page
  if (pathname === '/connect') {
    return null;
  }
  
  return <Footer />;
}

