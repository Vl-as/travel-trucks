import Image from 'next/image';
import css from './NotFound.module.css';

function NotFound() {
  return (
    <div className={css.container}>
      <Image src="/not-found.png" alt="No campers found" sizes="488" />
      <h2>No campers found</h2>
      <p>
        We couldn`t find any campers that match your filters.Try adjusting your
        search or clearing some filters.
      </p>
    </div>
  );
}
export default NotFound;
