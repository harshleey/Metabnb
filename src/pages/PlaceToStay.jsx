import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Places from "../components/Places";
import FilterLinks from "../components/FilterLinks";

const PlaceToStay = () => {
    return (
        <div className='place'>
            <Nav/>
            <FilterLinks/>
            <Places/>
            <Footer/>
        </div>
      )
}

export default PlaceToStay