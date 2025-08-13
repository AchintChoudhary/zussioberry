import React from "react";

const FullMenu = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center px-6 py-12 bg-white max-w-6xl mx-auto">
        <div className="flex-1 w-full max-w-md lg:mr-25">
          <h2 className="    dancing-script  text-green-600 text-3xl font-[cursive] mb-2">
            Explore Our Full Menu
          </h2>
          <p className=" text-gray-800 text-lg mb-6">
            A Delicious Variety to Refresh and Delight
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-md shadow">
              <img src="/juice.png" alt="Juices" className="w-14 h-14" />
              <div>
                <p className="text-xl font-bold">15+</p>
                <p className="text-sm text-gray-700">Juices</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-md shadow">
              <img src="/iceCream.png" alt="Icecream" className="w-14 h-14" />
              <div>
                <p className="text-xl font-bold">12+</p>
                <p className="text-sm text-gray-700">Icecream</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-md shadow">
              <img src="/falooda.png" alt="Falooda" className="w-14 h-14" />
              <div>
                <p className="text-xl font-bold">6+</p>
                <p className="text-sm text-gray-700">Falooda</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-md shadow">
              <img src="/milkshake.png" alt="Milkshake" className="w-14 h-14" />
              <div>
                <p className="text-xl font-bold">18+</p>
                <p className="text-sm text-gray-700">Milkshake</p>
              </div>
            </div>
          </div>

          <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
            View Menu
          </button>
        </div>

        <div className="flex-1 w-full max-w-sm mt-10 lg:mt-0 lg:ml-4 ">
          <img src="/pngegg.png" alt="Green Juice" />
        </div>
      </div>
    </>
  );
};

export default FullMenu;
