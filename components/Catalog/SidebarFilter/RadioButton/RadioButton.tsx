import { formatValue } from '@/utils/formatters';
import css from './RadioButton.module.css';

interface RadioButtonProps {
  option: string;
  name: string;
}

function RadioButton({ option, name }: RadioButtonProps) {
  const title = formatValue(option);

  return (
    <li>
      <label className={css.label}>
        <input className={css.input} type="radio" name={name} value={option} />
        {title}
      </label>
    </li>
  );
}

export default RadioButton;
