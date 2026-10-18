'use client';

import css from './Header.module.css';
import Container from '../Container/Container';
import Navbar from './Navbar/Navbar';
import Logo from './Logo/Logo';
import { Suspense, useEffect, useState } from 'react';
import clsx from 'clsx';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={clsx(css.header, scrolled && css.scrolled)}>
      <Container className={css.container}>
        <Logo />
        <Suspense>
          <Navbar className={css.nav} />
        </Suspense>
      </Container>
    </header>
  );
}

export default Header;
