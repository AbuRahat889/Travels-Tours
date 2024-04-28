import { TbCoinTaka } from "react-icons/tb";
import { LuCalendarDays } from "react-icons/lu";
import { BsFillPeopleFill } from "react-icons/bs";
import { CiMap } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import '../../../src/App.css'

const PostItem = ({ loader }) => {
  return (
    <div className="align">
      <div className="card w-96 bg-base-100 shadow-xl rounded-none ">

        <figure className="">
          <div className="indicator">
            <span className="indicator-item border p-3 rounded-full text-xl  mt-10 mr-10 text-white hover:text-red-500"><FaHeart /></span>
            <img src={loader.photo} alt="tourist-spot" />
          </div>
        </figure>

        <div className="card-body">
          <h2 className="card-title">{loader.tourists_spot_name}</h2>
          <div className="flex items-center">
            <p className="text-left flex items-center gap-1 text-[#ff0143] text-xl w-10">
              <TbCoinTaka className="text-xl" />
              {loader.average_cost}
            </p>
            <span>/per person</span>
          </div>
          <hr />
          <div className="flex gap-6 text-md font-bold text-[#9ca3a9]">
            <h1 className="flex gap-1 items-center">
              <LuCalendarDays className="text-xl" />
              {loader.travel_time}
            </h1>
            <h1 className="flex gap-1 items-center">
              <BsFillPeopleFill className="text-xl" />
              8+
            </h1>
            <h1 className="flex gap-1 items-center">
              <CiMap className="text-xl" />
              {loader.country_Name}
            </h1>
          </div>

          <div className="card-actions justify-end">
            <Link to={"/allturistspot"}>
              <button className="btn btn-primary">Show All</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
