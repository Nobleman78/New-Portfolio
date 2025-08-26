import { FaGithub } from "react-icons/fa";


const Projects = () => {
    return (
        <div>
            <h2 className="text-3xl text-white font-semibold">Projects</h2>
            <div className="w-10 border-t-4 mt-3 border-orange-400"></div>



            {/* Projects */}
            <div className="mt-8 text-white flex flex-col gap-5">
                {/* Project 1 */}
                <div className="flex items-start gap-6 p-6 rounded-xl bg-gray-800 transition duration-300 shadow-lg ">
                    <span className="h-3 w-3 mt-2 bg-cyan-500 rounded-full border border-cyan-300"></span>
                    <div className="w-full">
                        <div className="flex items-center  justify-between ">
                            <h2 className="text-2xl font-semibold mb-3">Online Food Restaurant Platform (Feb, 2025)</h2>
                            <div className="flex items-center gap-3 text-lg">
                                <a target="_blank" href="https://github.com/Nobleman78/Swaggy-Client"><FaGithub /></a>
                                <a target="_blank" className="bg-orange-400 px-4 rounded-md" href="https://foodpanda-mocha.vercel.app/" >Live</a>
                            </div>
                        </div>
                        <p className="mb-4 text-orange-300">Name : Food King</p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 text-sm bg-gray-700 rounded-full border border-cyan-400">React.js</span>
                            <span className="px-3 py-1 text-sm bg-gray-700 rounded-full border border-green-400">Node.js</span>
                            <span className="px-3 py-1 text-sm bg-gray-700 rounded-full border border-yellow-400">Express.js</span>
                            <span className="px-3 py-1 text-sm bg-gray-700 rounded-full border border-blue-400">MongoDB</span>
                            <span className="px-3 py-1 text-sm bg-gray-700 rounded-full border border-red-400">Firebase</span>
                        </div>

                        {/* Description */}

                        <div className="mt-8">
                            <p>1. User Authentication : Secure login and registration using JWT and firebase.</p>
                            <p>2. Reservation Management: View, create, and manage customer reservations.</p>
                            <p>3. Order Management: Manage orders (only how many orders is done).</p>
                            <p>4. Menu Management: Add, update, and remove menu items.</p>
                            <p>5. Staff Management: Manage staff roles.</p>
                            <p>6. Dashboard: Overview of key metrics and restaurant performance.</p>
                            <p>7. Payment: Demo payment system using Stripe (developers API).</p>
                            <p>8. Related Features: Add to cart, products Filtering, product fetching etc..</p>
                        </div>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="flex items-start gap-6 p-6 rounded-xl bg-gray-800 transition duration-300 shadow-lg">
                    <span className="h-3 w-3 mt-2 bg-cyan-500 rounded-full border border-cyan-300"></span>
                    <div className="w-full">
                        <div className="flex items-center  justify-between ">
                            <h2 className="text-2xl font-semibold mb-3">IT Company (August, 2025)</h2>
                            <div className="flex items-center gap-3 text-lg">
                                <a  target="_blank" href="https://github.com/Nobleman78/EasyTech"><FaGithub /></a>
                                <a  target="_blank" className="bg-orange-400 px-4 rounded-md" href="https://www.easytechitbd.com/" >Live</a>
                            </div>
                        </div>
                        <p className="mb-4 text-orange-300">Name : Easytech IT</p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 text-sm bg-gray-700 rounded-full border border-cyan-400">React.js</span>
                            <span className="px-3 py-1 text-sm bg-gray-700 rounded-full border border-green-400">Node.js</span>
                            <span className="px-3 py-1 text-sm bg-gray-700 rounded-full border border-yellow-400">Express.js</span>
                            <span className="px-3 py-1 text-sm bg-gray-700 rounded-full border border-blue-400">MongoDB</span>
                            <span className="px-3 py-1 text-sm bg-gray-700 rounded-full border border-red-400">Firebase</span>
                            <span className="px-3 py-1 text-sm bg-gray-700 rounded-full border border-amber-400">SSL Commerce</span>
                        </div>

                        {/* Description */}

                        <div className="mt-8">
                            <p>1. User Authentication : Secure login and registration using JWT and firebase.</p>
                            <p>2. Category [blogs, service, clients, media] Management: add, update,delete.</p>
                            <p>5. User Management: Manage user roles [admin,user].</p>
                            <p>6. Dashboard: Overview of key metrics and restaurant performance.</p>
                            <p>7. Payment: Payment system using SSLCommerce.</p>
                        </div>
                    </div>
                </div>
                {/* Project 3 */}
                <div className="flex items-start gap-6 p-6 rounded-xl bg-gray-800 transition duration-300 shadow-lg">
                    <span className="h-3 w-3 mt-2 bg-cyan-500 rounded-full border border-cyan-300"></span>
                    <div className="w-full">
                        <div className="flex items-center  justify-between ">
                            <h2 className="text-2xl font-semibold mb-3">Import Export Company (August, 2025)</h2>
                            <div className="flex items-center gap-3 text-lg">
                                <a target="_blank" href="https://github.com/Nobleman78/EasyTech"><FaGithub /></a>
                                <a target="_blank" className="bg-orange-400 px-4 rounded-md" href="https://www.nexteralogistic.com/" >Live</a>
                            </div>
                        </div>
                        <p className="mb-4 text-orange-300">Name : Nextera Logistic</p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 text-sm bg-gray-700 rounded-full border border-cyan-400">React.js</span>
                            <span className="px-3 py-1 text-sm bg-gray-700 rounded-full border border-green-400">Node.js</span>
                            <span className="px-3 py-1 text-sm bg-gray-700 rounded-full border border-yellow-400">Express.js</span>
                            <span className="px-3 py-1 text-sm bg-gray-700 rounded-full border border-blue-400">MongoDB</span>
                            <span className="px-3 py-1 text-sm bg-gray-700 rounded-full border border-red-400">Firebase</span>
                            {/* <span className="px-3 py-1 text-sm bg-gray-700 rounded-full border border-amber-400">SSL Commerce</span> */}
                        </div>

                        {/* Description */}

                        <div className="mt-8">
                            <p>1. User Authentication : Secure login and registration using JWT and firebase.</p>
                            <p>2. Category [ service, products] Management: add, update,delete.</p>
                            <p>3. User Management: Manage user roles [admin,user].</p>
                            <p>4. Dashboard: Overview of key metrics and restaurant performance.</p>
                            <p>5. Products Filtering: New, used.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;