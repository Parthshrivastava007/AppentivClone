import { HERO_VIDEO } from "../constants/constants";
import Header from "./Header";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden m-0 p-0">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={HERO_VIDEO} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full z-20">
        <Header />
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

      <div className="relative z-20 h-full flex items-center justify-center px-6 md:px-10">
        <div className="text-center text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Transforming <span className="text-blue-400">ideas</span> into{" "}
            <br />
            <span className="text-blue-400">impactful digital</span> solutions
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            We design, build and scale world-class digital products for startups
            and enterprises.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
            >
              Get in Touch
            </a>
            <a
              href="#portfolio"
              className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-black transition"
            >
              Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
