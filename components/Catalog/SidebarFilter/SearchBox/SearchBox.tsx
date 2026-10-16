import Icon from '@/components/Icon/Icon';
import css from './SearchBox.module.css';

interface SearchBoxProps {
  className?: string;
  value: string;
  onChange: (value: string) => void;
}

function SearchBox({ className, value, onChange }: SearchBoxProps) {
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
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        <Icon className={css.icon} name="map" aria-hidden="true" />
      </div>
    </div>
  );
}

export default SearchBox;
