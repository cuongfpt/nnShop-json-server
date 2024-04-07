import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ImageSwiper = ({ mainImage, additionalImages } : any) => {

  const images = [mainImage, ...additionalImages];

  return (
    
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt="" width={500} height={500} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;
