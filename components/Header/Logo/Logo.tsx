import Icon from '@/components/Icon/Icon';
import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <Link href="/">
      <Icon name="logo" width={136} height={16} />
    </Link>
  );
}

export default Logo;
