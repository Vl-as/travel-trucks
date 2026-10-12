import RadioButton from '../RadioButton/RadioButton';
import css from './FilterList.module.css';

interface FilterListProps {
  title: string;
  filters: string[];
  name: string;
  className?: string;
}

function FilterList({ title, filters, name, className }: FilterListProps) {
  return (
    <div className={className}>
      <h3 className={css.title}>{title}</h3>
      <ul className={css.list}>
        {filters.map(option => (
          <RadioButton key={option} option={option} name={name} />
        ))}
      </ul>
    </div>
  );
}

export default FilterList;
