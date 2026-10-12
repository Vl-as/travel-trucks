import Icon from '@/components/Icon/Icon';
import css from './SearchBox.module.css';

interface SearchBoxProps {
  className?: string;
}

function SearchBox({ className }: SearchBoxProps) {
  return (
    <div className={className}>
      <label className={css.label} htmlFor="location">
        Location
      </label>
      <div className={css.inputWrapper}>
        <input
          type="text"
          className={css.input}
          placeholder="City"
          name="location"
          id="location"
        />
        <Icon className={css.icon} name="map" aria-hidden="true" />
      </div>
    </div>
  );
}

export default SearchBox;
