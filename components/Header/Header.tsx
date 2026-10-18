import css from './Header.module.css';
import Container from '../Container/Container';
import Navbar from './Navbar/Navbar';
import Logo from './Logo/Logo';
import { Suspense } from 'react';

function Header() {
  return (
    <header className={css.header}>
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
