import Accordian from "../Accordian/Accordian";
import PopularPost from "../PopularPost/PopularPost";

import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Accordian></Accordian>
            <PopularPost></PopularPost>
           
        </div>
    );
};

export default Home;