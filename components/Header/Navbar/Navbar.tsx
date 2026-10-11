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
