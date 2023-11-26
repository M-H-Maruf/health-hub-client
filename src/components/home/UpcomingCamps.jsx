import Section from "./../utils/Section";
import { useQuery } from "@tanstack/react-query";
import { getAllUpcomingCamps } from "../../api/camps";
import CampCard from "../shared/CampCard";

const UpcomingCamps = () => {
  const { data: upcomingCamps = [] } = useQuery({
    queryKey: ["upcomingCamps"],
    queryFn: getAllUpcomingCamps ,
    refetchInterval: 10000,
  });

  return (
    <div className="bg-black/40">
      <Section
        heading={"Upcoming Camps"}
        subHeading={"Discover Future Health Initiatives"}
      >
        
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 bg-black/40 p-8 rounded-lg">
          {upcomingCamps.map((camp) => (
            <CampCard key={camp._id} camp={camp} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default UpcomingCamps;
