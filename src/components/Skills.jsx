
const Skills = () => {
    return (
        <div>
            <h2 className="text-3xl text-white ">Skills</h2>
            <div className="w-10 border-t-4 mt-3 border-orange-400"></div>


            <div className="mt-8 text-white">
                <div className="flex items-center gap-5 text-lg">
                    <h2>Languages: </h2>
                    <div className="flex items-center gap-4">
                        <p className="bg-pink-700 px-4">C</p>
                        <p className="bg-blue-700 px-4">C++</p>
                        <p className="bg-sky-700 px-4">Javascript</p>
                    </div>
                </div>
                <div className="border-b-2 mt-4"></div>
                {/* Frontend */}
                <div className="flex items-center gap-5 text-lg mt-10">
                    <h2>Frontend: </h2>
                    <div className="flex items-center gap-4">
                        <p className="bg-green-700 px-4">React.js</p>
                        <p className="bg-yellow-700 px-6">Next.js</p>
                    </div>
                </div>
                <div className="border-b-2 mt-4"></div>
                {/* Backend */}
                <div className="flex items-center gap-5 text-lg mt-10">
                    <h2>Backend: </h2>
                    <div className="flex items-center gap-4">
                        <p className="bg-orange-700 px-4 ">Node.js</p>
                        <p className="bg-gray-700 px-6">Express.js</p>
                    </div>
                </div>
                <div className="border-b-2 mt-4"></div>
                {/* Database */}
                <div className="flex items-center gap-5 text-lg mt-10">
                    <h2>Database: </h2>
                    <div className="flex items-center gap-4">
                        <p className="bg-cyan-700 px-4 ">MongoDB</p>
                        <p className="bg-amber-700 px-6">Mongoose</p>
                    </div>
                </div>
                <div className="border-b-2 mt-4"></div>
                {/*Tools*/}
                <div className="flex items-center gap-5 text-lg mt-10">
                    <h2>Tools: </h2>
                    <div className="flex items-center gap-4">
                        <p className="bg-emerald-700 px-4 ">Git</p>
                        <p className="bg-fuchsia-700 px-6">Postman</p>
                        <p className="bg-indigo-700 px-6">Vercel</p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Skills;