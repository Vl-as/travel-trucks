import css from './CatalogPage.module.css';
import Catalog from '../../components/Catalog/Catalog';
import Container from './../../components/Container/Container';
import { fetchFilters } from './../../services/filters';

async function CatalogPage() {
  const filters = await fetchFilters();

  return (
    <main className={css.page}>
      <Container>
        <Catalog filters={filters} />
      </Container>
    </main>
  );
}
export default CatalogPage;
