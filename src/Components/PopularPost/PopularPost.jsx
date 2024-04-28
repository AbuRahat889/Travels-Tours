import PostItem from "./PostItem";

const PopularPost = () => {
  return (
    <div className=" align">
      <div className="mt-80">
        <h1 className="text-yellow-500 font-bold text-xl tracking-widest">
          FEATURED TOURS
        </h1>
        <h1 className="text-7xl font-bold">Most Popular Tours</h1>
      </div>

      <PostItem></PostItem>
    </div>
  );
};

export default PopularPost;
