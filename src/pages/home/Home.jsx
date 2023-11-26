import { Helmet } from "react-helmet-async";
import Banner from './../../components/home/Banner';
import PopularCamps from './../../components/home/PopularCamps';
import Testimonials from './../../components/home/Testimonials';
import UpcomingCamps from './../../components/home/UpcomingCamps';
import NewsLetter from './../../components/home/NewsLetter';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Health Hub | Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularCamps></PopularCamps>
      <Testimonials></Testimonials>
      <UpcomingCamps></UpcomingCamps>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
