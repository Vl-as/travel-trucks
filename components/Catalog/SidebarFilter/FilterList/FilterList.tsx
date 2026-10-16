import clsx from 'clsx';
import RadioButton from '../RadioButton/RadioButton';
import css from './FilterList.module.css';

interface FilterListProps {
  title: string;
  filters: string[];
  name: string;
  className?: string;
  value: string | null;
  onChange: (value: string) => void;
}

function FilterList({
  title,
  filters,
  name,
  className,
  value,
  onChange,
}: FilterListProps) {
  return (
    <fieldset className={clsx(css.wrapper, className)}>
      <legend className={css.title}>{title}</legend>
      <ul className={css.list}>
        {filters.map(option => (
          <RadioButton
            key={option}
            option={option}
            name={name}
            value={value}
            onChange={onChange}
          />
        ))}
      </ul>
    </fieldset>
  );
}

export default FilterList;
