import "../../../src/App.css";
import { Link } from "react-router-dom";
const AddTuristSpot = () => {
  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    // const email = form.email.value;
    // const name = form.name.value;
    // const rahat = form.rahat.value;
    const tourists_spot_name = form.tourists_spot_name.value;
    const country_Name = form.country_Name.value;

    const location = form.location.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const average_cost = form.average_cost.value;

    const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
    const description = form.description.value;
    const photo = form.photo.value;

    const user = {
      // rahat,
      // email,
      // name,
      tourists_spot_name,
      country_Name,
      location,
      description,
      average_cost,
      seasonality,
      travel_time,
      totaVisitorsPerYear,
      photo
    };
    console.log(user);

    // create post
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("users add successfully!!");
          form.reset();
        }
      });
  };
  return (
    <div className="">
      {/* hero  */}
      <div
        className="hero"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 h-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Add Turist Spot</h1>

            <div className="text-sm breadcrumbs">
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/addturistspot"}>AddedTuristSpot</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <form onSubmit={handleForm} className="bg-red-500 p-10 space-y-7">
        <input type="text" name="name" id="" /> <br />
        <input type="email" name="email" id="" /> <br />
        <input type="text" name="rahat" id="" />
        <input type="submit" value="submit" />
      </form> */}

      <div className="bg-[#F4F3F0] p-24 align">
        <h2 className="text-3xl font-extrabold">Add a Turist Spot</h2>
        <form onSubmit={handleForm}>
          {/* form name and quantity row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">tourists_spot_name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="tourists_spot_name"
                  placeholder="tourists_spot_name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">country_Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="country_Name"
                  placeholder="country_Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* form location row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">location</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="location"
                  placeholder="location"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">seasonality</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="seasonality"
                  placeholder="seasonality"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* form travel_time and average_cost row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">travel_time</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="travel_time"
                  placeholder="travel_time"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">average_cost</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="average_cost"
                  placeholder="average_cost"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* totaVisitorsPerYear and  short description*/}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">totaVisitorsPerYear</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="totaVisitorsPerYear"
                  placeholder="totaVisitorsPerYear"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">short description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  placeholder="description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* form Photo url row */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input type="submit" value="Add Spot" className="btn btn-block" />
        </form>
      </div>

      
    </div>
  );
};

export default AddTuristSpot;

/*
image ( use image URL)
b. tourists_spot_name
c. country_Name
d. location
e. short description
f. average_cost
g. seasonality - like summer, winter
h. travel_time => like- 7 days
i. totaVisitorsPerYear => like- 10000
j. User Email
k. User Name
l. “Add” button
*/