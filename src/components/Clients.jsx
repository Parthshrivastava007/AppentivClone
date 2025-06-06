import React, { useEffect, useRef, useState } from "react";

const Clients = () => {
  const [testimonials, setTestimonials] = useState([]);
  const scrollRef = useRef();
  const cardWidth = useRef(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/ttg3671/glowbal_assignment/refs/heads/main/testimonials"
    );
    const json = await data.json();
    setTestimonials(json);
  };

  const scroll = (direction) => {
    const scrollAmount = cardWidth.current || 600;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-black py-16 px-4 md:px-12 relative">
      <h2 className="text-4xl font-bold text-center mb-10 text-white">
        What Our Clients Say
      </h2>

      <div className="relative max-w-4xl mx-auto overflow-hidden">
        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md hover:bg-blue-100 p-3 rounded-full"
        >
          ❮
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll scroll-smooth snap-x snap-mandatory hide-scrollbar"
        >
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              ref={
                index === 0
                  ? (el) => (cardWidth.current = el?.offsetWidth)
                  : null
              }
              className="min-w-full snap-start px-6"
            >
              <div className="bg-[#161616] p-10 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                <p className="text-2xl text-white italic text-gray-800 mb-6">
                  “{t.testimonial}”
                </p>
                <div className="mt-4">
                  <div className="font-bold text-xl text-white font-bold">
                    {t.name}
                  </div>
                  <div className="text-md text-white">{t.position}</div>
                  <div className="text-sm text-white mt-2">⭐ {t.rating}/5</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md hover:bg-blue-100 p-3 rounded-full"
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default Clients;
