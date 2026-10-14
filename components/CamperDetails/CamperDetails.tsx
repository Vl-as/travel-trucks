import css from './CamperDetails.module.css';
import Feature from '../Feature/Feature';
import { formatValue } from '@/utils/formatters';

interface CamperDetailsProps {
  transmission: string;
  engine: string;
  form: string;
  amenities: string[];
}

function CamperDetails({
  amenities,
  transmission,
  engine,
  form,
}: CamperDetailsProps) {
  const features = [transmission, engine, ...amenities];
  return (
    <div className={css.card}>
      <h2 className={css.title}>Vehicle details</h2>
      <ul className={css.features}>
        {features.map(feature => {
          const name = formatValue(feature);
          return <Feature key={feature}>{name}</Feature>;
        })}
      </ul>
      <div className={css.divider}></div>
    </div>
  );
}

export default CamperDetails;
