import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function OfferHeadline() {
  return (
    <div
      style={{
        backgroundColor: "#c6e4e2",
        color: "#333",
        fontSize: "10px",
        padding: "10px",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 99999999,
        textTransform: "uppercase",
      }}
    >
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        <SwiperSlide>
          <div style={{ textAlign: "center" }}>
            Rooted in the heart of Spain.
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ textAlign: "center" }}>
            We have delivery to whole of Lebanon.
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
