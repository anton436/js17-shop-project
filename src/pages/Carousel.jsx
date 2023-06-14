import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles/CarouselStyles.css";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";

export default function App({ product }) {
  const navigate = useNavigate();
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        {product.map((item) => (
          <SwiperSlide key={item.id}>
            <div>
              <img
                style={{ height: "300px", width: "150ps" }}
                src={item.pic1}
                alt={item.title}
                onClick={() => navigate(`/details/${item.id}`)}
              />
              <div>
                <h3>{item.title}</h3>
                <h3>{item.price}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
