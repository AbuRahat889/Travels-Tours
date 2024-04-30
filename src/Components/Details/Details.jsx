import { Link, useLoaderData } from "react-router-dom";
import { TbCoinTaka } from "react-icons/tb";
import { Helmet } from "react-helmet-async";

const Details = () => {
  const loader = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>WanderWise | View Details</title>
      </Helmet>
      <div
        className="hero"
        style={{
          backgroundImage: "url(https://i.ibb.co/SNp16v4/coxbazar.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 h-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Details Page</h1>

            <div className="text-sm breadcrumbs">
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/allturistspot"}>All Turist Spot</Link>
                </li>
                <li>
                  <Link to={`/details/${loader._id}`}>details</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end hero  */}

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={loader.photo}
            className=" rounded-lg shadow-2xl w-2/4"
          />
          <div className="">
            <h1 className="text-5xl font-bold">{loader.tourists_spot_name}</h1>
            <p className="py-6 text-2xl">Country : {loader.country_Name}  </p>
            <hr />
            <div className="flex justify-between my-5 text-xl">
                <p>Visitor : {loader.totaVisitorsPerYear} <span>/year</span></p>
                <p>Seasson : {loader.seasonality}</p>
            </div>
            <div className="flex justify-between text-xl mb-5">
                <p>Time Spand : {loader.travel_time}</p>
                <p className="flex items-center gap-1"><TbCoinTaka /> {loader.average_cost}</p>
            </div>
            <hr />
            <p className="py-6 text-xl">{loader.description}  </p>
           
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
