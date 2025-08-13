import React from 'react'

const MakeOrder = () => {
  return (
<>
 <div
      className="relative flex flex-col md:flex-row items-center justify-center bg-cover bg-center min-h-screen px-6 py-12"
      style={{
        backgroundImage:
          "url('https://cdn.ymaws.com/ifu.site-ym.com/resource/resmgr/hphero/fruit_and_juice_main3.png')",
      }}
    >
      
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Left */}
      <div className="relative md:w-1/2 text-white mb-10 md:mb-0 md:pr-12">
        <h2 className="text-5xl font-bold text-green-400 mb-4 font-cursive">
          Make Your Order
        </h2>
        <h3 className="text-2xl font-semibold mb-4">
          Freshness Just a Click Away!
        </h3>
        <p className="text-base leading-relaxed text-gray-200 mb-8">
          Craving your favorite juice or smoothie? Place your order online and
          let the freshness come to you! Quick, easy, and made just the way you
          like it — delivered at your convenience.
        </p>

        {/* Call */}
        <div className="border border-white p-5 inline-block rounded-md">
          <p className="mb-3 text-lg">Any Queries ? Call At</p>
          <p className="text-green-400 text-2xl font-bold flex items-center">
            <i className="fas fa-phone-alt mr-2"></i>+91 xxxxx xxxxx
          </p>
        </div>
      </div>

      {/* right */}
      <div className="relative md:w-1/2 bg-black bg-opacity-80 p-8 rounded-md w-full max-w-md">
     
        <div className="absolute top-0 left-0 w-full h-14 bg-green-500 clip-path-mypolygon"></div>

        
        <div className="relative z-10 mt-10">
          <h3 className="text-white text-xl font-bold mb-6 text-center">
            Fill Your Order !
          </h3>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name *"
              className="w-full px-5 py-3 border border-white rounded-md bg-transparent text-white placeholder-white text-base"
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="w-full px-5 py-3 border border-white rounded-md bg-transparent text-white placeholder-white text-base"
            />
            <input
              type="text"
              placeholder="Your Phone Number *"
              className="w-full px-5 py-3 border border-white rounded-md bg-transparent text-white placeholder-white text-base"
            />
            <input
              type="text"
              placeholder="Select Your Flavour *"
              className="w-full px-5 py-3 border border-white rounded-md bg-transparent text-white placeholder-white text-base"
            />
            <textarea
              placeholder="Your Address *"
              rows={3}
              className="w-full px-5 py-3 border border-white rounded-md bg-transparent text-white placeholder-white text-base"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-500 text-white font-semibold py-3 rounded-md hover:bg-green-600 text-lg"
            >
              Order Now
            </button>
          </form>
        </div>
      </div>
    </div>

</>
  )
}

export default MakeOrder