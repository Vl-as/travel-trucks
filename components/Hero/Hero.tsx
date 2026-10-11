import Container from '../Container/Container';
import LinkButton from '../LinkButton/LinkButton';
import css from './Hero.module.css';

function Hero() {
  return (
    <section className={css.hero}>
      <Container>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.subtitle}>
          You can find everything you want in our catalog
        </p>
        <LinkButton href="/catalog">View Now</LinkButton>
      </Container>
    </section>
  );
}

export default Hero;
