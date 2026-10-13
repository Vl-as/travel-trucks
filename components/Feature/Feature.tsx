import { ReactNode } from 'react';
import css from './Feature.module.css';

interface FeatureProps {
  children: ReactNode;
}

function Feature({ children }: FeatureProps) {
  return <li className={css.feature}>{children}</li>;
}

export default Feature;
