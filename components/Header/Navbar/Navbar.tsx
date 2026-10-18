'use client';

import Link from 'next/link';
import css from './Navbar.module.css';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';

const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  { label: 'Catalog', href: '/catalog' },
];

interface NavbarProps {
  className?: string;
}

function Navbar({ className }: NavbarProps) {
  const path = usePathname();
  return (
    <nav className={clsx(css.nav, className)}>
      <ul className={css.navList}>
        {navItems.map(({ label, href }) => {
          const isActive = href === '/' ? path === '/' : path.startsWith(href);
          return (
            <li key={href}>
              <Link
                className={clsx(css.navLink, isActive && css.active)}
                href={href}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
