import { Helmet } from "react-helmet-async";

import { useEffect } from "react";
import Aos from "aos";
import { Link } from "react-router-dom";
import Particle from "../components/utils/Particle";

const ErrorPage = () => {
    useEffect(() => {
        Aos.init({
          easing: "ease-out-quart",
          delay: 0,
          duration: 750,
        });
      }, []);
  return (
    <div>
      <Helmet>
        <title>Health Hub | Error</title>
      </Helmet>
      <div className="z-30 relative min-h-screen flex flex-col justify-center items-center"><h1
        data-aos="fade-down"
        className="text-6xl text-black/80 font-black font-orbitron mb-20 text-center"
      >
        404
      </h1>

      <div data-aos="zoom-in" className="bg-black/50 m-10 md:p-24 p-14 rounded shadow flex-col flex justify-center items-center">
        <h2 className="text-4xl font-teko text-white/70 font-bold mb-2 text-left">PAGE NOT FOUND</h2>
        <Link to="/" className="font-bold btn btn-outline btn-accent">GO HOME</Link>
      </div>
      </div>
      <Particle></Particle>
    </div>
  );
};

export default ErrorPage;
