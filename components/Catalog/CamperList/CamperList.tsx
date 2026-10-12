import { Camper } from '@/types/camper';
import css from './CamperList.module.css';

interface CamperListProps {
  campers: Camper[];
  totalPages: number;
}

function CamperList({ campers, totalPages }: CamperListProps) {
  return (
    <ul>
      {campers.map(camper => (
        <li key={camper.id}>{camper.name}</li>
      ))}
    </ul>
  );
}

export default CamperList;
