import Banner from "../../components/Banner/Banner";
import Hospitals from "../../components/hospitals/Hospitals";

const Home = () => {
    return (
        <div className="bg-neutral-50">
            <Banner></Banner>
            <Hospitals></Hospitals>
        </div>
    );
};

export default Home;