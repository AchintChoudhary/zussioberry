'use client';
import React from 'react'



import Link from 'next/link';
const Footer = () => {
  return (
    <>
     <footer
  className="relative text-white px-6 pt-10 pb-4"
  style={{
    backgroundImage:
      "url('https://cdn.ymaws.com/ifu.site-ym.com/resource/resmgr/hphero/fruit_and_juice_main3.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-black opacity-80"></div>

  {/* Top section: Grid */}
  <div className="relative max-w-7xl mx-auto px-6 md:px-10">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 gap-x-8 items-start py-12 mb-6 border-b border-white/20">
      {/* Logo & About */}
      <div>
        <img
          src="https://zussioberry.com/images/zussioberry_logo.png"
          alt="ZussioBerry Logo"
          width={150}
          height={60}
          className="mb-4"
        />
        <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
          Zussioberry brings you the finest range of natural juices, milkshakes, and more — made fresh with love and quality ingredients. Taste the difference in every sip!
        </p>
      </div>

      {/* Working Hours */}
      <div className="lg:pl-15">
        <h3 className="text-lg font-semibold mb-3 text-white">Working Hours</h3>
        <ul className="text-sm text-gray-300 space-y-1 leading-6">
          <li>Mon: 00:00AM To 00:00PM</li>
          <li>Tue: 00:00AM To 00:00PM</li>
          <li>Wed: 00:00AM To 00:00PM</li>
          <li>Thur: 00:00AM To 00:00PM</li>
          <li>Fri: 00:00AM To 00:00PM</li>
          <li>Sat: 00:00AM To 00:00PM</li>
          <li><span className="text-green-400">Sun: Closed</span></li>
        </ul>
      </div>

      {/* Quick Links */}
      <div className="lg:pl-16">
        <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
        <ul className="text-sm text-gray-300 space-y-1 leading-6">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">About Us</Link></li>
          <li><Link href="/team" className="hover:underline">Our Team</Link></li>
          <li><Link href="/franchise" className="hover:underline">Franchise</Link></li>
          <li><Link href="/career" className="hover:underline">Career</Link></li>
          <li><Link href="/blogs" className="hover:underline">Blogs</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div >
        <h3 className="text-lg font-semibold mb-3 text-white">Contact Info</h3>
        <p className="text-sm text-gray-300 mb-1">Address:</p>
        <p className="text-sm text-gray-300 mb-1">Phone No.: +91 XXXXX XXXXX</p>
        <p className="text-sm text-gray-300 mb-4">+91 XXXXX XXXXX</p>

        <div className="flex space-x-6 text-green-400 text-xl">
          <Link href="#"><i className="fab fa-instagram hover:text-white" /></Link>
          <Link href="#"><i className="fab fa-facebook-f hover:text-white" /></Link>
          <Link href="#"><i className="fab fa-x-twitter hover:text-white" /></Link>
        </div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm px-1 pb-8">
      <p>© Copyrights Zussioberry 2025. All Rights Reserved</p>
      <p className="mt-2 md:mt-0">Terms & Condition | Privacy Policy</p>
    </div>
  </div>
</footer></>
  )
}

export default Footer