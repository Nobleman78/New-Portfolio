const Experience = () => {
    return (
        <div>
            <h2 className="text-xl lg:text-3xl text-white font-semibold">Experience</h2>
            <div className="w-10 border-t-4 mt-3 border-orange-400"></div>

            <div className="mt-8 text-white space-y-6">
                <div>
                    <h3 className="text-lg mb-1 font-semibold">Webappick, Dhaka (November 2025 – October 2026)</h3>
                    <p className="text-orange-300 mb-2">Position: Jr. Web Developer</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-300">
                        <li>Engineered and published the "Chintu" cross-platform mobile app on the Google Play Store using React Native, Expo, and Redux Toolkit for seamless state management.</li>
                        <li>Integrated product telemetry tools, including Firebase Analytics and Microsoft Clarity, to track real-time user behavior, performance metrics, and session replays.</li>
                        <li>Ensured high application stability by establishing automated unit testing with Jest and end-to-end (E2E) UI testing using Maestro.</li>
                        <li>Resolved post-launch bugs to optimize app performance and user retention.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg mb-1 font-semibold">Beaver Labs, Melbourne (Sept 2025 – July 2026)</h3>
                    <p className="text-orange-300 mb-2">Position: Software Developer (Remote)</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-300">
                        <li>Built a saas(MVP) like Deputy platforms and client websites.</li>
                        <li>Collaborated with remote teams in an agile workflow.</li>
                        <li>Ensured code quality through testing and reviews.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg mb-1 font-semibold">Nextitsolution, Dhaka (July 2025 – October 2025)</h3>
                    <p className="text-orange-300 mb-2">Position: Intern Web Developer</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-300">
                        <li>Assisted senior developers in client discussions to gather project scope, clarify technical requirements, and outline feature specs.</li>
                        <li>Developed responsive web applications.</li>
                        <li>Delivered code with proper handover and documentation to senior dev.</li>
                        <li>Gathered feedback and resolve issues efficiently.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experience;
