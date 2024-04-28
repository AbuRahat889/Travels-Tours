const AllTuristItem = ({ allSpot }) => {
    // image
    // b. tourists_spot_name
    // c. average_cost
    // d. totaVisitorsPerYear
    // e. travel_time
    // f. seasonality
    const [photo, tourists_spot_name, average_cost , totaVisitorsPerYear, travel_time, seasonality] = allSpot;
    console.log(allSpot);
  return (
    <div>
        
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src=''
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{tourists_spot_name}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTuristItem;
