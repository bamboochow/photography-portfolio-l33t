'use client'

import { usePathname } from 'next/navigation';
import clsx from 'clsx';

function NavItem({ href, children }) {
  let isActive = usePathname() === href;

  return (
    <li>
      <a
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-gray-500 dark:text-gray-400'
            : 'hover:text-gray-500 dark:hover:text-gray-400',
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-gray-500/0 via-gray-500/40 to-gray-500/0 dark:from-gray-400/0 dark:via-gray-400/40 dark:to-gray-400/0" />
        )}
      </a>
    </li>
  );
}

function Navigation() {
  return (
    <nav className="rounded-full bg-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
      <ul className="flex space-x-4 px-3 text-sm font-medium text-zinc-800 dark:text-zinc-200">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/timeline">Timeline</NavItem>
      </ul>
    </nav>
  );
}

export function Header() {
  return (
    <header className="relative z-50 flex justify-center items-center p-4 w-full">
      <Navigation />
    </header>
  );
}
