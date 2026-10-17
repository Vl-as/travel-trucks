'use client';

import Link from 'next/link';
import css from './Navbar.module.css';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';
import { MouseEvent } from 'react';

const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  { label: 'Catalog', href: '/catalog' },
];

function Navbar() {
  const path = usePathname();
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        {navItems.map(({ label, href }) => (
          <li key={href}>
            <Link
              className={clsx(css.navLink, href === path && css.active)}
              href={href}
              onClick={(e: MouseEvent<HTMLAnchorElement>) =>
                href === path && e.preventDefault()
              }
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
