import Nav from "../components/Nav";
import Header from "../components/Header";
import Sponsors from "../components/Sponsors";
import HomeAccent from "../components/HomeAccent";
import Footer from "../components/Footer";
import HomeRentals from "../components/HomeRentals";

const Home = () => {
    return (
        <div className='home-container'>
            <Nav/>
            <Header/>
            <Sponsors/>
            <HomeRentals/>
            <HomeAccent/>
            <Footer/>
        </div>
      )
}

export default Home