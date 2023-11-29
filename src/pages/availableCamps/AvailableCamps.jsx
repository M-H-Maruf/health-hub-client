import { useQuery } from "@tanstack/react-query";
import { getAllCamps } from "../../api/camps";
import Section from "../../components/utils/Section";
import Particle from "./../../components/utils/Particle";
import Card from "../../components/availableCamps/Card";
import { Helmet } from "react-helmet-async";

const AvailableCamps = () => {
  const { data: camps = [] } = useQuery({
    queryKey: ["camps"],
    queryFn: getAllCamps,
    refetchInterval: 10000,
  });

  return (
    <div className="bg-black/40 pt-10">
      <Helmet>
        <title>Health Hub | Available Camps</title>
      </Helmet>
      <Particle></Particle>
      <Section
        heading={"Available Camps"}
        subHeading={"Explore Vital Health Events"}
      >
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 bg-black/40 p-8 rounded-lg">
          {camps.map((camp) => (
            <Card key={camp._id} camp={camp} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default AvailableCamps;
