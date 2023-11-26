import { Link, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Particle from "../../components/utils/Particle";
import Section from "../../components/utils/Section";

const CampDetails = () => {
  const camp = useLoaderData();
  return (
    <div className="bg-black/40 pt-10">
      <Particle></Particle>
      <Section
        heading={"Camp Details"}
        subHeading={"Explore In-Depth Information on Our Medical Camps"}
      >
        <div
          data-aos="fade-up"
          className="hero bg-black/50 mt-10 max-w-4xl mx-auto rounded-lg px-4 md:px-8 lg:px-16 py-4 md:py-8 lg:py-16 "
        >
          <Tilt tiltEnable={false} className="h-full" scale={1.03}>
            <div
              data-aos="flip-left"
              className="bg-black/50 h-full space-y-4 rounded-lg"
            >
              <img
                src={camp?.image}
                alt={camp?.campName}
                className="w-full  object-cover rounded-t-lg"
              />
              <div className="p-6 pt-0 text-white/70">
                {" "}
                <div className="flex mb-4 justify-between items-center">
                  <span className="text-accent text-sm border rounded-lg p-1 px-2 border-accent">
                    {camp?.targetAudience}
                  </span>
                  <span className="text-white">
                    {new Date(camp.scheduledDateTime).toLocaleDateString(
                      "en-GB"
                    )}
                  </span>
                  <span className="text-white">${camp.campFees}</span>
                </div>
                <h2 className="text-2xl min-h-16 text-white/95 uppercase font-extrabold min-h-[64px] mb-2">
                  {camp?.campName}
                </h2>
                <p className="mb-1">{`Organizer: ${camp?.organizerName}`}</p>
                <p className="mb-1">{`Venue: ${camp?.venueLocation}`}</p>
                <p className="mb-1">{`Services Provided : ${camp?.specializedServices}`}</p>
                <p className="mb-4">{`Professionals : ${camp?.healthcareProfessionals}`}</p>
                <p className="mb-4">{`Details : ${camp?.comprehensiveDescription}`}</p>
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
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-accent hover:text-white/90 hover:bg-accent px-4 py-2 border-2 border-accent rounded"
                  >
                    Join Camp
                  </motion.button>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </Section>
    </div>
  );
};

export default CampDetails;
