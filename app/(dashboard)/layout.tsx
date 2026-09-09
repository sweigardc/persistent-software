'use client';

import Link from 'next/link';
import { useState, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Home, LogOut } from 'lucide-react';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { signOut } from '@/app/(login)/actions';
import { usePathname, useRouter } from 'next/navigation';
import { User } from '@/lib/db/schema';
import useSWR from 'swr';
import { cn } from '@/lib/utils';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const navItems = [
  { label: 'Mobile', href: '/mobile' },
  { label: 'Migrations', href: '/migrations' },
  { label: 'tokenlog', href: 'https://tokenlog.persistentsoftware.com', external: true },
  { label: 'About', href: '/about' }
];

// Nav items are the label voice: mono, uppercase, tracked. The active item is
// the one place the accent appears in the header.
function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {navItems.map((item) => {
        const active = !item.external && pathname === item.href;
        const className = cn(
          'ps-label border-b-2 pb-1 transition-colors duration-[120ms]',
          active
            ? 'border-signal-500 text-graphite-900'
            : 'border-transparent text-graphite-500 hover:text-graphite-900'
        );

        // tokenlog lives on its own subdomain, so it leaves the app rather than
        // routing through the Next.js client router.
        if (item.external) {
          return (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
            >
              {item.label}
            </a>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? 'page' : undefined}
            className={className}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}

function UserMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: user } = useSWR<User>('/api/user', fetcher);
  const router = useRouter();

  async function handleSignOut() {
    await signOut();
    router.refresh();
    router.push('/');
  }

  if (!user) {
    return null;
  }

  return (
    <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <DropdownMenuTrigger>
        <Avatar className="size-9 cursor-pointer">
          <AvatarImage alt={user.name || ''} />
          <AvatarFallback>
            {user.email
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="flex flex-col gap-1">
        <DropdownMenuItem className="cursor-pointer">
          <Link href="/dashboard" className="flex w-full items-center">
            <Home className="mr-2 size-4" strokeWidth={1.75} />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <form action={handleSignOut} className="w-full">
          <button type="submit" className="flex w-full">
            <DropdownMenuItem className="w-full flex-1 cursor-pointer">
              <LogOut className="mr-2 size-4" strokeWidth={1.75} />
              <span>Sign out</span>
            </DropdownMenuItem>
          </button>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function Header() {
  return (
    <header className="border-b border-rule bg-paper">
      <div className="mx-auto flex max-w-page items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/ps-logo.png" width={24} height={24} alt="" />
          <span className="text-base font-extrabold tracking-[-0.02em] text-graphite-900">
            Persistent Software
          </span>
        </Link>
        <div className="flex items-center gap-5 sm:gap-7">
          <nav className="hidden items-center gap-5 sm:flex sm:gap-7">
            <NavLinks />
          </nav>
          <Button asChild size="sm">
            <a
              href="https://calendly.com/chris-persistentsoftware"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a call
            </a>
          </Button>
          <Suspense fallback={null}>
            <UserMenu />
          </Suspense>
        </div>
      </div>
      <nav className="flex items-center gap-6 border-t border-rule px-6 py-3 sm:hidden">
        <NavLinks />
      </nav>
    </header>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex min-h-screen flex-col">
      <Header />
      {children}
    </section>
  );
}
