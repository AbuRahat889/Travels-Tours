import { useLoaderData } from "react-router-dom";
import Accordian from "../Accordian/Accordian";
import PopularPost from "../PopularPost/PopularPost";
import Slider from "./Slider";
import PostItem from "../PopularPost/PostItem";
import BookingPlatform from "../Booking Platform/BookingPlatform";
import Counter from "../Counter/Counter";

const Home = () => {
  const postloader = useLoaderData();

  return (
    <div>
      <Slider></Slider>
      <Accordian></Accordian>
      <PopularPost></PopularPost>
     <div className="grid grid-cols-3 align">
     {
        postloader.map(loader=><PostItem key={loader.id} loader={loader}></PostItem>)
      }
     </div>
     <BookingPlatform></BookingPlatform>
     <Counter></Counter>
    </div>
  );
};

export default Home;
