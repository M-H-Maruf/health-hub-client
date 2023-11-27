import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import JoinNowButton from './../shared/JoinNowButton';

const Card = ({ camp }) => {
  return (
    <div data-aos="fade-up" className="relative z-20 h-full">
      <Tilt tiltEnable={false} className="h-full" scale={1.03}>
        <div
          data-aos="flip-left"
          className="bg-black/50 h-full space-y-4 rounded-lg"
        >
          <img
            src={camp?.image}
            alt={camp?.campName}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <div className="p-6 pt-0 text-white/70">
            {" "}
            <div className="flex mb-4 justify-between items-center">
              <span className="text-accent text-sm border rounded-lg p-1 px-2 border-accent">
                {camp?.targetAudience}
              </span>
              <span className="text-white">
                {new Date(camp.scheduledDateTime).toLocaleDateString("en-GB")}
              </span>
              <span className="text-white">${camp.campFees}</span>
            </div>
            <h2 className="text-2xl min-h-16 text-white/95 uppercase font-extrabold min-h-[64px] mb-2">
              {camp?.campName}
            </h2>
            <p className="mb-1">{`Venue: ${camp?.venueLocation}`}</p>
            <p className="mb-1">{`Services Provided : ${camp?.specializedServices}`}</p>
            <p className="mb-4">{`Professionals : ${camp?.healthcareProfessionals}`}</p>
            <p className="mb-4 text-lg">{`Participants : ${camp?.peopleAttended}`}</p>
            <div className="mt-4">
              <Link to={`/camp-details/${camp._id}`}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-4 py-2 bg-accent text-white/95 rounded mr-2"
                >
                  Details
                </motion.button>
              </Link>
              <JoinNowButton camp_Id={camp._id}></JoinNowButton>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default Card;
