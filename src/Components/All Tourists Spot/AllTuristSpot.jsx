import { Link, useLoaderData } from "react-router-dom";
import "../../../src/App.css";
import { FaCalendarDays } from "react-icons/fa6";
import { TbCoinTaka } from "react-icons/tb";

const AllTuristSpot = () => {
  const turistSpot = useLoaderData();
  return (
    <div>
      {/* hero  */}
      <div
        className="hero"
        style={{
          backgroundImage: "url(https://i.ibb.co/X7TGcgr/bar.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 h-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">All Turist Spot</h1>

            <div className="text-sm breadcrumbs">
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/allturistspot"}>All Turist Spot</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end hero */}

      <div className="align ">
        <h1>length {turistSpot.length}</h1>
        {turistSpot.map((spot) => (
          <div key={spot._id}>
            <div className="card lg:card-side bg-base-100 shadow-xl mb-5">
              <figure>
                
                <img src={spot.photo} alt="Album" className="w-96"/>
                
              </figure>
              <div className="card-body flex justify-center">
                <h2 className="card-title text-3xl">{spot.tourists_spot_name},</h2>
                <h2 className="card-title">{spot.country_Name}</h2>

                <div className="text-left">
                  <p className="text-2xl">
                    Total Average Visitor : {spot.totaVisitorsPerYear}{" "}
                  </p>
                  <p className="text-2xl my-2">Travil Season: {spot.seasonality} </p>
            <hr />
                  <div className="flex py-2 justify-between">
                    <p className="text-2xl flex items-center gap-1">
                      <FaCalendarDays />
                      {spot.travel_time}{" "}
                    </p>
                    <p className="text-2xl flex gap-1 items-center">
                      <TbCoinTaka />
                      {spot.average_cost}{" "}
                    </p>
                  </div>
                  <hr />
                </div>

                <div className="card-actions justify-end mt-2">
                    <Link to={`/details/${spot._id}`}>
                    <button className="btn btn-primary">View Details</button>
                    </Link>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTuristSpot;
