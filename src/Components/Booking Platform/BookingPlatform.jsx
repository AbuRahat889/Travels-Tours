import { MdPlayArrow } from "react-icons/md";
const BookingPlatform = () => {
  return (
    <div>
      <div
        className="hero h-96 min-h-screen bg-fixed"
        style={{
          backgroundImage: "url(https://i.ibb.co/jMC7TQj/video-bg-1-1.webp)",
        }}
      >
        <div className="hero-overlay "></div>

        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <div className=" flex justify-center mb-5">
              <div className="border text-9xl text-center p-5 ">
                <MdPlayArrow className=" p-5 bg-warning text-[#212529] transition delay-100 duration-300 hover:text-warning hover:bg-white " />
              </div>
            </div>

            <p className="mb-5 satisfy text-4xl text-[#ff0143]">
              Love where you're going
            </p>
            <h1 className="mb-5 text-6xl font-bold text-white">
              <span className="font-black">Tripo</span>{" "}
              <span className="font-normal">is a World Leading </span>
              <br />
              <span className="font-normal"> Online</span>{" "}
              <span className="font-black">Tour Booking Platform</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPlatform;
