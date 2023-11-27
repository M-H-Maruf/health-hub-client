import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../../api/users";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Profile = () => {
  const { user: currentUser } = useAuth();
  const { data: user = {} } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(currentUser.email),
  });
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };
  return (
    <div className="w-full md:w-96">
      <div data-aos="fade-up" className=" h-full">
        <Tilt tiltEnable={false} className="w-full" scale={1.03}>
          <div
            data-aos="flip-left"
            className="bg-black/50 h-full space-y-4 rounded-lg"
          >
            <img
              src={
                imageError
                  ? "https://i.ibb.co/MVzMp2j/alternative-image.jpg"
                  : user?.photoURL
              }
              alt="User Profile"
              onError={handleImageError}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-6 pt-0 text-white/70">
              {" "}
              <h2 className="text-2xl min-h-16 text-white/95 uppercase font-extrabold min-h-[64px] mb-2">
                {user?.displayName}
              </h2>
              <p className="mb-1">{`Email: ${user?.email}`}</p>
              <p className="mb-1">{`Role : ${user?.role}`}</p>
              <div className="mt-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-4 py-2 bg-accent text-white/95 rounded mr-2"
                >
                  Update
                </motion.button>
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Profile;
