import { Helmet } from "react-helmet-async";
import Banner from './../../components/home/Banner';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Health Hub | Home</title>
      </Helmet>
      <Banner></Banner>
    </div>
  );
};

export default Home;
