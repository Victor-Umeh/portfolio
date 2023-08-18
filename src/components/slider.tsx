import { StyledCanvas } from "./styled/About.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

import hiking from "../assets/images/hiker.jpg";
import soccer from "../assets/images/soccer.jpg";
import coding from "../assets/images/coding.jpg";
import learn from "../assets/images/learn.jpg";

const Image = {
  hiking: hiking,
  soccer: soccer,
  coding: coding,
  learn: learn,
} as const;

const Hobbies = [
  {
    text: "Hiking",
    img: Image.hiking,
  },
  {
    text: "Coding",
    img: Image.coding,
  },
  {
    text: "Soccer",
    img: Image.soccer,
  },
  {
    text: "Learning",
    img: Image.learn,
  },
];

const Slides = () => {
  return (
    <>
      {Hobbies.map((hobby) => (
        <SwiperSlide className="swiper" key={hobby.text}>
          <span>{hobby.text}</span>
          {/* {console.log(hobby.img)} */}

          <img
            src={hobby.img}
            alt={hobby.text}
            style={{ height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
      ))}
    </>
  );
};

const Slider = () => {
  return (
    <StyledCanvas width="32%">
      <Swiper
        modules={[A11y, Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{
          height: "100%",
          border: "1px solid black",
        }}
      >
        <Slides />
      </Swiper>
    </StyledCanvas>
  );
};

export default Slider;

{
  /* 
      <div className="article hobbies__img">
        <p>Hobbies</p>
      </div> 
      
      <StyledCanvas width="100%" dis="none">
      </StyledCanvas>

      return {Hobbies.map((hobby) => (
    {
    <SwiperSlide className="swiper" key={hobby.text}>
      <span>{hobby.text}</span>
      <img
        src={hobby.img}
        alt={hobby.text}
        style={{ height: "100%", objectFit: "cover" }}
      />
    </SwiperSlide>
  }))
}
};
*/
}
