import Container from '@/components/Container/Container';
import css from './NotFound.module.css';
import NotFound from '@/components/NotFound/NotFound';
import LinkButton from '@/components/LinkButton/LinkButton';

function NotFoundPage() {
  return (
    <main className={css.main}>
      <Container className={css.container}>
        <NotFound
          imgClass={css.image}
          titleClass={css.title}
          title="Page not found"
        >
          <div className={css.links}>
            <LinkButton className={css.linkBtn} href="/">
              Go to home page
            </LinkButton>
            <LinkButton
              className={css.linkBtn}
              variant="secondary"
              href="/catalog"
            >
              Explore campers
            </LinkButton>
          </div>
        </NotFound>
      </Container>
    </main>
  );
}

export default NotFoundPage;
