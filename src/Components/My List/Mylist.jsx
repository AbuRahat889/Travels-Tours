import { Link, useLoaderData } from "react-router-dom";
import "../../../src/App.css";
import Swal from "sweetalert2";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Mylist = () => {
  const loaders = useLoaderData();
  const [deleteUser, setDeleteUser] = useState(loaders);

  // delete data form database
  const handleDelet = (_id) => {
    console.log("delete", _id);

    //use modal
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://back-end-gold-six.vercel.app/user/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const reaming = deleteUser.filter(
                (cleanUser) => cleanUser._id !== _id
              );
              setDeleteUser(reaming);
            }
          });
      }
    });
  };

  return (
    <div className="">
      <Helmet>
        <title>WanderWise | My List</title>
      </Helmet>
      {/* hero  */}
      <div
        className="hero"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/18rms31/cathryn-lavery-f-MD-Cru6-OTk-unsplash.jpg)",
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

      <div className="align"></div>

      <div className="overflow-x-auto align">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Location</th>
              <th>Cost</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {loaders.map((loader) => (
              <tr className="text-xl" key={loader.id}>
                <th></th>
                <td>{loader.country_Name}</td>
                <td>{loader.location}</td>
                <td>{loader.average_cost}</td>
                <td>
                  <Link to={`/update/${loader._id}`} className="btn btn-info">
                    update
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelet(loader._id)}
                    className="btn btn-warning"
                  >
                    {" "}
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mylist;
