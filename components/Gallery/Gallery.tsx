'use client';

import Image from 'next/image';
import css from './Gallery.module.css';
import type { CamperImage } from '@/types/camper';
import { useState } from 'react';

import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import clsx from 'clsx';

interface GalleryProps {
  gallery: CamperImage[];
  name: string;
  className?: string;
}

function Gallery({ gallery, name, className }: GalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className={clsx(css.gallery, className)}>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={css.previewBox}
      >
        {gallery.map((image, index) => (
          <SwiperSlide key={`original-${image.id}`}>
            <Image
              className={css.image}
              src={image.original}
              alt={`${name} image`}
              fill
              sizes="(max-width: 638px) 100vw, 638px"
              quality={90}
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={32}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={css.swiperList}
      >
        {gallery.map(image => (
          <SwiperSlide key={`thumb-${image.id}`} className={css.imageBox}>
            <Image
              className={css.image}
              src={image.thumb}
              alt={`${name} image`}
              fill
              sizes="135px"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Gallery;
