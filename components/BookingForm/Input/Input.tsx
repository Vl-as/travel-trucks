import { ErrorMessage, Field, useField } from 'formik';
import css from './Input.module.css';
import clsx from 'clsx';
import Icon from '@/components/Icon/Icon';

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  className?: string;
}

function Input({ type, className, name, placeholder }: InputProps) {
  const [, meta] = useField(name);

  const hasError = Boolean(meta.touched && meta.error);

  return (
    <div className={className}>
      <div className={css.inputWrapper}>
        <Field
          name={name}
          type={type}
          className={clsx(css.input, hasError && css.inputError)}
          placeholder={placeholder}
        />
        <span className={css.errorLabel}>{placeholder}</span>
        <Icon name="error" className={css.errorIcon} />
      </div>
      <ErrorMessage className={css.error} component="span" name={name} />
    </div>
  );
}

export default Input;
