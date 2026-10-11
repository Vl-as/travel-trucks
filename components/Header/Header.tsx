import css from './Header.module.css';
import Container from '../Container/Container';
import Navbar from './Navbar/Navbar';
import Logo from './Logo/Logo';

function Header() {
  return (
    <header className={css.header}>
      <Container className={css.container}>
        <Logo />
        <Navbar />
      </Container>
    </header>
  );
}

export default Header;
