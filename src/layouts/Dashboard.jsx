import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useRole from "../hooks/useRole";
import ParticipantMenu from "../components/dashboard/menu/ParticipantMenu";
import { getUser } from "../api/users";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Dashboard = () => {
  const { logOut, user: currentUser, update } = useAuth();
  
  const { data: user = {} } = useQuery({
    queryKey: ["user",update],
    queryFn: () => getUser(currentUser.email),
  });
  useEffect(() => {
    Aos.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);
  console.log(user);

  const [role] = useRole();
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
  return (
    <div className="relative min-h-screen md:flex">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full flex flex-col justify-between bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className="">
              <Link to="/">
                <img
                  className="h-24 mx-auto cursor-pointer w-24 bg-blog-primary rounded-full"
                  src="/logo.png"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="mx-auto text-center">
              {role === "participant" && <ParticipantMenu />}
            </div>
            <div className="mx-auto">
              <div className="rounded-lg h-full z-10">
                <div className="">
                  <div className="divider"></div>
                  <h3 className="text-lg font-teko text-black font-bold mb-2">
                    {user.displayName}
                  </h3>
                  <p className="text-black/70 font-bold">{user.email}</p>
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
                  <Link className="group" to="/">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="btn ml-4 btn-outline border-2 btn-accent group-hover:text-white"
                    >
                      GO HOME
                    </motion.div>
                  </Link>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
