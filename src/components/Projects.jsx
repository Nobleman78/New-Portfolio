import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    return (
        <div className="mb-10">
            <h2 className="text-xl lg:text-3xl text-white font-semibold">Projects</h2>
            <div className="w-10 border-t-4 mt-3 border-orange-400"></div>

            {/* Projects */}
            <div className="mt-8 text-white flex flex-col gap-5">
                
                {/* Project 1 */}
                <div className="flex items-start gap-6 p-6 rounded-xl bg-gray-800 transition duration-300 shadow-lg ">
                    <span className="h-3 w-3 mt-2 bg-cyan-500 rounded-full border border-cyan-300 shrink-0"></span>
                    <div className="w-full">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                            <h2 className="lg:text-2xl font-semibold">Chintu (Nov 2025 - Present)</h2>
                            <div className="flex items-center gap-3 text-lg">
                                <a target="_blank" className="flex items-center gap-2 bg-orange-400 px-4 py-1 rounded-md text-sm font-medium hover:bg-orange-500 transition" href="https://play.google.com/store/apps/details?id=com.webappick.chintuapp&hl=en">
                                    <FaExternalLinkAlt size={14} /> App Link
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 text-xs bg-gray-700 rounded-full border border-cyan-400">React Native</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 rounded-full border border-gray-400">Expo</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 rounded-full border border-purple-400">Redux Toolkit</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 rounded-full border border-yellow-400">Firebase</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 rounded-full border border-amber-400">Firebase Analytics</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 rounded-full border border-blue-400">Microsoft Clarity</span>
                        </div>

                        {/* Description */}
                        <div className="mt-4">
                            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                                <li>Developed a cross-platform mobile application using React Native and Expo, focusing on a responsive and user-friendly experience.</li>
                                <li>Implemented Redux Toolkit for centralized state management, enabling predictable and scalable application state handling.</li>
                                <li>Integrated Firebase services for user authentication and application analytics to support secure access and usage tracking.</li>
                                <li>Integrated Firebase Analytics and Microsoft Clarity to monitor user behavior, identify usability issues, and improve the overall user experience.</li>
                                <li>Built reusable and maintainable React Native components and managed application data flow using modern React Native development practices.</li>
                                <li>Tested and optimized the application across mobile environments using Expo to ensure reliable functionality and performance.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="flex items-start gap-6 p-6 rounded-xl bg-gray-800 transition duration-300 shadow-lg">
                    <span className="h-3 w-3 mt-2 bg-cyan-500 rounded-full border border-cyan-300 shrink-0"></span>
                    <div className="w-full">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                            <h2 className="lg:text-2xl font-semibold">Deputy MVP (Feb 2026 - July 2026)</h2>
                            <div className="flex items-center gap-3 text-lg">
                                <a target="_blank" className="flex items-center gap-2 bg-orange-400 px-4 py-1 rounded-md text-sm font-medium hover:bg-orange-500 transition" href="https://deputy-mvp.vercel.app/">
                                    <FaExternalLinkAlt size={14} /> Live Link
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 text-xs bg-gray-700 rounded-full border border-gray-200">Next.js</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 rounded-full border border-cyan-400">Tailwind</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 rounded-full border border-green-400">Supabase</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 rounded-full border border-pink-400">Framer Motion</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 rounded-full border border-indigo-400">Stripe</span>
                        </div>

                        {/* Description */}
                        <div className="mt-4">
                            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                                <li>Implemented employee roster and scheduling modules.</li>
                                <li>Developed real-time attendance, payroll, and timesheet tracking.</li>
                                <li>Designed daily task management and ordering workflows.</li>
                                <li>Built an analytics dashboard and integrated a subscription system via Stripe.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="flex items-start gap-6 p-6 rounded-xl bg-gray-800 transition duration-300 shadow-lg">
                    <span className="h-3 w-3 mt-2 bg-cyan-500 rounded-full border border-cyan-300 shrink-0"></span>
                    <div className="w-full">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                            <h2 className="lg:text-2xl font-semibold">Redis-Ecom (Aug 2026 - Sep 2026)</h2>
                            <div className="flex items-center gap-3 text-lg">
                                <a target="_blank" className="flex items-center gap-2 bg-orange-400 px-4 py-1 rounded-md text-sm font-medium hover:bg-orange-500 transition" href="https://redis-ecom.vercel.app/">
                                    <FaExternalLinkAlt size={14} /> Live Link
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 text-xs bg-gray-700 rounded-full border border-gray-200">Next.js</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 rounded-full border border-purple-400">Redux Toolkit</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 rounded-full border border-red-500">Redis</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 rounded-full border border-blue-300">Cloudinary</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 rounded-full border border-green-400">Supabase</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 rounded-full border border-green-600">Node.js</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 rounded-full border border-yellow-400">Express.js</span>
                        </div>

                        {/* Description */}
                        <div className="mt-4">
                            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                                <li>Implemented Redis token caching to accelerate authentication and reduce database load.</li>
                                <li>Managed complex app state (like shopping carts and product filters) efficiently using Redux Toolkit.</li>
                                <li>Integrated Google Login.</li>
                                <li>Integrated Cloudinary CDN for image storage and optimization.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;