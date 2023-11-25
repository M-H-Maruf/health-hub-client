import Section from "./../utils/Section";
import { useQuery } from "@tanstack/react-query";
import { getLeastPopularCamps, getPopularCamps } from "../../api/camps";
import PopularCampCard from "./PopularCampCard";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const PopularCamps = () => {
  const [sortAsc, setSortAsc] = useState(false);
  const { data: popularCamps = [] } = useQuery({
    queryKey: ["popular-camps", sortAsc],
    queryFn: async () => {
      return sortAsc ? getLeastPopularCamps() : getPopularCamps();
    } ,
    refetchInterval: 10000,
  });
  const toggleSort = () => {
    setSortAsc(!sortAsc);
  };

  return (
    <div className="bg-black/40 pb-32">
      <Section
        heading={"Popular Camps"}
        subHeading={"Explore impactful health events"}
        color={true}
      >
        <div className="w-full flex justify-center items-center p-8">
          <motion.button
            onClick={toggleSort}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-4 py-2 bg-accent text-white/95 text-2xl font-bold flex justify-center items-center gap-2 rounded mr-2 relative z-30"
          >
            SORT {sortAsc ?  <FaArrowDown />:<FaArrowUp /> }
          </motion.button>
        </div>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 bg-black/40 p-8 rounded-lg">
          {popularCamps.map((camp) => (
            <PopularCampCard key={camp._id} camp={camp} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default PopularCamps;
