import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useState } from "react";
const slides = [
  {
    id: 1,
    title: "Nurture Your Plants with Ease",
    description:
      "Track watering, fertilizing, and care schedules — all in one beautiful, easy-to-use dashboard.",

    bg_img: "https://i.ibb.co/7JfnHxhZ/banner-bg-1.png",
  },
  {
    id: 2,
    title: "Personalized Plant Care, Anytime, Anywhere",
    description:
      "Manage your indoor and outdoor plants securely with reminders and health monitoring on any device.",
    bg_img: "https://i.ibb.co/TMxfB9mf/banner-bg-2.png",
  },
  {
    id: 3,
    title: "Grow a Thriving Garden at Home",
    description:
      "Add your plants, log care tasks, and get helpful feedback to keep your green friends healthy and happy.",
    bg_img: "https://i.ibb.co/BV9ZksBM/banner-bg-3.png",
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000, disableOnInteraction: true }}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-[50vh] md:h-[30vh] lg:h-[70vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div
              className="grid grid-cols-1 lg:grid-cols-2 h-full items-center px-8 lg:px-16 bg-cover"
              style={{ backgroundImage: `url(${slide.bg_img})` }}
            >
              <div
                className={`text-gray-700 transition-all duration-700 col-span-1 md:w-[80vw] lg:w-full ${
                  activeIndex === index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-50 opacity-0"
                }`}
              >
                <h1 className="text-3xl lg:text-6xl font-semibold lg:leading-17 mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg w-10/12">{slide.description}</p>
              </div>

              <div className=""></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
