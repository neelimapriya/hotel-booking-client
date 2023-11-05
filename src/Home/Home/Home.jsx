
import Banner from '../Banner/Banner';
import Rooms from '../../Rooms/Rooms';
import Footer from '../Footer/Footer';
import Review from '../../Review/Review';
import About from '../About/About';
import Contact from '../About/Contact';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Rooms></Rooms>
           <Review></Review>
           <About></About>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;