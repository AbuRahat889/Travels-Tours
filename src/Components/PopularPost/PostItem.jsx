import { useEffect, useState } from "react";

const PostItem = () => {
    const [loader, setLoader] = useState();
    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res => res.json())
        .then(data => {
            setLoader(data);
            console.log(data);
        })
    },[])
    return (
        <div>
            <h1>this is post iteme</h1>
        </div>
    );
};

export default PostItem;