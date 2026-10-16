import css from './CamperDetails.module.css';
import Feature from '../Feature/Feature';
import { formatMeasurement, formatValue } from '@/utils/formatters';
import { Camper } from '@/types/camper';

interface CamperDetailsProps {
  camper: Camper;
}

function CamperDetails({
  camper: {
    transmission,
    engine,
    amenities,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  },
}: CamperDetailsProps) {
  const features = [transmission, engine, ...amenities];
  const specifications = [
    { label: 'Form', value: form },
    { label: 'Length', value: length },
    { label: 'Width', value: width },
    { label: 'Height', value: height },
    { label: 'Tank', value: tank },
    { label: 'Consumption', value: consumption },
  ];

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
      <ul className={css.specificationsList}>
        {specifications.map(({ label, value }) => (
          <li key={label} className={css.specification}>
            <span>{label}</span>
            <span className={css.specificationValue}>
              {formatMeasurement(value)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CamperDetails;
