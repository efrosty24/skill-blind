import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return (
        <section 
        id="projects" 
        className="min-h-screen flex items-center justify-center py-20"
        >
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-pink-400 bg-clip-text text-transparent text-center">
                    My Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Tonic Audio Project */}
                    
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/10 hover:shadow-{0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="flex justify-between items-center text-xl font-bold mb-2">
                            Tonic Audio
                            <img src="logo.svg" alt="tonic-logo" width={35} height={15} />
                        </h3>
                        <p className=" text-gray-400 mb-4">
                            Current Team Lead for Tonic Audio, leading a team of 10+ to learn new skills and create an free-to-use effect rack audio plugin.<br/> Currently under development <br/> Tonic coming soon on May 1st, 2025.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "TailwindCSS", "C++", "DSP", "Trello"].map((skill, key) => (
                                <span
                                key={key}
                                className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-s, hover:bg-red-500/20
                                hover:shadow-{0_2px_8px_rgba(59,130,246,0.1)] transition"
                                >{skill}</span>
                            )
                        )}
                        </div>
                        <div className="flex flex-between items-center">
                            <a href="#" className="text-red-400 hover:text-red-300 transition-colors">View Project → </a>  
                        </div>
                    </div>

                    {/* Alien Invasion Project*/}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/10 hover:shadow-{0_2px_8px_rgba(59,130,246,0.1)] transition-all flex flex-col justify-between h-full">
                        <h3 className="flex justify-between items-center text-xl font-bold mb-2">
                            Alien Invasion
                            <img src="ship.bmp" alt="ship"/>
                            </h3>
                        <p className=" text-gray-400 mb-4">
                            A simple game created using Python and Pygame. The player must shoot down alien ships to earn points and advance levels. <br/>Project helped me learn the basics of game development and object-oriented programming.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Python", "Pygame"].map((skill, key) => (
                                <span
                                key={key}
                                className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-s, hover:bg-red-500/20
                                hover:shadow-{0_2px_8px_rgba(59,130,246,0.1)] transition"
                                >{skill}</span>
                            )
                        )}
                        </div>
                        <div className="flex flex-between items-center">
                            <a 
                            href="https://github.com/efrosty24/alien-invasion.git" 
                            target="_blank"
                            className="text-red-400 hover:text-red-300 transition-colors"
                            >View Project → </a>
                        </div>
                    </div>

                    
                        {/* Simple Calculator Project*/}

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/10 hover:shadow-{0_2px_8px_rgba(59,130,246,0.1)] transition-all flex flex-col justify-between h-full">
                        <h3 className="flex justify-between items-center text-xl font-bold mb-2">
                            Simple Calculator
                            <h3>📚</h3>
                        </h3>
                        <p className=" text-gray-400 mb-4">
                            A simple calculator created using HTML, CSS, and JavaScript. The calculator can perform basic arithmetic operations and is fully responsive.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["HTML", "CSS", "JavaScript"].map((skill, key) => (
                                <span
                                key={key}
                                className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-s, hover:bg-red-500/20
                                hover:shadow-{0_2px_8px_rgba(59,130,246,0.1)] transition"
                                >{skill}</span>
                            )
                        )}
                        </div>
                        <div className="flex flex-between items-center">
                            <a 
                            href="https://efrosty24.github.io/Simple-Calc/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-400 hover:text-red-300 transition-colors"
                            >View Project → </a>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>

        </section>
    )
}
