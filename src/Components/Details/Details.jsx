import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  const loader = useLoaderData();
  return (
    <div>
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
            className=" rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{loader.tourists_spot_name}</h1>
            <p className="py-6"> </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
