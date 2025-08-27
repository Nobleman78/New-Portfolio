import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import portfolio from '../assets/Portfolio/Portfolio.jpg';
import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { IoIosMenu } from "react-icons/io";

const Port = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const activeClass = ({ isActive }) => {
        return isActive
            ? 'text-orange-300 hover:text-orange-400'
            : 'text-white hover:text-orange-300';
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            <div className="bg-[#333333] border border-gray-800 w-full lg:w-1/4 lg:h-screen lg:fixed top-0 text-white flex flex-col  lg:items-center">
                {/* Profile header and menu button for mobile */}
                <div className='flex justify-between w-full p-4 lg:flex-col lg:justify-start lg:w-auto lg:p-0'>
                    <div className='flex lg:flex-col items-center gap-2'>
                        <img src={portfolio} alt="portfolio-image" loading="lazy" className="lg:p-10 w-32 lg:w-full" />
                        <h2 className="lg:text-2xl font-semibold text-center">Jesmin Chakma</h2>
                    </div>
                    {/* Menu icon visible only on mobile */}
                    <IoIosMenu className='text-4xl lg:hidden cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)} />
                </div>

                {/* Collapsible content for mobile, always visible on large screens */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:block flex flex-col items-start  px-4 lg:px-0 lg:py-4`}>
                    <div className="flex items-center gap-4 text-xl justify-center">
                        <a href="https://www.linkedin.com/in/jesmin-chakma-a92250246/">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/Nobleman78">
                            <FaGithub />
                        </a>
                    </div>
                    <div className="mt-10 w-full flex items-start flex-col ">
                        <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
                            <FaEnvelope className='text-orange-300' />
                            <p>jesminchakma39@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-2 justify-center lg:justify-start">
                            <FaPhone className='text-orange-300' />
                            <p>+8801577095775</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="bg-[#333333] relative w-full lg:w-3/4 lg:ml-[25%] min-h-screen p-4 lg:p-10">
                {/* Desktop Nav */}
                <nav className="border-b border-[#494848] py-5 bg-[#464444] text-white hidden lg:flex flex-wrap items-center justify-center gap-10 sticky top-0 z-10">
                    <NavLink className={activeClass} to="/">About</NavLink>
                    <NavLink className={activeClass} to="/experience">Experience</NavLink>
                    <NavLink className={activeClass} to="/skills">Skills</NavLink>
                    <NavLink className={activeClass} to="/education">Education</NavLink>
                    <NavLink className={activeClass} to="/projects">Projects</NavLink>
                    <NavLink className={activeClass} to="/achivement">Achivement</NavLink>
                </nav>

                <div className="mt-6">
                    <Outlet />
                </div>
            </div>

            {/* Mobile Bottom Nav */}
            <nav className="fixed bottom-0 left-0 w-full border-t border-[#494848] py-3 bg-[#464444] text-white flex flex-wrap gap-2 px-2 lg:hidden items-center justify-around z-50">
                <NavLink className={activeClass} to="/">About</NavLink>
                <NavLink className={activeClass} to="/experience">Experience</NavLink>
                <NavLink className={activeClass} to="/skills">Skills</NavLink>
                <NavLink className={activeClass} to="/education">Education</NavLink>
                <NavLink className={activeClass} to="/projects">Projects</NavLink>
                <NavLink className={activeClass} to="/achivement">Achivement</NavLink>
            </nav>

        </div>
    );
};

export default Port;    