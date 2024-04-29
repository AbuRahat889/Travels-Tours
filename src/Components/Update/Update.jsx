
import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loader = useLoaderData();
    const handleUpdate = event => {
        event.preventDefault();
    const form = event.target;
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

        fetch(`http://localhost:5000/user/${loader._id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
            
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0 ){
                alert('Update data successfully!!!')
            }
        })

    }
    return (
        <div className="align">
            {/* <h1>this is update pageeeeee</h1>
            <h1>name is :  {loader.name} </h1>

            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loader.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loader.email} id="" />
                <br />
                <input type="submit" value="submit" />
            </form> */}


<div className="bg-[#F4F3F0] p-24 align">
        <h2 className="text-3xl font-extrabold">Update Turist Spot</h2>
        <form onSubmit={handleUpdate}>
          {/* form name and quantity row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">tourists Spot Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="tourists_spot_name"
                  defaultValue={loader.tourists_spot_name}
                  placeholder="tourists_spot_name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">country Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="country_Name"
                  placeholder="country_Name"
                  defaultValue={loader.country_Name}
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
                  defaultValue={loader.location}
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
                  defaultValue={loader.seasonality}
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
                  defaultValue={loader.travel_time}
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
                  defaultValue={loader.average_cost}
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
                  defaultValue={loader.totaVisitorsPerYear}
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
                  defaultValue={loader.description}
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
                  defaultValue={loader.photo}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input type="submit" value="Update" className="btn btn-block" />
        </form>
      </div>
            
        </div>
    );
};

export default Update;