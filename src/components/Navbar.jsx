import React, { useState, useEffect } from 'react';
import { FaSearch, FaBell, FaCaretDown } from 'react-icons/fa';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 z-50 w-full px-4 md:px-12 py-4 transition-colors duration-500 ${isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
            <div className="flex items-center justify-between max-w-[1800px] mx-auto">

                {/* Left Side: Logo & Links */}
                <div className="flex items-center gap-10">
                    <div className='flex gap-1 items-start'>
                        <h1 className="text-red-600 text-2xl md:text-3xl font-black tracking-tighter cursor-pointer">
                            NETFLIX
                        </h1>
                        <p className='text-red-600 text-xs md:text-xs font-black tracking-tighter cursor-pointer'>Free</p>
                    </div>
                    <ul className="hidden lg:flex items-center gap-5 text-[14px] font-light text-gray-200">
                        <li className="cursor-pointer transition hover:text-gray-400 font-medium text-white">Home</li>
                        <li className="cursor-pointer transition hover:text-gray-400">TV Shows</li>
                        <li className="cursor-pointer transition hover:text-gray-400">Movies</li>
                        <li className="cursor-pointer transition hover:text-gray-400">New & Popular</li>
                        <li className="cursor-pointer transition hover:text-gray-400">My List</li>
                        <li className="cursor-pointer transition hover:text-gray-400">Browse by Languages</li>
                    </ul>
                </div>

                {/* Right Side: Icons & Profile */}
                <div className="flex items-center gap-6 text-white">
                    <FaSearch className="w-5 h-5 cursor-pointer hidden sm:block" />
                    <FaBell className="w-5 h-5 cursor-pointer" />

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="flex items-center gap-2 cursor-pointer">
                            <FaCaretDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                        </label>
                        <ul tabIndex={0} className="dropdown-content mt-4 z-[1] menu p-2 shadow-xl bg-black/90 border border-white/10 rounded-sm w-44">
                            <li><a className="text-xs">Manage Profiles</a></li>
                            <li><a className="text-xs">Account</a></li>
                            <li><a className="text-xs">Help Center</a></li>
                            <div className="divider my-0"></div>
                            <li><a className="text-xs text-center font-bold">Sign out of Netflix</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;