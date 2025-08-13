import React from "react";
import Link from "next/link";
const page = () => {
  const timelineData = [
    {
      year: "2005 - 2007",
      title: "From Kiosk to Legacy",
      desc: "In 2005, Sunil Jaiswal began with a small fruit kiosk in Navi Mumbai.",
    },
    {
      year: "2005 - 2007",
      title: "From Kiosk to Legacy",
      desc: "In 2005, Sunil Jaiswal began with a small fruit kiosk in Navi Mumbai.",
    },
    {
      year: "2005 - 2007",
      title: "From Kiosk to Legacy",
      desc: "In 2005, Sunil Jaiswal began with a small fruit kiosk in Navi Mumbai.",
    },
    {
      year: "2005 - 2007",
      title: "From Kiosk to Legacy",
      desc: "In 2005, Sunil Jaiswal began with a small fruit kiosk in Navi Mumbai.",
    },
    {
      year: "2005 - 2007",
      title: "From Kiosk to Legacy",
      desc: "In 2005, Sunil Jaiswal began with a small fruit kiosk in Navi Mumbai.",
    },
    {
      year: "2005 - 2007",
      title: "From Kiosk to Legacy",
      desc: "In 2005, Sunil Jaiswal began with a small fruit kiosk in Navi Mumbai.",
    },
  ];

  return (
    <>
      <section
        className="relative bg-cover bg-center text-white min-h-[80vh]"
        style={{
          backgroundImage:
            "url(https://www.truebasics.com/blog/wp-content/uploads/2023/07/heallthy-juices.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80 min-h-[60vh]"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
          {/* Left Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-[cursive] text-3xl md:text-4xl leading-snug mb-6">
              A Passion for Quality, <br /> A Love for Flavor!
            </h2>
            <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed max-w-md">
              Zussioberry started as a small juice kiosk, loved for its fresh
              flavors and quality. Today, it blends classic favorites with
              creative twists, served in a vibrant and welcoming space.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold transition">
              View More
            </button>
          </div>

          {/* Right Side Glass Images */}
          <div className="flex-1 flex justify-center mt-10 md:mt-0">
            <img
              src="https://img.freepik.com/free-psd/refreshing-green-smoothie-glass-with-basil-garnish_191095-90810.jpg?t=st=1754940950~exp=1754944550~hmac=b7115b3a853387eb20a166dce85092446b95d96eaae1e807141e276d10cd5bb2&w=1480"
              alt="Juice Glass"
              className="max-w-sm w-full"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-green-600 text-3xl md:text-4xl font-cursive mb-4">
            Our Journey Through the Years
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg">
            Take a look at the key milestones that shaped Zussioberry into the
            brand it is today.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-between md:justify-center gap-6 md:gap-20 ${
                index % 2 === 0 ? "flex-row-reverse md:flex-row" : ""
              }`}
            >
              {/* Left Content */}
              <div className="flex-1 text-right md:text-left max-w-xs">
                {index % 2 === 0 && (
                  <>
                    <h3 className="text-green-600 italic font-semibold text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </>
                )}
              </div>

              {/* Middle Year Tag */}
              <div className="flex items-center gap-3">
                <span className="bg-black text-green-300 text-sm font-semibold px-4 py-2 rounded-full">
                  {item.year}
                </span>
              </div>

              {/* Right Content */}
              <div className="flex-1 max-w-xs">
                {index % 2 !== 0 && (
                  <>
                    <h3 className="text-green-600 italic font-semibold text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-20 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Mission  */}
          <div
            className="relative flex items-center justify-center w-full"
            style={{
              backgroundImage:
                "url('https://as2.ftcdn.net/v2/jpg/01/87/21/31/1000_F_187213110_p07ufUC42zVlcaijXRuFFYB4MKsWLgq1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "500px",
              minHeight: "400px",
              maxHeight: "600px",
            }}
          >
            <h2 className="text-white text-4xl md:text-5xl font-cursive text-center leading-snug">
              Our <br /> Mission
            </h2>
          </div>

          <div className="bg-white flex items-center justify-center p-10 md:p-14">
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed text-center md:text-left max-w-lg">
              Our mission is to serve fresh, expertly crafted fruit beverages
              and frozen treats that are as responsible as they are refreshing.
              By supporting local farmers and embracing sustainability, we
              ensure every product delights both you and the planet.
            </p>
          </div>

          {/* Vision*/}
          <div className="bg-white flex items-center justify-center p-10 md:p-14">
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed text-center md:text-left max-w-lg">
              At Zussioberry, we believe in turning every sip into a joyful
              memory. With our unique blends, warm hospitality, and vibrant
              flavors, we craft experiences that leave you smiling. We’re driven
              by innovation, exploring new tastes and nurturing a community
              built on happiness and inclusion.
            </p>
          </div>

          <div
            className="relative flex items-center justify-center w-full"
            style={{
              backgroundImage:
                "url('https://as2.ftcdn.net/v2/jpg/01/87/21/31/1000_F_187213110_p07ufUC42zVlcaijXRuFFYB4MKsWLgq1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "500px",
              minHeight: "400px",
              maxHeight: "600px",
            }}
          >
            <h2 className="text-white text-4xl md:text-5xl font-cursive text-center leading-snug">
              Our <br /> Vision
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
