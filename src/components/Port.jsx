import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import portfolio from '../assets/Portfolio/Portfolio.jpg';
import { NavLink, Outlet } from 'react-router-dom';
const Port = () => {
    const activeClass = ({ isActive }) => {
        return isActive
            ? 'text-orange-300 hover:text-orange-400'
            : 'text-white hover:text-orange-300';
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="bg-[#333333] border border-gray-800 w-1/4 h-screen fixed top-0  text-white flex flex-col items-center gap-3">
                <img src={portfolio} alt="portfolio-image" loading="lazy" className="p-10" />
                <h2 className="text-2xl font-semibold">Jesmin Chakma</h2>
                <div className="flex items-center gap-4 text-xl">
                    <a href="https://www.linkedin.com/in/jesmin-chakma-a92250246/">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/Nobleman78">
                        <FaGithub />
                    </a>
                </div>

                <div className="mt-10">
                    <div className="flex items-center gap-2 mb-4 ">
                        <FaEnvelope className='text-orange-300' />
                        <p>jesminchakma39@gmail.com</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaPhone className='text-orange-300' />
                        <p>+8801577095775</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="bg-[#333333] w-3/4 ml-[25%] min-h-screen overflow-y-auto p-10">
                <nav className="border-b border-[#494848] py-5 bg-[#464444] text-white flex items-center justify-center gap-10 sticky top-0 z-10">
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

        </div>
    );
};
export default Port;

