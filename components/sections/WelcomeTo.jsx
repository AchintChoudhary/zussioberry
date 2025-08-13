import React from "react";

const WelcomeTo = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center px-8 md:px-16 py-16 bg-white">
        {/* Left Image*/}
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-14 flex justify-end">
          <img
            src="https://toppng.com/uploads/preview/fruit-png-11552940252zuujcuimlw.png"
            alt="Juice with fruits"
            className="max-w-md w-full h-auto"
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-green-600 text-4xl md:text-5xl font-cursive mb-4 leading-snug">
            Welcome to Zussioberry
          </h2>
          <h3 className="text-2xl font-bold mb-6">About Us</h3>
          <div className="w-[35vw]">
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Zussioberry is your go-to destination for the most delicious
            and vibrant fresh fruit juices, milkshakes, smoothies,
            falooda,
            ice-creams and more. We're more than just a cafe; we're a
            celebration of flavor and fun! Our menu is a delightful fusion
            of classic favorites and innovative creations, all crafted
            with the freshest ingredients and a passion for taste.
          </p>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-md text-lg transition-colors">
            View More
          </button>
        </div>
      </div>
    </>
  );
};

export default WelcomeTo;
