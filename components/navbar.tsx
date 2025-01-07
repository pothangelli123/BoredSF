'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Cloud } from 'lucide-react';

const routes = [
  { href: '/', label: 'Home' },
  { href: '/contact', label: 'Contact' },
  { href: '/info', label: 'Info' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Cloud className="h-6 w-6 text-[#00A1E0]" />
          <span className="font-bold">BoredSF</span>
        </Link>
        <nav className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-[#00A1E0]',
                pathname === route.href
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button className="bg-[#00A1E0] hover:bg-[#0088BC]">Get Started</Button>
        </div>
      </div>
    </header>
  );
}