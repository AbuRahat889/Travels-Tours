import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className="bg-[#40b9eb] h-80 flex items-center justify-center">
      <div className="flex gap-20">
        <div>
          <div className="flex gap-2 ">
          <CountUp start={-10} end={22} duration={2} className="text-8xl text-white"></CountUp>
          <p className="text-8xl text-white">+</p>
          </div>
          <h1 className="text-xl font-semibold text-white">Professional Tour Guides</h1>
        </div>
        <div>
          <div className="flex gap-2 items-center">
          <CountUp start={30} end={84} duration={2} className="text-8xl text-white"></CountUp>
          <p className="text-8xl text-white">K</p>
          </div>
          <h1 className="text-xl font-semibold text-white">Tours are Completed</h1>
        </div>
        <div>
          <div className="flex gap-2 items-center">
          <CountUp start={-10} end={17} duration={2} className="text-8xl text-white"></CountUp>
          <p className="text-8xl text-white">+</p>
          </div>
          <h1 className="text-xl font-semibold text-white">Traveling Experience</h1>
        </div>
        <div>
          <div className="flex gap-2 items-center">
          <CountUp start={60} end={88} duration={2} className="text-8xl text-white"></CountUp>
          <p className="text-8xl text-white">K</p>
          </div>
          <h1 className="text-xl font-semibold text-white">Happy Customers</h1>
        </div>
      </div>
    </div>
  );
};

export default Counter;
