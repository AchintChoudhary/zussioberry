import React from 'react'

const page = () => {
  return (
    <> <section
      className="relative bg-cover bg-center text-white min-h-[60vh] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://www.truebasics.com/blog/wp-content/uploads/2023/07/heallthy-juices.jpg')",
      }}
    >
  
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-[cursive] font-semibold mb-4">
          Come, Join Our Team !
        </h2>
        <p className="text-sm md:text-lg text-gray-200 mb-6 leading-relaxed">
          Join our passionate team and turn your ideas into action.
          Together, we make every sip special!
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold transition">
          Join Now
        </button>
      </div>
    </section>
 
 <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      {/* Title & Intro */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-[cursive] font-semibold mb-4">
          Why Join Our <span className="text-green-500">Team</span> ?
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Join a passionate, friendly team where your ideas matter, your growth is valued, 
          and every day is filled with great flavors and positive vibes. Be part of something 
          meaningful at Zussioberry!
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 border-gray-300">
        {/* Growth Opportunity */}
        <div className=" md:border-b-2 md:border-r-2 border-gray-300 p-8 text-center">
          <h3 className="font-semibold text-lg mb-2">Growth Opportunity</h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Whether you are looking to advance <br></br>your career or simply develop new<br></br> skills, 
            we provide ample <br></br>opportunities.
          </p>
        </div>

        {/* Dynamic Work Environment */}
        <div className=" md:border-b-2 p-8 text-center border-gray-300">
          <h3 className="font-semibold text-lg mb-2">Dynamic Work Environment</h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Experience an ever-evolving<br></br> workplace that keeps you engaged <br></br>and challenged, 
            where your<br></br> contribution makes a real impact.
          </p>
        </div>

        {/* Team Spirit */}
        <div className="border-r-2 border-gray-300 p-8 text-center">
          <h3 className="font-semibold text-lg mb-2">Team Spirit</h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Be part of a collaborative and <br></br> supportive team that values each<br></br> member&apos;s contributions.
          </p>
        </div>

        {/* Creative Culture */}
        <div className="p-8 text-center">
          <h3 className="font-semibold text-lg mb-2">Creative Culture</h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Thrive in an environment that<br></br> encourages innovation and creative<br></br> problem-solving.
          </p>
        </div>
      </div>
    </section>
 
<section className="bg-white py-16 px-4 sm:px-6 md:px-12 lg:px-20">
  <div className="flex flex-col md:flex-row items-center justify-between md:pl-12 max-w-6xl mx-auto gap-12">

    {/* Left Section */}
    <div className="md:w-1/2 text-center md:text-center">
      
      <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-[cursive] font-semibold mb-4">
        Dream <span className="text-green-500">. Apply .</span> Achieve
      </h2>

      <p className="text-gray-700 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mb-8">
        We’d love to know you! Complete the form and join our vibrant team.
      </p>

      {/* Image */}
      <img
        src="https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anVpY2V8ZW58MHx8MHx8fDA%3D"
        alt="Green Juice"
        className="max-w-[250px] sm:max-w-[300px] mx-auto"
      />
    </div>

    {/* Right Section */}
    <div
      className="relative w-full md:w-1/2 rounded-lg overflow-hidden max-w-md min-h-[500px] sm:min-h-[550px] md:min-h-[600px]"
      style={{
        backgroundImage:
          "url('https://as2.ftcdn.net/v2/jpg/02/51/17/05/1000_F_251170513_zEk5QUmamly4M10TULREDPIbC4dVRDUH.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Header */}
      <div className="relative bg-green-500 text-white text-center font-bold text-lg py-3 sm:py-4">
        <div className="absolute inset-0 bg-green-500 clip-path-header"></div>
        <span className="relative z-10">Apply Now!</span>
      </div>

      {/* Form */}
      <div className="relative p-4 sm:p-6 md:p-8 flex flex-col justify-center min-h-[450px] sm:min-h-[500px] md:min-h-[550px]">
        <form className="space-y-4 sm:space-y-5 text-center">
          <input
            type="text"
            placeholder="Your Name *"
            className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-lg border border-white bg-transparent text-white placeholder-white text-[14px] sm:text-[15px] focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-lg border border-white bg-transparent text-white placeholder-white text-[14px] sm:text-[15px] focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            placeholder="Your Phone Number"
            className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-lg border border-white bg-transparent text-white placeholder-white text-[14px] sm:text-[15px] focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            placeholder="Current Opening"
            className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-lg border border-white bg-transparent text-white placeholder-white text-[14px] sm:text-[15px] focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            placeholder="Your Address"
            className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-lg border border-white bg-transparent text-white placeholder-white text-[14px] sm:text-[15px] focus:outline-none focus:ring-2 focus:ring-green-400 min-h-[80px]"
          ></textarea>

          <button
            type="submit"
            className="py-2 sm:py-3 px-8 sm:px-12 rounded-lg bg-green-600 text-white font-semibold text-[14px] sm:text-[16px] shadow-lg hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</section>


    </>
  )
}

export default page