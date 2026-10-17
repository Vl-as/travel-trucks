import clsx from 'clsx';
import Icon from '@/components/Icon/Icon';
import css from './Toast.module.css';

interface ToastProps {
  type: 'success' | 'error';
  message: string;
}

function Toast({ type, message }: ToastProps) {
  return (
    <div className={clsx(css.toast, css[type])}>
      <Icon
        className={css.icon}
        name={type === 'success' ? 'checkmark' : 'error'}
        width={28}
        height={28}
      />

      <p className={css.message}>{message}</p>
    </div>
  );
}

export default Toast;
