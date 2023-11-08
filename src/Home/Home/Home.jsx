import Banner from "../Banner/Banner";
import Rooms from "../../Rooms/Rooms";
import Footer from "../Footer/Footer";
import Review from "../../Review/Review";
import About from "../About/About";
import Contact from "../About/Contact";
import NewsLetter from "../../News/NewsLetter";
import { Helmet } from "react-helmet";
import Faq from "../../Faq/Faq";
// import RoomCmponent from "../../Rooms/RoomCmponent";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Lartisien | Home</title>
      </Helmet>

      <Banner></Banner>
      {/* <RoomCmponent></RoomCmponent> */}
      <Rooms></Rooms>
      <Review></Review>
      <About></About>
      <NewsLetter></NewsLetter>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
};

export default Home;
