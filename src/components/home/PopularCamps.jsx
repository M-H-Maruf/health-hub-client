import Section from "./../utils/Section";
import Container from './../utils/Container';
import { useQuery } from "@tanstack/react-query";
import { getPopularCamps } from "../../api/camps";
import PopularCampCard from "./PopularCampCard";

const PopularCamps = () => {
  const { data: popularCamps = [] } = useQuery({
    queryKey: ['popular-camps'],
    queryFn: getPopularCamps
})
  return (
    <div className="bg-black/40 pb-32">
      <Section
        heading={"Popular Camps"}
        subHeading={"Explore impactful health events"}
        color={true}
      ></Section>
      <Container>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 bg-black/40 p-8 rounded-lg">
      {popularCamps.map((camp) => (
        <PopularCampCard key={camp._id} camp={camp} />
      ))}</div>
      </Container>
    </div>
  );
};

export default PopularCamps;
