import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useState } from "react";
import slide1 from "../../assets/slider-1.webp";
import slide2 from "../../assets/slider-1.webp";
import slide3 from "../../assets/slider-1.webp";

const slides = [
  {
    id: 1,
    title: "Nurture Your Plants with Ease",
    description:
      "Track watering, fertilizing, and care schedules — all in one beautiful, easy-to-use dashboard.",
    image: slide1,
    bg_color: "#F8EEE6",
  },
  {
    id: 2,
    title: "Personalized Plant Care, Anytime, Anywhere",
    description:
      "Manage your indoor and outdoor plants securely with reminders and health monitoring on any device.",
    image: slide2,
    bg_color: "#DCF8EC",
  },
  {
    id: 3,
    title: "Grow a Thriving Garden at Home",
    description:
      "Add your plants, log care tasks, and get helpful feedback to keep your green friends healthy and happy.",
    image: slide3,
    bg_color: "#d8e9d6",
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
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-[70vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div
              className="grid grid-cols-1 md:grid-cols-2 h-full items-center px-8 md:px-16"
              style={{ backgroundColor: `${slide.bg_color}` }}
            >
              <div
                className={`text-gray-700 transition-all duration-700 ${
                  activeIndex === index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-50 opacity-0"
                }`}
              >
                <h1 className="text-6xl font-semibold leading-17 mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg w-10/12">{slide.description}</p>
              </div>

              <div className="flex justify-center">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full max-w-42 md:max-w-72 object-cover rounded-xl "
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
