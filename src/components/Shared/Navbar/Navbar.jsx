import { useState } from "react";
import Hamburger from "hamburger-react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user, logOut} = useAuth();
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        if (!result) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Sign Out Succeeded",
            showConfirmButton: false,
            timer: 2500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Oops! Something went wrong\n Sign out failed!",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      })
      .catch();
  };

  // active route styling
  const activeLink =
    "text-accent font-bold underline decoration-2 underline-offset-4";

  // navbar routes
  const navLinks = (
    <div className="text-accent font-semibold opacity-80 flex flex-col lg:flex-row gap-5">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeLink : "text-white")}
      >
        <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          HOME
        </motion.p>
      </NavLink>
      <NavLink
        to="/available-camps"
        className={({ isActive }) => (isActive ? activeLink : "text-white")}
      >
        <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          AVAILABLE CAMPS
        </motion.p>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? activeLink : "text-white")}
      >
        <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          CONTACT US
        </motion.p>
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? activeLink : "text-white")}
      >
        <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          DASHBOARD
        </motion.p>
      </NavLink>
    </div>
  );

  // menu animation
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <div data-aos="fade-down" className="navbar bg-black/90 px-4 h-20 fixed z-50">
      <div className="navbar-start">
        <details className="dropdown duration-200 lg:hidden">
          <summary
            className="m-1 btn btn-outline btn-accent p-0 border-2 group"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            <Hamburger toggled={isOpen} size={25} color="#00d7c0" />
          </summary>
          <motion.ul
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            className="p-4 -ml-4 my-2 h-screen overflow-hidden shadow-2xl menu dropdown-content z-[1] bg-black/90 w-72"
          >
            {navLinks}
          </motion.ul>
        </details>
        <div className="flex justify-center items-center px-4 gap-2">
          <Link
            to="/"
            className="btn btn-ghost text-white/90 opacity-80 normal-case text-xl font-orbitron tracking-widest px-2"
          >
            <img
              className="h-10 rounded-full w-10 bg-accent"
              src="/logo.png"
              alt="logo"
            />
            <p className=" hidden md:flex">
              <span className="text-accent">HEALTH </span>HUB
            </p>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end flex gap-2 lg:gap-3">
      {user ? (
            <div className="flex gap-4">
              
              <div className="dropdown dropdown-end hover:dropdown-open">
                <label tabIndex={0} className="">
                <img className="h-12 rounded-full"
        src={imageError ? 'https://i.ibb.co/MVzMp2j/alternative-image.jpg' : user?.photoURL}
        alt="User Profile"
        onError={handleImageError}
      />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] p-5 menu w-64 relative"
                >
                  <div className="flex justify-center items-center p-2 font-bold w-fit rounded bg-black/50 shadow-2xl absolute right-0">
                    <div data-aos="flip-up" className="rounded-lg h-full z-10">
                      <div className="">
                        <h3 className="text-lg font-teko text-white font-bold mb-2">
                          {user.displayName}
                        </h3>
                        <p className="text-white/70 font-bold">{user.email}</p>
                        <div className="divider"></div>
                        <Link onClick={handleSignOut} className=" group" to="/">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn btn-outline border-2 btn-accent group-hover:text-white"
                >
                  SIGN OUT
                </motion.div>
              </Link>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          ) : (<div className="">
            <Link className=" group" to="/login">
          <div className="btn btn-outline border-2 btn-accent group-hover:text-white">
            LOG IN
          </div>
        </Link>
        <Link className="group" to="/register">
          <div className="btn btn-outline border-2 btn-accent group-hover:text-white">
            REGISTER
          </div>
        </Link></div>
          )}
        
      </div>
    </div>
  );
};
export default Navbar;
