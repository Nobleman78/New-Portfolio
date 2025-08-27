const Skills = () => {
    return (
        <div>
            <h2 className="text-xl lg:text-3xl text-white">Skills</h2>
            <div className="w-10 border-t-4 mt-3 border-orange-400"></div>
            <div className="mt-8 text-white px-4 lg:px-10">
                {/* Languages */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-5 text-lg">
                    <h2>Languages: </h2>
                    <div className="flex flex-wrap items-center gap-4 mt-2 lg:mt-0">
                        <p className="bg-pink-700 px-4 py-1 rounded">C</p>
                        <p className="bg-blue-700 px-4 py-1 rounded">C++</p>
                        <p className="bg-sky-700 px-4 py-1 rounded">Javascript</p>
                    </div>
                </div>
                <div className="border-b-2 mt-4"></div>

                {/* Frontend */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-5 text-lg mt-10">
                    <h2>Frontend: </h2>
                    <div className="flex flex-wrap items-center gap-4 mt-2 lg:mt-0">
                        <p className="bg-green-700 px-4 py-1 rounded">React.js</p>
                        <p className="bg-yellow-700 px-6 py-1 rounded">Next.js</p>
                    </div>
                </div>
                <div className="border-b-2 mt-4"></div>

                {/* Backend */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-5 text-lg mt-10">
                    <h2>Backend: </h2>
                    <div className="flex flex-wrap items-center gap-4 mt-2 lg:mt-0">
                        <p className="bg-orange-700 px-4 py-1 rounded">Node.js</p>
                        <p className="bg-gray-700 px-6 py-1 rounded">Express.js</p>
                    </div>
                </div>
                <div className="border-b-2 mt-4"></div>

                {/* Database */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-5 text-lg mt-10">
                    <h2>Database: </h2>
                    <div className="flex flex-wrap items-center gap-4 mt-2 lg:mt-0">
                        <p className="bg-cyan-700 px-4 py-1 rounded">MongoDB</p>
                        <p className="bg-amber-700 px-6 py-1 rounded">Mongoose</p>
                    </div>
                </div>
                <div className="border-b-2 mt-4"></div>

                {/* Tools */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-5 text-lg mt-10">
                    <h2>Tools: </h2>
                    <div className="flex flex-wrap items-center gap-4 mt-2 lg:mt-0">
                        <p className="bg-emerald-700 px-4 py-1 rounded">Git</p>
                        <p className="bg-fuchsia-700 px-6 py-1 rounded">Postman</p>
                        <p className="bg-indigo-700 px-6 py-1 rounded">Vercel</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;