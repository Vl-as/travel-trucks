import css from './RadioButton.module.css';

interface RadioButtonProps {
  option: string;
  name: string;
}

function RadioButton({ option, name }: RadioButtonProps) {
  const title = option
    .split('_')
    .map(item => item[0].toUpperCase() + item.slice(1))
    .join(' ');

  return (
    <li>
      <label className={css.label} key={option}>
        <input className={css.input} type="radio" name={name} value={option} />
        {title}
      </label>
    </li>
  );
}

export default RadioButton;
