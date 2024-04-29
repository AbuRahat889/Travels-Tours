import "../../../src/App.css";
import "../PopularPost/PostItem.css";

const CountriDetails = ({ loader }) => {
  return (
    <div className="align ">
      <div className="relative zoom ">
        <img className="rounded-full h-80 w-80  " src={loader.photo} alt="" />
        
        <h1 className=" text-5xl text-white font-bold absolute top-32 left-10 ">{loader.country_Name}
        {/* <div className="hero-overlay bg-opacity-50"></div> */}
        </h1>
        
      </div>
    </div>
  );
};

export default CountriDetails;
