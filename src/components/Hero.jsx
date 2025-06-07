import { HERO_VIDEO } from "../constants/constants";
import Header from "./Header";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden m-0 p-0">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover brightness-125"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={HERO_VIDEO} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10 pointer-events-none"></div>

      <div className="absolute top-0 left-0 w-full z-30">
        <Header />
      </div>

      <div className="relative z-20 h-full flex items-center justify-start px-6 md:px-10 ml-24">
        <div className="text-left text-white max-w-3xl">
          <h1 className="text-3xl md:text-[34px] leading-tight">
            Meet The Digital Drivers Of Global Disruptors
          </h1>

          <div className="mt-5">
            <p className="text-lg text-gray-200">
              We catalyze business growth by reimagining digital experiences
              that
            </p>
            <p className="text-lg text-gray-200">
              conquer complex challenges through innovation and agility.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex mt-8 items-center px-6 py-3 border border-[#1566f7] bg-[#1566f7] text-white font-semibold rounded-md hover:bg-transparent hover:border-white transition duration-300"
          >
            Consult Our Experts
            <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
              &gt;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
