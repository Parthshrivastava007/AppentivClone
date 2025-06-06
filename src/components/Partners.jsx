import React, { useEffect, useState } from "react";

const Partners = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/ttg3671/glowbal_assignment/refs/heads/main/partners"
    );
    const json = await data.json();
    setPartners(json);
  };

  return (
    <section className="bg-black py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-10">Our Partners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center"
            >
              <div className="text-black text-xl font-semibold">
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
