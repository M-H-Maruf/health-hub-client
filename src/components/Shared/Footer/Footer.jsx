import { BsTwitter, BsYoutube, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div data-aos="zoom-in" className="z-40 relative">
      <footer className="leading-5 font-semibold grid grid-cols-1 lg:grid-cols-3 gap-10 justify-around items-center p-10 bg-[#0c0c0c] text-white/70">
        <aside className="flex flex-col gap-5 items-center text-center justify-center">
          <Link to="/">
            <img
              className="h-24 cursor-pointer w-24 bg-blog-primary rounded-full"
              src="/logo.png"
              alt="logo"
            />
          </Link>
          <p>
            HEALTH HUB
            <br />
            Discover a world of well-being with Health Hub.
          </p>
        </aside>
        <nav className="justify-center items-center flex flex-col text-center">
        <header className="mb-4 font-bold opacity-50 uppercase">
            links
          </header>
          <div className="text-accent font-semibold opacity-80 flex flex-col gap-5">
            <Link to="/">
              <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                HOME
              </motion.p>
            </Link>
            <Link to="/available-camps">
              <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                AVAILABLE CAMPS
              </motion.p>
            </Link>
            <Link to="/contact">
              <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                CONTACT US
              </motion.p>
            </Link>
            <Link to="/dashboard">
              <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                DASHBOARD
              </motion.p>
            </Link>
          </div>
        </nav>
        <nav className="text-center">
          <header className="mb-4 font-bold opacity-50 uppercase">
            Social
          </header>
          <div className="flex justify-center items-center mb-2 gap-4">
            <a>
              <BsTwitter className="text-2xl cursor-pointer"></BsTwitter>
            </a>
            <a>
              <BsYoutube className="text-2xl cursor-pointer"></BsYoutube>
            </a>
            <a>
              <BsFacebook className="text-2xl cursor-pointer"></BsFacebook>
            </a>
          </div>
          <p>Copyright © 2023 - All right reserved</p>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
