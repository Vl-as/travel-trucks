import { formatValue } from '@/utils/formatters';
import css from './RadioButton.module.css';

interface RadioButtonProps {
  option: string;
  name: string;
  value: string | null;
  onChange: (value: string) => void;
}

function RadioButton({ option, name, value, onChange }: RadioButtonProps) {
  const title = formatValue(option);
  const isChecked = value === option;

  const handleClick = () => {
    if (isChecked) {
      onChange('');
    } else {
      onChange(option);
    }
  };

  return (
    <li>
      <label className={css.label}>
        <input
          className={css.input}
          type="radio"
          name={name}
          value={option}
          checked={isChecked}
          onClick={handleClick}
          onChange={() => {}}
        />
        {title}
      </label>
    </li>
  );
}

export default RadioButton;
