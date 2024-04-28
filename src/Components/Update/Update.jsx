
import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loader = useLoaderData();
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const newUser = {name, email}

        console.log(name, email);

        fetch(`http://localhost:5000/user/${loader._id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
            
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
            <h1>this is update pageeeeee</h1>
            <h1>name is :  {loader.name} </h1>

            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loader.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loader.email} id="" />
                <br />
                <input type="submit" value="submit" />
            </form>
            
        </div>
    );
};

export default Update;