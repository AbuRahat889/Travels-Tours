import { GrUserManager } from "react-icons/gr";
import { IoThumbsUp } from "react-icons/io5";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaRegFaceGrinStars } from "react-icons/fa6";
import "../../../src/App.css";
const Accordian = () => {
  return (
    <div className="bg-[#082740] h-96 ">
      <div className="text-white text-center align">
        <h1 className="text-md font-semibold text-warning pt-20">
          CALL OUR AGENTS TO BOOK!
        </h1>
        <h1 className="text-6xl font-semibold">
        WanderWise Award Winning and Top <br />
          Rated Tour Operator
        </h1>
      </div>

      {/* card */}
      <div className="bg-[#082740] h-48 -mt-10">
        <div className="align flex justify-around">
          {/* card01 */}
          <div className="card rounded-none w-64 bg-base-200 mt-20 hover:bg-[#40b9eb] delay-200  ">
            <div className="card-body items-center text-center hover:text-white delay-200">
              <GrUserManager className="text-7xl " />
              <h2 className="card-title text-2xl">
                8000+ Our Local <br />
                Guides
              </h2>
            </div>
          </div>
          {/* card 02 */}
          <div className="card rounded-none w-64 bg-base-200 mt-20 hover:bg-[#40b9eb] ">
            <div className="card-body items-center text-center hover:text-white">
              <IoThumbsUp className="text-7xl " />
              <h2 className="card-title text-2xl">
                100% Trusted Tour <br />
                Agency
              </h2>
            </div>
          </div>

          <div className="card rounded-none w-64 bg-base-200 mt-20 hover:bg-[#40b9eb]">
            <div className="card-body items-center text-center hover:text-white">
              <VscWorkspaceTrusted className="text-7xl" />
              <h2 className="card-title text-2xl">
                28+ Years of Travel <br />
                Experience
              </h2>
            </div>
          </div>

          <div className="card rounded-none w-64 bg-base-200 mt-20 hover:bg-[#40b9eb]">
            <div className="card-body items-center text-center hover:text-white">
              <FaRegFaceGrinStars className="text-7xl" />
              <h2 className="card-title text-2xl">
                98% Our Travelers <br />
                are Happy
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
