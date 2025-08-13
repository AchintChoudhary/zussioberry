import React from "react";

const page = () => {

const teamMembers = [
  {
    name: 'Ekta Gupta',
    role: 'Co-founder',
    description: `With 10+ years in F&B operations,Ekta ensures smooth production, top-quality standards, and a culture of collaboration          and excellence.`,
    image:
      'https://www.alphajwc.com/wp-content/uploads/2023/04/portrait-cheerful-attractive-handsome-businessman-holding-hands-with-confident-face-looking-camera-standing-grey-background.jpg',
  },
  {
    name: 'K Subair',
    role: 'Chief Operating Officer (COO)',
    description: `With 10+ years in F&B operations, Subair ensures smooth production, top-quality standards, and a culture of collaboration and excellence.`,
    image:
      'https://www.alphajwc.com/wp-content/uploads/2023/04/portrait-cheerful-attractive-handsome-businessman-holding-hands-with-confident-face-looking-camera-standing-grey-background.jpg',
  },

];

  return (
    <>
      <section
        className="relative bg-center bg-cover  min-h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://www.truebasics.com/blog/wp-content/uploads/2023/07/heallthy-juices.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center gap-6">
          {/* Left Text Content */}
          <div className="flex-1 text-white md:pr-8">
            <h3 className="text-lg font-semibold mb-2">- Our Founder & CEO</h3>
            <h2 className="text-4xl font-[cursive] mb-4">Sunil Jaiswal</h2>
            <p className="text-gray-200 mb-6 leading-relaxed">
              With 15+ years in the F&B industry, Mr. Sunil Jaiswal started with
              a small juice kiosk. His focus on quality led to a fruit pulp
              plant, ensuring freshness. Today, he leads Zussioberry’s rapid
              growth through franchise expansion.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold transition">
              View More
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://zussioberry.com/images/sunil_jaiswal.png"
              alt="Sunil Jaiswal"
              className="max-w-sm w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-green-600 font-[cursive]">
            Our Core Team
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Meet the passionate minds driving Zussioberry’s flavors, innovation, and growth.
          </p>
        </div>

        {/* Team Members */}
        {teamMembers.map((member, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center justify-center gap-10 mb-16`}
            >
              {/* Image */}
              <div className="relative w-64 h-72 rounded-xl shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="absolute bottom-0 w-full bg-opacity-60 text-white text-center py-3">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-sm">{member.role}</p>
                </div>
              </div>

              {/* Description */}
              <div className="max-w-xl text-center m-10 md:text-left w-[18vw]">
                
  <p className="text-gray-700 text-lg leading-relaxed">
    {member.description}
  </p>
  
</div>
            </div>
          );
        })}
      </div>
    </section>
    </>
  );
};

export default page;
