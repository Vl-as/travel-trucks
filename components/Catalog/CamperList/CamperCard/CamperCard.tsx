import Image from 'next/image';
import css from './CamperCard.module.css';
import Icon from '@/components/Icon/Icon';
import LinkButton from '@/components/LinkButton/LinkButton';
import { Camper } from '@/types/camper';
import Feature from '@/components/Feature/Feature';
import { formatValue } from '@/utils/formatters';
import CamperMeta from '@/components/CamperMeta/CamperMeta';

interface CamperCardProps {
  camper: Camper;
  index: number;
}

function CamperCard({ camper, index }: CamperCardProps) {
  const features = [
    { id: 'engine', icon: camper.engine, value: formatValue(camper.engine) },
    {
      id: 'transmission',
      icon: camper.transmission,
      value: formatValue(camper.transmission),
    },
    { id: 'form', icon: camper.form, value: formatValue(camper.form) },
  ];

  return (
    <li className={css.card}>
      <div className={css.imageBox}>
        <Image
          className={css.image}
          src={camper.coverImage}
          alt={camper.name}
          fill
          sizes="219px"
          priority={index === 0}
          loading={index === 0 ? 'eager' : 'lazy'}
        />
      </div>
      <div className={css.content}>
        <div className={css.contentHeader}>
          <h3 className={css.title}>{camper.name}</h3>
          <p className={css.price}>€{camper.price}</p>
        </div>
        <CamperMeta {...camper} className={css.meta} />
        <p className={css.description} title={camper.description}>
          {camper.description}
        </p>
        <ul className={css.features}>
          {features.map(({ icon, value, id }) => (
            <Feature key={id}>
              <Icon
                className={css.icon}
                aria-hidden="true"
                width={20}
                height={20}
                name={icon}
              />
              {value}
            </Feature>
          ))}
        </ul>

        <LinkButton
          className={css.link}
          href={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener"
        >
          Show more
        </LinkButton>
      </div>
    </li>
  );
}

export default CamperCard;
