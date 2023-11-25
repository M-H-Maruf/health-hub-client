import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const Main = () => {
  const location = useLocation();
  // initializing aos
  useEffect(() => {
    Aos.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);
  return (
    <div>
      <Navbar />
      <motion.div
      className=""
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      >
        <Outlet></Outlet>
      </motion.div>
      <Footer />
        
    </div>
  );
};

export default Main;
