import { useQuery } from "@tanstack/react-query";
import Section from "./../utils/Section";
import { getAllTestimonials } from "../../api/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  const { data: testimonials = [] } = useQuery({
    queryKey: ["testimonials"],
    queryFn: getAllTestimonials,
  });

  return (
    <div>
      <Section
        heading={"Testimonials"}
        subHeading={"What people say about us"}
        color={true}
      >
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
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial._id}>
              <div data-aos="fade-up" className="bg-black/50 text-center max-w-xl mx-auto p-6 rounded-lg shadow-md">
                <p className="text-white text-3xl font-bold font-teko uppercase mb-2">{testimonial.campName}</p>
                <p className="text-white/70 text-lg mb-4">
                  {testimonial.feedback}
                </p>
                <p className="text-accent/90">
                  {`Rating: ${testimonial.rating}/5`}
                </p>
                <p className="text-white/50">
                  {new Date(testimonial.date).toLocaleDateString()}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>
    </div>
  );
};

export default Testimonials;
