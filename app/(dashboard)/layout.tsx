'use client';

import Link from 'next/link';
import { useState, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Home, LogOut, Menu, X } from 'lucide-react';
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
  { label: 'AI Search', href: '/ai-search' },
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

// Below the sm breakpoint the nav collapses into a dropdown behind a menu
// button, so the header stays one row however many items it carries.
function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="flex size-9 items-center justify-center rounded-control border border-rule text-graphite-900 transition-colors duration-[120ms] hover:bg-sunk sm:hidden"
      >
        {open ? (
          <X className="size-5" strokeWidth={1.75} />
        ) : (
          <Menu className="size-5" strokeWidth={1.75} />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={10} className="w-56 bg-surface p-1.5">
        {navItems.map((item) => {
          const active = !item.external && pathname === item.href;
          const className = cn(
            'ps-label w-full cursor-pointer border-l-2 px-3 py-3 focus:bg-sunk',
            active
              ? 'border-signal-500 text-graphite-900'
              : 'border-transparent text-graphite-500 focus:text-graphite-900'
          );

          return (
            <DropdownMenuItem key={item.href} asChild className={className}>
              {item.external ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              ) : (
                <Link href={item.href} aria-current={active ? 'page' : undefined}>
                  {item.label}
                </Link>
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
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
      <div className="mx-auto flex max-w-page items-center justify-between gap-3 px-6 py-4 sm:gap-6">
        <Link href="/" className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          <Image src="/ps-logo.png" width={24} height={24} alt="" />
          <span className="whitespace-nowrap text-[15px] font-extrabold tracking-[-0.02em] text-graphite-900 sm:text-base">
            Persistent Software
          </span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-7">
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
          <MobileNav />
          <Suspense fallback={null}>
            <UserMenu />
          </Suspense>
        </div>
      </div>
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
