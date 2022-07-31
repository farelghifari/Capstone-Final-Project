import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Palembang",
    },
    {
      id: 2,
      title: "Semarang",
    },
    {
      id: 3,
      title: "Samarinda",
    },
    {
      id: 4,
      title: "Yogyakarta",
    },
    {
      id: 5,
      title: "Bandung",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
