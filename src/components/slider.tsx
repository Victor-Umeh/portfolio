import { StyledCanvas } from "./styled/About.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, EffectFade } from "swiper/modules";
import "swiper/swiper-bundle.css";
import hiking from "/images/hiker.jpg";
import soccer from "/images/soccer.jpg";
import coding from "/images/coding.jpg";
import learn from "/images/learn.jpg";

const Hobbies = [
  {
    text: "Hiking",
    img: hiking,
  },
  {
    text: "Coding",
    img: coding,
  },
  {
    text: "Soccer",
    img: soccer,
  },
  {
    text: "Learning",
    img: learn,
  },
];

const Slider = () => {
  return (
    <StyledCanvas width="30%" dis="none">
      <Swiper
        modules={[A11y, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        grabCursor={true}
        effect={"fade"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{
          height: "100%",
        }}
      >
        {Hobbies.map((hobby) => (
          <SwiperSlide className="swiper" key={hobby.text}>
            <span>{hobby.text}</span>
            <img
              src={hobby.img}
              alt={hobby.text}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledCanvas>
  );
};

export default Slider;
