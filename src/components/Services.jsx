import React, { useEffect, useState } from "react";


const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/ttg3671/glowbal_assignment/refs/heads/main/services"
    );
    const json = await data.json();
    setServices(json);
  };

  return (
    <section className="bg-black py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#3d3c3c] rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-white">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


