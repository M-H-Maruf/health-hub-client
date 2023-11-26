
import { useQuery } from "@tanstack/react-query";
import { getAllCamps } from "../../api/camps";
import Section from "../../components/utils/Section";
import Particle from './../../components/utils/Particle';
import Card from "../../components/availableCamps/Card";

const AvailableCamps = () => {
  const { data: upcomingCamps = [] } = useQuery({
    queryKey: ["upcomingCamps"],
    queryFn: getAllCamps ,
    refetchInterval: 10000,
  });

  return (
    <div className="bg-black/40 pt-10">
        <Particle></Particle>
      <Section
        heading={"Available Camps"}
        subHeading={"Explore Vital Health Events"}
      >
        
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 bg-black/40 p-8 rounded-lg">
          {upcomingCamps.map((camp) => (
            <Card key={camp._id} camp={camp} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default AvailableCamps;
