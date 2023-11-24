import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./banner.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Particle from "./../utils/Particle";

const stories = [
  {
    id: 1,
    title: "Life-Saving Surgical Interventions",
    description:
      "Witness the impact of life-saving surgeries at Health Hub. Meet John, a patient whose complex surgery was successfully performed, offering him a new lease on life.",
    imageUrl:
      "https://i.postimg.cc/X7Zp8WGv/pexels-karolina-grabowska-4021779.jpg",
  },
  {
    id: 2,
    title: "Pioneering Medical Research",
    description:
      "Explore groundbreaking research in medical science at Health Hub. Our dedicated team has contributed to advancements that are shaping the future of healthcare.",
    imageUrl: "https://i.postimg.cc/sxL1r68y/pexels-pixabay-356040.jpg",
  },
  {
    id: 3,
    title: "Community-Driven COVID-19 Prevention",
    description:
      "Join our community-driven initiative against COVID-19. We focus on preventing the virus's spread through awareness campaigns, vaccination drives, and support for affected individuals.",
    imageUrl:
      "https://i.postimg.cc/8PqsXYMm/pexels-shvets-production-7176317.jpg",
  },
  {
    id: 4,
    title: "Innovations in Minimally Invasive Surgery",
    description:
      "Discover the latest innovations in minimally invasive surgery at Health Hub. Our expert surgeons use cutting-edge techniques for quicker recovery times and improved patient outcomes.",
    imageUrl: "https://i.postimg.cc/4dJYbhVC/surgery-1807541-1280.jpg",
  },
];

const Banner = () => {
  return (
    <div className="pt-20 h-screen bg-black">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full flex justify-center items-center"
      >
        <Particle></Particle>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-20">
          {stories.map((story, idx) => (
            <SwiperSlide
              key={idx}
              className="h-full flex justify-center items-center"
            >
              <div
                className="banner-slide w-screen"
                style={{ backgroundImage: `url(${story.imageUrl})` }}
              >
                <div className="dark-overlay  z-10">
                  <div className="text-center flex flex-col justify-center items-center gap-10 max-w-xs md:max-w-lg lg:max-w-xl">
                    <h3
                      data-aos="fade-up"
                      className="text-4xl text-accent font-orbitron font-semibold"
                    >
                      {story.title}
                      <span className="animate-blink font-orbitron">_</span>
                    </h3>
                    <p
                      data-aos="fade-up"
                      className="text-white/70 text-lg font-semibold"
                    >
                      {story.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
