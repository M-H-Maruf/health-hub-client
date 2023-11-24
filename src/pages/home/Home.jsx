import { Helmet } from "react-helmet-async";
import Banner from './../../components/home/Banner';
import PopularCamps from './../../components/home/PopularCamps';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Health Hub | Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularCamps></PopularCamps>
    </div>
  );
};

export default Home;
