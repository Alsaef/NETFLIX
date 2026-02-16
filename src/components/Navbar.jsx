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

    // আপনার দেওয়া ৩টি অ্যাড লিঙ্ক
    const adsLinkOne = 'https://www.effectivegatecpm.com/sh7bxhrzk?key=407f161661a216e8902109b758b2c4b5';
    const adsLinkTwo = "https://www.effectivegatecpm.com/k1i44cq8y?key=f5f5d6baf83b9353c97553f99f30b082";
    const adsLinkThree = "https://www.effectivegatecpm.com/nutzjfki?key=0b964243555961654471a476e01294ad";

    return (
        <nav className={`fixed top-0 z-50 w-full px-4 md:px-12 py-4 transition-colors duration-500 ${isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
            <div className="flex items-center justify-between max-w-[1800px] mx-auto">

                {/* Left Side: Logo & Links */}
                <div className="flex items-center gap-10">
                    <div className='flex gap-1 items-start cursor-pointer'>
                        <h1 className="text-red-600 text-2xl md:text-3xl font-black tracking-tighter">
                            NETFLIX
                        </h1>
                        <p className='text-red-600 text-[10px] md:text-xs font-black tracking-tighter uppercase'>Free</p>
                    </div>

                    <ul className="hidden lg:flex items-center gap-5 text-[14px] font-light text-gray-200">
                        {/* Home - No Ads (Site Link) */}
                        <li className="cursor-pointer transition hover:text-white font-medium text-white">Home</li>
                        
                        {/* TV Shows - Ads Link 1 */}
                        <li className="transition hover:text-white">
                            <a href={adsLinkOne} target="_blank" rel="noopener noreferrer">TV Shows</a>
                        </li>
                        
                        {/* Movies - Ads Link 2 */}
                        <li className="transition hover:text-white">
                            <a href={adsLinkTwo} target="_blank" rel="noopener noreferrer">Movies</a>
                        </li>
                        
                        {/* New & Popular - Ads Link 3 */}
                        <li className="transition hover:text-white">
                            <a href={adsLinkThree} target="_blank" rel="noopener noreferrer">New & Popular</a>
                        </li>

                        <li className="cursor-pointer transition hover:text-white">My List</li>
                    </ul>
                </div>

                {/* Right Side: Icons & Profile */}
                <div className="flex items-center gap-6 text-white">
                    <div className="flex items-center gap-4">
                        <FaSearch className="w-5 h-5 cursor-pointer hover:text-gray-300" />
                        <p className='text-xs font-medium cursor-pointer hidden md:block hover:text-gray-300'>KIDS</p>
                    </div>
                    <FaBell className="w-5 h-5 cursor-pointer hover:text-gray-300" />

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="flex items-center gap-2 cursor-pointer group">
                            <div className="w-8 h-8 rounded overflow-hidden">
                               
                            </div>
                            <FaCaretDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                        </label>
                        <ul tabIndex={0} className="dropdown-content mt-4 z-[1] menu p-2 shadow-xl bg-black/95 border border-white/10 rounded-sm w-44">
                            <li><a href={adsLinkOne} target="_blank" className="text-xs">Manage Profiles</a></li>
                            <li><a href={adsLinkTwo} target="_blank" className="text-xs">Account</a></li>
                            <li><a href={adsLinkThree} target="_blank" className="text-xs">Help Center</a></li>
                            <div className="divider my-0 opacity-20"></div>
                            <li><a className="text-xs text-center font-bold text-white hover:bg-red-600 transition">Sign out</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;