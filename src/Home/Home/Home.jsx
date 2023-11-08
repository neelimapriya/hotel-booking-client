import Banner from "../Banner/Banner";
import Rooms from "../../Rooms/Rooms";
import Footer from "../Footer/Footer";
import Review from "../../Review/Review";
import About from "../About/About";
import Contact from "../About/Contact";
import NewsLetter from "../../News/NewsLetter";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Lartisien | Home</title>
      </Helmet>
      <Banner></Banner>
      <Rooms></Rooms>
      <Review></Review>
      <About></About>

      <NewsLetter></NewsLetter>

      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
