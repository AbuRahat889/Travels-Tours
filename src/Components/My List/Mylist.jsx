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
        if (data.deletedCount>0) {
          alert("Deleted Data successfully..");
          const reaming = deleteUser.filter((user) => user._id !== _id);
          setDeleteUser(reaming);
        }
      });
  };

  return (
    <div className="align">
      <h1>this is banner page</h1>
      <h1>{loaders.length}</h1>
      <div>
        {loaders.map((loader) => (
          <h1 key={loader._id}>
            {loader.name} : {loader.email} : {loader._id}
            <button onClick={() => handleDelet(loader._id)} className="btn">
              {" "}
              delete
            </button>
            
            <Link to={`/update/${loader._id}`} className="btn"><button>update</button></Link>
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Mylist;
