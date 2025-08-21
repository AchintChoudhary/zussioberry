'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => setIsOpen(false);

  return (
    <header>
      {/* Top bar */}
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-5 py-2 border-b-2 border-[#c0baba]">
        <div className="hidden md:flex flex-col gap-1 text-sm text-gray-700">
          <div>
            <span>Call at: +91 XXXXX XXXXX</span>
          </div>
          <div>
            <span>Mail at: info@pizzakitchen.com</span>
          </div>
        </div>

        
        <div className="flex items-center">
          <img
            src="/tek.png"
            className="w-[120px] h-[110px] object-contain"
            alt="Zussio Berry"
          />
        </div>

   
        <div className="hidden md:block">
          <button className="bg-green-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-green-700 transition">
            View Menu
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 w-10 h-10 flex items-center justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40 md:hidden cursor-pointer"
          onClick={handleCloseMenu}
        />
      )}

      {/* Navigation Menu */}
      <nav
        id="navbar-menu"
        className={`md:static md:h-auto md:w-auto md:bg-transparent 
          md:opacity-100 md:visible md:flex md:flex-row md:items-center md:justify-center
          fixed inset-0 h-full w-full bg-white z-50 flex flex-col transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        {/* Close button for mobile */}
        <button
          className="absolute top-6 right-6 text-3xl text-gray-600 md:hidden"
          onClick={handleCloseMenu}
        >
          <X size={28} />
        </button>

        {/* Menu Items */}
        <ul className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:items-center md:space-x-20 px-6 py-4 md:py-2 font-medium my-3">
          <li><Link href="/" onClick={handleCloseMenu} className="hover:text-green-600">Home</Link></li>
          <li><Link href="/about-us" onClick={handleCloseMenu} className="hover:text-green-600">About</Link></li>
          <li><Link href="/franchise" onClick={handleCloseMenu} className="hover:text-green-600">Franchise</Link></li>
          <li><Link href="/career" onClick={handleCloseMenu} className="hover:text-green-600">Career</Link></li>
          <li><Link href="/blogs" onClick={handleCloseMenu} className="hover:text-green-600">Blog</Link></li>
          <li><Link href="/news" onClick={handleCloseMenu} className="hover:text-green-600">News</Link></li>
          <li><Link href="/contact-us" onClick={handleCloseMenu} className="hover:text-green-600">Contact</Link></li>
        </ul>

        {/* Mobile-only*/}
        <div className="md:hidden border-t border-gray-200 px-6 py-4 space-y-4 text-sm text-gray-700">
          <div>
            <span>Call at: +91 XXXXX XXXXX</span>
          </div>
          <div>
            <span>Mail at: info@pizzakitchen.com</span>
          </div>
          <button className="bg-green-600 text-white w-full py-2 rounded-md font-semibold hover:bg-green-700 transition">
            View Menu
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
