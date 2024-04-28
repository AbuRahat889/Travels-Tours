import { Link, useLoaderData } from "react-router-dom";
import "../../../src/App.css";
import { useState } from "react";

const Mylist = () => {
  const loaders = useLoaderData();
  const [deleteUser, setDeleteUser] = useState(loaders);

  // delete data form database
  const handleDelet = (_id) => {
    console.log("delete", _id);

    fetch(`http://localhost:5000/user/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Deleted Data successfully..");
          const reaming = deleteUser.filter((user) => user._id !== _id);
          setDeleteUser(reaming);
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
            "url(https://i.ibb.co/372jQVq/mountains-3059528-1920.jpg)",
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
                  <Link to={"/mylist"}>Mylist</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="align">
        {loaders.map((loader) => (
          <h1 key={loader._id}>
            {loader.name} : {loader.email} : {loader._id}
            <button onClick={() => handleDelet(loader._id)} className="btn">
              {" "}
              delete
            </button>
            <Link to={`/update/${loader._id}`} className="btn">
              <button>update</button>
            </Link>
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Mylist;
