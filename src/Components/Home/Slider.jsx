import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Slider = () => {
  return (
    <div className="">
      <div className="carousel min-h-screen">
        {/* slider 01 */}
        <div id="slide1" className="carousel-item relative w-full">
          {/* hero 1 */}
          <div
            className="hero min-h-screen bg-fixed"
            style={{
              backgroundImage: "url(https://i.ibb.co/9w2GqhF/slider1.webp)",
            }}
          >
            <div className="  ">

              <div className="-ml-20">
                <h1 className="mb-5 text-9xl font-bold text-white satisfy">
                  Find your{" "}
                  <span className="text-warning">next tour</span>{" "}
                </h1>

                <div className="divider divider-warning w-24"></div>
                <p className="mb-5  text-4xl font-semibold text-white">
                  Where would you 
                  <span className="">
                  <Typewriter
                      options={{
                        strings: ["like to go? "],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                    </span>
                  
                </p>
                <Link to={"/allturistspot"}>
                  <button className="btn btn-warning">View Spot</button>
                </Link>
              </div>

            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* slider 02 https://i.ibb.co/pzzrjPS/background-wind-green.jpg*/}
        <div id="slide2" className="carousel-item relative w-full">
          {/* hero 2*/}
          <div
            className="hero min-h-screen bg-fixed"
            style={{
              backgroundImage: "url(https://i.ibb.co/kgsGq07/slider2.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-50"></div>

            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className=" text-[#ff0143] satisfy text-9xl">explore</h1>
                <h1 className="text-9xl font-extrabold text-white">
                  The Beauty
                </h1>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* slider 03 */}
        <div id="slide3" className="carousel-item relative w-full">
          {/* hero 3 */}
          <div
            className="hero min-h-screen bg-fixed"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/bgWCP0y/pexels-vo-thuy-tien-248787-2602490.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-right text-neutral-content">
              <div className="">
                <h1 className="text-2xl font-semibold tracking-wide">
                  Are You Ready to Travel
                </h1>
                <h1 className="mb-5 text-9xl font-black">ADVENTURE</h1>
                <span className="text-7xl text-[#ff0143] satisfy">
                  begins from now!
                </span>{" "}
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
