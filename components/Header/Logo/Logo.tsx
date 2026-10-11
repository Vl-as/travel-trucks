import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        alt="Company logo"
        width="136"
        height="16"
        loading="eager"
      />
    </Link>
  );
}

export default Logo;
